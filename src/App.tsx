import { useState, useEffect, useRef, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Anchor, 
  Search, 
  RotateCw, 
  Trash2, 
  Copy, 
  Compass, 
  Map as MapIcon, 
  Info, 
  HelpCircle, 
  Plus, 
  Ship, 
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Satellite,
  Menu
} from 'lucide-react';
import { boats, type Boat } from './data/boats';
import { locations, type WaterLocation } from './data/locations';
import confetti from 'canvas-confetti';
import './App.css';

interface ActiveBoat {
  id: string;
  boatId: string;
  lat: number;
  lng: number;
  rotation: number;
}

function App() {
  const [selectedLocation, setSelectedLocation] = useState<WaterLocation>(locations[0]);
  const [activeBoats, setActiveBoats] = useState<ActiveBoat[]>([]);
  const [activeInstanceId, setActiveInstanceId] = useState<string | null>(null);
  const [mapType, setMapType] = useState<'streets' | 'satellite'>('satellite');
  const [categoryTab, setCategoryTab] = useState<'all' | 'klein' | 'middel' | 'groot' | 'extreem' | 'referentie'>('all');
  const [zoom, setZoom] = useState<number>(locations[0].defaultZoom);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(window.innerWidth <= 768);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  // Keep a ref to latest activeBoats for use inside closures
  const activeBoatsRef = useRef<ActiveBoat[]>(activeBoats);
  useEffect(() => { activeBoatsRef.current = activeBoats; }, [activeBoats]);
  const activeInstanceIdRef = useRef<string | null>(activeInstanceId);
  useEffect(() => { activeInstanceIdRef.current = activeInstanceId; }, [activeInstanceId]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b']
    });
  };

  const updateBoatPosition = useCallback((id: string, lat: number, lng: number) => {
    setActiveBoats(prev => prev.map(b => b.id === id ? { ...b, lat, lng } : b));
  }, []);

  const addBoatToMap = useCallback((boatId: string) => {
    if (!map) return;
    const center = map.getCenter();
    const newId = `boat_${Date.now()}`;
    const newActiveBoat: ActiveBoat = {
      id: newId,
      boatId,
      lat: center.lat,
      lng: center.lng,
      rotation: 0
    };
    setActiveBoats(prev => [...prev, newActiveBoat]);
    setActiveInstanceId(newId);
    const boatData = boats.find(b => b.id === boatId);
    if (boatData && (boatData.category === 'extreem' || boatData.length > 250)) {
      triggerConfetti();
    }
    
    // Auto-close sidebar on mobile after adding a boat to show the map
    if (window.innerWidth <= 768) {
      setSidebarCollapsed(true);
    }
  }, [map]);

  const removeActiveBoat = useCallback((id: string) => {
    setActiveBoats(prev => prev.filter(b => b.id !== id));
    setActiveInstanceId(prev => prev === id ? null : prev);
  }, []);

  const duplicateActiveBoat = useCallback((activeBoat: ActiveBoat) => {
    const offset = 0.0002;
    const newId = `boat_dup_${Date.now()}`;
    const newBoat: ActiveBoat = {
      ...activeBoat,
      id: newId,
      lat: activeBoat.lat - offset,
      lng: activeBoat.lng + offset,
    };
    setActiveBoats(prev => [...prev, newBoat]);
    setActiveInstanceId(newId);
  }, []);

  const centerOnBoat = useCallback((activeBoat: ActiveBoat) => {
    if (!map) return;
    map.setView([activeBoat.lat, activeBoat.lng], map.getZoom());
  }, [map]);

  const updateBoatRotation = useCallback((id: string, rotation: number) => {
    setActiveBoats(prev => prev.map(b => b.id === id ? { ...b, rotation } : b));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentId = activeInstanceIdRef.current;
      if (!currentId) return;
      if (document.activeElement?.tagName === 'INPUT') return;
      const activeBoat = activeBoatsRef.current.find(b => b.id === currentId);
      if (!activeBoat) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        updateBoatRotation(currentId, (activeBoat.rotation - 5 + 360) % 360);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        updateBoatRotation(currentId, (activeBoat.rotation + 5) % 360);
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        removeActiveBoat(currentId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [updateBoatRotation, removeActiveBoat]);

  // Geocoding
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setShowSearchDropdown(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=6`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Fout bij zoeken:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const selectSearchResult = (result: any) => {
    const name = result.display_name.split(',')[0];
    const country = result.display_name.split(',').pop()?.trim() || '';
    const lat = parseFloat(result.lat);
    const lng = parseFloat(result.lon);
    const newLoc: WaterLocation = {
      id: `searched_${Date.now()}`,
      name,
      type: result.type || 'water',
      country,
      lat,
      lng,
      defaultZoom: 15,
      description: `Gezochte locatie: ${result.display_name}`,
      facts: 'Voeg boten toe uit de bibliotheek en sleep ze om de ware schaal te vergelijken.'
    };
    setSelectedLocation(newLoc);
    setShowSearchDropdown(false);
    setSearchQuery('');
    
    if (window.innerWidth <= 768) {
      setSidebarCollapsed(true);
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;
    const mapInstance = L.map(mapRef.current, {
      center: [selectedLocation.lat, selectedLocation.lng],
      zoom: selectedLocation.defaultZoom,
      zoomControl: false,
    });
    setMap(mapInstance);
    setZoom(selectedLocation.defaultZoom);
    L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);
    mapInstance.on('zoomend', () => setZoom(mapInstance.getZoom()));
    return () => {
      mapInstance.remove();
      setMap(null);
    };
  }, []);

  // Navigate to selected location
  useEffect(() => {
    if (!map) return;
    map.setView([selectedLocation.lat, selectedLocation.lng], selectedLocation.defaultZoom);
  }, [selectedLocation, map]);

  // Switch tile layers
  useEffect(() => {
    if (!map) return;
    if (tileLayerRef.current) tileLayerRef.current.remove();
    const url = mapType === 'satellite'
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    const attribution = mapType === 'satellite'
      ? '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
    tileLayerRef.current = L.tileLayer(url, { attribution, maxZoom: 20 }).addTo(map);
  }, [mapType, map]);

  // Build top-down boat SVG for a Leaflet marker
  const buildBoatSVG = (boatData: Boat, pixelWidth: number, pixelLength: number, isSelected: boolean, rotation: number): string => {
    const selStroke = '#22d3ee';
    const selColor = '#06b6d4';
    const glow = `drop-shadow(0 2px 5px rgba(0,0,0,0.8))${isSelected ? ` drop-shadow(0 0 ${Math.max(5, pixelWidth * 0.1)}px ${selColor})` : ''}`;

    // svgDetails contains the complete drawing; svgPath is the hull outline fallback
    const svgBody = boatData.svgDetails
      ? boatData.svgDetails
      : `<path d="${boatData.svgPath}" fill="${isSelected ? selColor : '#e2e8f0'}" fill-opacity="0.9" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>`;

    // Selection highlight — cyan stroke over the hull outline
    const selHighlight = isSelected
      ? `<path d="${boatData.svgPath}" fill="${selColor}" fill-opacity="0.18" stroke="${selStroke}" stroke-width="3" stroke-linejoin="round"/>`
      : '';

    return `
      <div style="width:${pixelWidth}px;height:${pixelLength}px;transform:rotate(${rotation}deg);transform-origin:center center;position:relative;">
        ${isSelected ? `<div style="position:absolute;inset:-5px;border:2px dashed ${selStroke};border-radius:4px;pointer-events:none;opacity:0.8;box-sizing:border-box;"></div>` : ''}
        <svg width="${pixelWidth}" height="${pixelLength}" viewBox="0 0 100 300" preserveAspectRatio="none"
             style="display:block;overflow:visible;pointer-events:none;filter:${glow};" xmlns="http://www.w3.org/2000/svg">
          ${svgBody}
          ${selHighlight}
        </svg>
      </div>
    `;
  };

  // Sync boat markers — full recreation when anything changes
  useEffect(() => {
    if (!map) return;

    // Clean up ALL existing markers and re-create them fresh
    // This ensures drag/click listeners are always fresh
    Object.values(markersRef.current).forEach(m => m.remove());
    markersRef.current = {};

    activeBoats.forEach(activeBoat => {
      const boatData = boats.find(b => b.id === activeBoat.boatId);
      if (!boatData) return;

      const latRad = activeBoat.lat * Math.PI / 180;
      const metersPerPixel = (40075016.686 * Math.cos(latRad)) / Math.pow(2, zoom + 8);
      const pixelWidth = Math.max(8, boatData.width / metersPerPixel);
      const pixelLength = Math.max(16, boatData.length / metersPerPixel);
      const isSelected = activeBoat.id === activeInstanceId;

      const html = buildBoatSVG(boatData, pixelWidth, pixelLength, isSelected, activeBoat.rotation);

      const boatIcon = L.divIcon({
        className: 'custom-leaflet-boat',
        html,
        iconSize: [pixelWidth, pixelLength],
        iconAnchor: [pixelWidth / 2, pixelLength / 2]
      });

      // No draggable:true — we implement drag via map-level events so SVG doesn't intercept
      const marker = L.marker([activeBoat.lat, activeBoat.lng], {
        icon: boatIcon,
        zIndexOffset: isSelected ? 1000 : 0,
        interactive: true,
      }).addTo(map);

      let isDragging = false;

      marker.on('mousedown', (e: L.LeafletMouseEvent) => {
        if (e.originalEvent.button !== 0) return;
        L.DomEvent.stopPropagation(e);
        e.originalEvent.preventDefault();
        isDragging = false;
        setActiveInstanceId(activeBoat.id);
        map.dragging.disable();

        const boatId = activeBoat.id;
        const onMove = (me: L.LeafletMouseEvent) => {
          isDragging = true;
          marker.setLatLng(me.latlng);
          updateBoatPosition(boatId, me.latlng.lat, me.latlng.lng);
        };
        const onUp = () => {
          map.dragging.enable();
          map.off('mousemove', onMove);
          map.off('mouseup', onUp);
        };
        map.on('mousemove', onMove);
        map.on('mouseup', onUp);
      });

      marker.on('click', () => {
        if (!isDragging) setActiveInstanceId(activeBoat.id);
      });

      marker.bindTooltip(`<b>${boatData.name}</b><br/>${boatData.length}m × ${boatData.width}m`, {
        permanent: false,
        direction: 'top',
        className: 'boat-tooltip',
        offset: [0, -(pixelLength / 2 + 8)]
      });

      markersRef.current[activeBoat.id] = marker;
    });
  }, [activeBoats, activeInstanceId, zoom, map, updateBoatPosition]);

  const filteredBoats = boats.filter(
    b => categoryTab === 'all' ? b.category !== 'referentie' : b.category === categoryTab
  );

  const getDynamicFact = () => {
    if (activeBoats.length === 0) return 'Voeg boten toe aan de kaart om ze te vergelijken!';
    const activeDetails = activeBoats
      .map(ab => ({ ...ab, data: boats.find(b => b.id === ab.boatId) }))
      .filter(item => item.data !== undefined) as (ActiveBoat & { data: Boat })[];
    if (activeDetails.length === 1) {
      const { data: single } = activeDetails[0];
      if (single.length > 300) {
        return `De ${single.name} is ${single.length}m lang — langer dan ${(single.length / 105).toFixed(1)} voetbalvelden achter elkaar!`;
      }
      return `De ${single.name} is ${single.length}m lang. Dat zijn ${Math.round(single.length / 1.8)} mensen achter elkaar.`;
    }
    const sorted = [...activeDetails].sort((a, b) => b.data.length - a.data.length);
    const largest = sorted[0].data;
    const smallest = sorted[sorted.length - 1].data;
    if (largest.id === smallest.id) return `Je hebt ${activeBoats.length}× ${largest.name} op de kaart.`;
    return `De ${largest.name} (${largest.length}m) is ${(largest.length / smallest.length).toFixed(1)}× zo lang als de ${smallest.name} (${smallest.length}m)!`;
  };

  const activeSelectedBoat = activeBoats.find(b => b.id === activeInstanceId);
  const activeSelectedBoatData = activeSelectedBoat ? boats.find(b => b.id === activeSelectedBoat.boatId) : null;

  return (
    <div className="app-container">
      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(v => !v)}
          title={sidebarCollapsed ? 'Zijpaneel openen' : 'Zijpaneel sluiten'}
        >
          {sidebarCollapsed 
            ? (window.innerWidth <= 768 ? <Menu size={20} /> : <ChevronRight size={18} />) 
            : (window.innerWidth <= 768 ? <X size={20} /> : <ChevronLeft size={18} />)
          }
        </button>

        <div className="sidebar-inner">
          <div className="sidebar-header">
            <div className="logo-container">
              <Anchor className="logo-icon" size={26} />
              <div>
                <h1>ScheepsSchaal</h1>
                <p>Ervaar boten op ware schaal</p>
              </div>
            </div>
          </div>

          <div className="sidebar-content">
            {/* LOCATION SEARCH */}
            <div>
              <div className="section-title">
                <Compass size={15} />
                <span>Locatie</span>
              </div>
              <form onSubmit={handleSearch} className="search-container">
                <div className="search-input-wrapper">
                  <Search className="search-icon" size={16} />
                  <input
                    type="text"
                    placeholder="Zoek water, haven of stad..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (!e.target.value) setShowSearchDropdown(false);
                    }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e as any); }}
                    onFocus={() => { if (searchQuery) setShowSearchDropdown(true); }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0, display: 'flex' }}
                      onClick={() => { setSearchQuery(''); setShowSearchDropdown(false); }}
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                {showSearchDropdown && (
                  <div className="search-dropdown">
                    {isSearching ? (
                      <div style={{ padding: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>Zoeken...</div>
                    ) : searchResults.length === 0 ? (
                      <div style={{ padding: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>Geen locaties gevonden</div>
                    ) : (
                      searchResults.map((result, idx) => (
                        <div key={idx} className="search-item" onClick={() => selectSearchResult(result)}>
                          <span className="search-item-title">{result.display_name.split(',')[0]}</span>
                          <span className="search-item-subtitle">{result.display_name.split(',').slice(1, 3).join(',')}</span>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </form>
              <div style={{ marginTop: '10px' }}>
                <select
                  className="custom-select"
                  value={selectedLocation.id}
                  onChange={(e) => {
                    const loc = locations.find(l => l.id === e.target.value);
                    if (loc) setSelectedLocation(loc);
                  }}
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name} ({loc.country})</option>
                  ))}
                </select>
              </div>
            </div>

            {/* LOCATION CARD */}
            <div className="location-card">
              <h3>
                <span>{selectedLocation.name}</span>
                <span className="location-tag">{selectedLocation.type}</span>
              </h3>
              <p className="location-desc">{selectedLocation.description}</p>
              <div className="location-fact">
                <Info size={14} style={{ flexShrink: 0, color: 'var(--accent-cyan)' }} />
                <span>{selectedLocation.facts}</span>
              </div>
            </div>

            {/* BOAT LIBRARY */}
            <div>
              <div className="section-title">
                <Ship size={15} />
                <span>Bootbibliotheek</span>
              </div>
              <div className="tabs-container" style={{ marginBottom: '10px' }}>
                {(['all', 'klein', 'middel', 'groot', 'extreem', 'referentie'] as const).map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${categoryTab === tab ? 'active' : ''}`}
                    onClick={() => setCategoryTab(tab)}
                  >
                    {tab === 'all' ? 'Alle' : tab === 'referentie' ? 'Ref' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="boats-grid">
                {filteredBoats.map(boat => (
                  <div key={boat.id} className="boat-card" onClick={() => addBoatToMap(boat.id)}>
                    <div className="boat-preview-mini">
                      <svg viewBox="0 0 100 300" width="100%" height="100%" style={{ overflow: 'visible' }}>
                        {boat.svgDetails
                          ? <g dangerouslySetInnerHTML={{ __html: boat.svgDetails }} />
                          : <g fill="var(--accent-cyan)" fill-opacity="0.85" stroke="var(--accent-cyan)" stroke-width="2" dangerouslySetInnerHTML={{ __html: boat.svgPath }} />
                        }
                      </svg>
                    </div>
                    <div className="boat-info-mini">
                      <div className="boat-name-mini">{boat.name}</div>
                      <div className="boat-dims-mini">{boat.length}m × {boat.width}m</div>
                      <div className="boat-desc-mini">{boat.description}</div>
                    </div>
                    <button
                      className="add-boat-btn"
                      title="Voeg toe aan kaart"
                      onClick={(e) => { e.stopPropagation(); addBoatToMap(boat.id); }}
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* TIPS */}
            <div className="tips-card">
              <div className="tips-title">
                <HelpCircle size={13} style={{ color: 'var(--accent-cyan)' }} />
                <span>Sneltoetsen</span>
              </div>
              <ul className="tips-list">
                <li>🖱️ <b>Klik</b> op een boot op de kaart om te selecteren</li>
                <li>🖱️ <b>Sleep</b> om te verplaatsen</li>
                <li>⌨️ <b>A / D</b> of <b>← / →</b> om te roteren</li>
                <li>⌨️ <b>Delete</b> om de selectie te wissen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-viewport">
        <div id="map-container" ref={mapRef} />

        {/* Map type buttons */}
        <div className="map-overlay-top-right">
          <button
            className={`map-control-btn ${mapType === 'streets' ? 'active' : ''}`}
            onClick={() => setMapType('streets')}
            title="Kaartweergave"
          >
            <MapIcon size={18} />
          </button>
          <button
            className={`map-control-btn ${mapType === 'satellite' ? 'active' : ''}`}
            onClick={() => setMapType('satellite')}
            title="Satellietweergave"
          >
            <Satellite size={18} />
          </button>
        </div>

        {/* ACTIVE BOATS PANEL */}
        {activeBoats.length > 0 && (
          <div className="active-boats-panel">
            <div className="active-panel-header">
              <span>Actieve Boten ({activeBoats.length})</span>
              <button
                style={{ background: 'none', border: 'none', color: 'var(--accent-rose)', fontSize: '11px', cursor: 'pointer', padding: 0 }}
                onClick={() => { setActiveBoats([]); setActiveInstanceId(null); }}
              >
                Alles wissen
              </button>
            </div>
            <div className="active-boats-list">
              {activeBoats.map(ab => {
                const bData = boats.find(b => b.id === ab.boatId);
                if (!bData) return null;
                const isSelected = ab.id === activeInstanceId;
                return (
                  <div key={ab.id} className={`active-boat-item ${isSelected ? 'selected' : ''}`}>
                    <div className="active-boat-title" onClick={() => setActiveInstanceId(ab.id)}>
                      <span>
                        <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)', marginRight: '6px', verticalAlign: 'middle' }} />
                        {bData.name}
                      </span>
                      <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                        {bData.length}m
                      </span>
                    </div>
                    {isSelected && (
                      <div className="active-boat-controls">
                        <div className="rotation-slider-wrapper">
                          <RotateCw size={11} />
                          <span>Rotatie</span>
                          <input
                            type="range"
                            min="0"
                            max="359"
                            value={ab.rotation}
                            onChange={(e) => updateBoatRotation(ab.id, parseInt(e.target.value))}
                          />
                          <span style={{ fontFamily: 'var(--font-mono)', minWidth: '32px', textAlign: 'right', fontSize: '11px' }}>{ab.rotation}°</span>
                        </div>
                        <div className="action-buttons">
                          <button className="action-btn" onClick={() => centerOnBoat(ab)} title="Focus">
                            <Compass size={11} /> Focus
                          </button>
                          <button className="action-btn" onClick={() => duplicateActiveBoat(ab)} title="Dupliceer">
                            <Copy size={11} /> Dupliceer
                          </button>
                          <button className="action-btn delete" onClick={() => removeActiveBoat(ab.id)} title="Wis">
                            <Trash2 size={11} /> Wis
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM COMPARISON BAR */}
        {activeBoats.length > 0 && (
          <div className="bottom-comparison-container">
            <div className="comparison-header">
              <span>Schaalvergelijking</span>
              {activeSelectedBoatData && (
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Selectie: <b style={{ color: 'var(--text-primary)' }}>{activeSelectedBoatData.name}</b> {activeSelectedBoatData.length}m × {activeSelectedBoatData.width}m
                </span>
              )}
            </div>
            <div className="comparison-grid">
              {Array.from(new Set(activeBoats.map(ab => ab.boatId))).map(bId => {
                const bData = boats.find(b => b.id === bId);
                if (!bData) return null;
                const isCurrentlySelected = activeSelectedBoat?.boatId === bId;
                const containerWidth = Math.max(50, (bData.length / 458.45) * 180);
                return (
                  <div
                    key={bId}
                    className={`comparison-ship-card ${isCurrentlySelected ? 'active-comp' : ''}`}
                    style={{ width: `${containerWidth}px` }}
                  >
                    <div className="comparison-svg-wrapper" style={{ width: '100%' }}>
                      <svg viewBox="0 0 100 300" width="100%" height="100%" style={{ overflow: 'visible', transform: 'rotate(90deg)' }}>
                        {bData.svgDetails
                          ? <g dangerouslySetInnerHTML={{ __html: bData.svgDetails }} />
                          : <g fill={isCurrentlySelected ? 'var(--accent-cyan)' : 'var(--text-secondary)'} fill-opacity="0.85" dangerouslySetInnerHTML={{ __html: bData.svgPath }} />
                        }
                      </svg>
                    </div>
                    <div className="comparison-name">{bData.name}</div>
                    <div className="comparison-dims">{bData.length}m</div>
                  </div>
                );
              })}
            </div>
            <div className="comparison-facts">
              <Sparkles className="comparison-facts-icon" size={16} />
              <span>{getDynamicFact()}</span>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {activeBoats.length === 0 && (
          <div className="map-empty-state">
            <div className="map-empty-icon">⚓</div>
            <div className="map-empty-title">Nog geen boten op de kaart</div>
            <div className="map-empty-sub">
              {window.innerWidth <= 768 
                ? 'Open het menu linksboven om een boot toe te voegen' 
                : 'Kies een boot uit de bibliotheek links en klik op + om te beginnen'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
