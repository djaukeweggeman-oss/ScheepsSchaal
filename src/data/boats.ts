export interface Boat {
  id: string;
  name: string;
  category: 'klein' | 'middel' | 'groot' | 'extreem' | 'referentie';
  length: number; // in meters
  width: number;  // in meters
  height?: number;
  description: string;
  facts: string[];
  // ViewBox: 0 0 100 300. Bow points UP (y=0). Stern at y=300. Center: (50,150).
  svgPath: string; // hull outline path — used as selection highlight & fallback
  svgDetails?: string; // Full top-down realistic drawing (replaces hull fill)
}

export const boats: Boat[] = [

  // =========================================================
  // REFERENTIES
  // =========================================================
  {
    id: 'mens',
    name: 'Mens',
    category: 'referentie',
    length: 1.8,
    width: 0.6,
    description: 'Een gemiddeld menselijk figuur als referentie.',
    facts: [
      'De gemiddelde lengte van een volwassen mens is circa 1,8 meter.',
      'Op het dek van de MSC Irina passen meer dan 200.000 mensen naast elkaar.'
    ],
    svgPath: 'M 50,115 A 11,11 0 1 1 50,137 A 11,11 0 1 1 50,115 M 42,140 L 58,140 L 56,185 L 44,185 Z',
    svgDetails: `
      <circle cx="50" cy="118" r="10" fill="#f97316" stroke="#ea580c" stroke-width="1.5"/>
      <ellipse cx="50" cy="158" rx="8" ry="22" fill="#60a5fa" stroke="#3b82f6" stroke-width="1.5"/>
      <line x1="35" y1="148" x2="65" y2="148" stroke="#60a5fa" stroke-width="4" stroke-linecap="round"/>
      <line x1="45" y1="180" x2="41" y2="210" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
      <line x1="55" y1="180" x2="59" y2="210" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/>
    `
  },
  {
    id: 'auto',
    name: 'Gezinsauto',
    category: 'referentie',
    length: 4.7,
    width: 1.8,
    description: 'Een typische moderne gezinsauto (bijv. Volkswagen Golf).',
    facts: [
      'Er passen meer dan 85 auto\'s op het dek van de Titanic.',
      'Een supertanker kan intern ruimte bieden aan duizenden auto\'s.'
    ],
    svgPath: 'M 43,55 C 43,40 57,40 57,55 L 59,245 C 59,255 41,255 41,245 Z',
    svgDetails: `
      <rect x="40" y="55" width="20" height="190" rx="5" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
      <rect x="42" y="75" width="16" height="28" rx="2" fill="#bfdbfe" opacity="0.9"/>
      <rect x="42" y="200" width="16" height="25" rx="2" fill="#bfdbfe" opacity="0.7"/>
      <rect x="41" y="110" width="18" height="75" fill="#2563eb"/>
      <ellipse cx="43" cy="65" rx="3" ry="5" fill="#fbbf24"/>
      <ellipse cx="57" cy="65" rx="3" ry="5" fill="#fbbf24"/>
      <ellipse cx="43" cy="242" rx="3" ry="4" fill="#ef4444" opacity="0.8"/>
      <ellipse cx="57" cy="242" rx="3" ry="4" fill="#ef4444" opacity="0.8"/>
    `
  },
  {
    id: 'voetbalveld',
    name: 'Voetbalveld (UEFA)',
    category: 'referentie',
    length: 105,
    width: 68,
    description: 'Een officieel UEFA voetbalveld (105m × 68m).',
    facts: [
      'De grootste containerschepen zijn bijna 4 voetbalvelden lang.',
      'Het dek van de USS Gerald R. Ford is breder dan een voetbalveld.'
    ],
    svgPath: 'M 10,15 L 90,15 L 90,285 L 10,285 Z',
    svgDetails: `
      <rect x="10" y="15" width="80" height="270" fill="#16a34a" stroke="#fff" stroke-width="2.5"/>
      <line x1="10" y1="150" x2="90" y2="150" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="150" r="28" fill="none" stroke="#fff" stroke-width="1.5"/>
      <circle cx="50" cy="150" r="2" fill="#fff"/>
      <rect x="25" y="15" width="50" height="42" fill="none" stroke="#fff" stroke-width="1.5"/>
      <rect x="35" y="15" width="30" height="20" fill="none" stroke="#fff" stroke-width="1.5"/>
      <rect x="25" y="243" width="50" height="42" fill="none" stroke="#fff" stroke-width="1.5"/>
      <rect x="35" y="265" width="30" height="20" fill="none" stroke="#fff" stroke-width="1.5"/>
    `
  },

  // =========================================================
  // KLEINE BOTEN
  // =========================================================
  {
    id: 'kajak',
    name: 'Kajak',
    category: 'klein',
    length: 4.5,
    width: 0.65,
    description: 'Een eenpersoons sportieve kajak.',
    facts: [
      'Kajaks stammen van de Inuit af — origineel gemaakt van zeehondenhuid.',
      'De breedte is zo smal dat hij makkelijk in de gang van een cruiseschip past.'
    ],
    svgPath: 'M 50,18 C 55,80 55,220 50,282 C 45,220 45,80 50,18 Z',
    svgDetails: `
      <path d="M 50,18 C 55,80 55,220 50,282 C 45,220 45,80 50,18 Z" fill="#f97316" stroke="#ea580c" stroke-width="2"/>
      <path d="M 50,30 C 53,85 53,210 50,270 C 47,210 47,85 50,30 Z" fill="#c2410c" opacity="0.6"/>
      <ellipse cx="50" cy="148" rx="5" ry="16" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
      <line x1="12" y1="148" x2="88" y2="148" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="10" cy="148" rx="6" ry="3.5" fill="#64748b" transform="rotate(-10 10 148)"/>
      <ellipse cx="90" cy="148" rx="6" ry="3.5" fill="#64748b" transform="rotate(10 90 148)"/>
    `
  },
  {
    id: 'kano',
    name: 'Canadese Kano',
    category: 'klein',
    length: 5.0,
    width: 0.9,
    description: 'Een open Canadese kano voor recreatieve tochten.',
    facts: [
      'Traditionele kano\'s werden van berkenbast gemaakt over een houten frame.',
      'In vergelijking met een supertanker is deze kano 90× korter.'
    ],
    svgPath: 'M 50,22 C 57,90 57,210 50,278 C 43,210 43,90 50,22 Z',
    svgDetails: `
      <path d="M 50,22 C 57,90 57,210 50,278 C 43,210 43,90 50,22 Z" fill="#92400e" stroke="#78350f" stroke-width="2.5"/>
      <path d="M 50,36 C 55,92 55,208 50,264 C 45,208 45,92 50,36 Z" fill="#78350f"/>
      <rect x="47" y="88" width="6" height="4" rx="1" fill="#d97706"/>
      <rect x="47" y="108" width="6" height="4" rx="1" fill="#d97706"/>
      <rect x="47" y="186" width="6" height="4" rx="1" fill="#d97706"/>
      <rect x="47" y="206" width="6" height="4" rx="1" fill="#d97706"/>
    `
  },
  {
    id: 'roeiboot',
    name: 'Roeiboot',
    category: 'klein',
    length: 6.0,
    width: 1.2,
    description: 'Een klassieke houten roeiboot.',
    facts: [
      'Er passen bijna 6.000 roeiboten op het dek van het grootste containerschip.',
      'Roeiboten worden gebruikt als noodbehuizing in extreme situaties.'
    ],
    svgPath: 'M 50,28 C 58,80 62,200 62,272 L 38,272 C 38,200 42,80 50,28 Z',
    svgDetails: `
      <path d="M 50,28 C 58,80 62,200 62,272 L 38,272 C 38,200 42,80 50,28 Z" fill="#7c2d12" stroke="#431407" stroke-width="2.5"/>
      <path d="M 50,38 C 56,84 59,198 59,266 L 41,266 C 41,198 44,84 50,38 Z" fill="#92400e"/>
      <rect x="43" y="98" width="14" height="7" rx="1" fill="#78350f" stroke="#451a03" stroke-width="1"/>
      <rect x="42" y="158" width="16" height="7" rx="1" fill="#78350f" stroke="#451a03" stroke-width="1"/>
      <rect x="41" y="218" width="18" height="7" rx="1" fill="#78350f" stroke="#451a03" stroke-width="1"/>
      <line x1="22" y1="155" x2="43" y2="162" stroke="#d6d3d1" stroke-width="2" stroke-linecap="round"/>
      <line x1="78" y1="155" x2="57" y2="162" stroke="#d6d3d1" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="19" cy="154" rx="5" ry="2.5" fill="#a8a29e" transform="rotate(-15 19 154)"/>
      <ellipse cx="81" cy="154" rx="5" ry="2.5" fill="#a8a29e" transform="rotate(15 81 154)"/>
    `
  },
  {
    id: 'jetski',
    name: 'Jetski',
    category: 'klein',
    length: 3.3,
    width: 1.2,
    description: 'Een snelle gemotoriseerde waterscooter.',
    facts: [
      'Een moderne jetski kan snelheden bereiken van meer dan 100 km/u.',
      'De golven van een groot marineschip kunnen een jetski doen omslaan.'
    ],
    svgPath: 'M 50,38 C 58,92 60,200 57,262 L 43,262 C 40,200 42,92 50,38 Z',
    svgDetails: `
      <path d="M 50,38 C 58,92 60,200 57,262 L 43,262 C 40,200 42,92 50,38 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.5"/>
      <path d="M 50,50 C 56,96 58,196 55,256 L 45,256 C 42,196 44,96 50,50 Z" fill="#1d4ed8"/>
      <rect x="46" y="128" width="8" height="75" rx="3" fill="#0f172a" stroke="#334155" stroke-width="1"/>
      <line x1="37" y1="110" x2="63" y2="110" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
      <path d="M 44,90 L 56,90 L 53,108 L 47,108 Z" fill="#0f172a"/>
      <circle cx="50" cy="258" r="4" fill="#1e40af"/>
    `
  },
  {
    id: 'sloep',
    name: 'Klassieke Sloep',
    category: 'klein',
    length: 7.5,
    width: 2.5,
    description: 'Een gezellige motorsloep voor grachten en meren.',
    facts: [
      'Sloepen waren oorspronkelijk reddingsboten aan boord van grotere zeilschepen.',
      'De brede romp zorgt voor een stabiele ligging op het water.'
    ],
    svgPath: 'M 50,25 C 66,78 68,218 65,270 C 60,282 40,282 35,270 C 32,218 34,78 50,25 Z',
    svgDetails: `
      <path d="M 50,25 C 66,78 68,218 65,270 C 60,282 40,282 35,270 C 32,218 34,78 50,25 Z" fill="#0f172a" stroke="#d97706" stroke-width="3"/>
      <path d="M 50,38 C 63,84 65,214 62,264 C 58,272 42,272 38,264 C 35,214 37,84 50,38 Z" fill="#92400e"/>
      <path d="M 50,50 C 60,90 62,210 59,258 L 41,258 C 38,210 40,90 50,50 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
      <circle cx="50" cy="198" r="5" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
      <rect x="47" y="168" width="6" height="18" rx="2" fill="#1e293b"/>
      <circle cx="50" cy="62" r="4" fill="#fbbf24" opacity="0.7"/>
    `
  },
  {
    id: 'vissersboot',
    name: 'Kotter Vissersboot',
    category: 'klein',
    length: 12.0,
    width: 4.0,
    description: 'Een kleine visserskotter voor de kustvisserij.',
    facts: [
      'Kotters gebruiken zware zijwaartse sleepnetten (boomkorren) om platvis te vangen.',
      'De diepe kiel zorgt voor stabiliteit op de onstuimige Noordzee.'
    ],
    svgPath: 'M 50,18 C 70,78 72,228 68,280 L 32,280 C 28,228 30,78 50,18 Z',
    svgDetails: `
      <path d="M 50,18 C 70,78 72,228 68,280 L 32,280 C 28,228 30,78 50,18 Z" fill="#064e3b" stroke="#f59e0b" stroke-width="3.5"/>
      <path d="M 50,28 C 66,80 68,222 66,272 L 34,272 C 32,222 34,80 50,28 Z" fill="#065f46"/>
      <rect x="38" y="158" width="24" height="72" rx="5" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
      <rect x="42" y="168" width="16" height="12" rx="1" fill="#bae6fd"/>
      <circle cx="50" cy="105" r="14" fill="#1e3a5f" stroke="#334155" stroke-width="2"/>
      <circle cx="50" cy="105" r="7" fill="#334155"/>
      <line x1="50" y1="91" x2="50" y2="70" stroke="#94a3b8" stroke-width="2"/>
      <line x1="30" y1="118" x2="70" y2="118" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
    `
  },

  // =========================================================
  // MIDDELGROTE BOTEN
  // =========================================================
  {
    id: 'speedboot',
    name: 'Speedboot',
    category: 'middel',
    length: 8.5,
    width: 2.7,
    description: 'Een snelle sportboot voor recreatie en waterskiën.',
    facts: [
      'Door de V-vormige romp snijdt de speedboot soepel door harde golven.',
      'Het model heeft een krachtige inboard V8-motor.'
    ],
    svgPath: 'M 50,22 C 66,78 70,230 68,276 L 32,276 C 30,230 34,78 50,22 Z',
    svgDetails: `
      <path d="M 50,22 C 66,78 70,230 68,276 L 32,276 C 30,230 34,78 50,22 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
      <path d="M 50,34 C 63,82 67,224 65,268 L 35,268 C 33,224 37,82 50,34 Z" fill="#b91c1c"/>
      <path d="M 50,88 C 60,118 62,212 60,252 L 40,252 C 38,212 40,118 50,88 Z" fill="#111827"/>
      <path d="M 35,118 L 50,102 L 65,118 L 61,136 L 39,136 Z" fill="#67e8f9" opacity="0.75"/>
      <rect x="43" y="148" width="6" height="9" rx="1" fill="#f8fafc"/>
      <rect x="51" y="148" width="6" height="9" rx="1" fill="#f8fafc"/>
      <rect x="42" y="192" width="16" height="13" rx="1" fill="#f8fafc"/>
    `
  },
  {
    id: 'zeilboot',
    name: 'Kajuitzeiljacht',
    category: 'middel',
    length: 11.5,
    width: 3.6,
    description: 'Een comfortabele zeilboot met slaapplaatsen, geschikt voor zeeën.',
    facts: [
      'De mast van een boot van deze klasse is vaak meer dan 15 meter hoog.',
      'De diepe kiel weegt tonnen om omslaan te voorkomen.'
    ],
    svgPath: 'M 50,18 C 66,74 70,220 66,276 C 55,286 45,286 34,276 C 30,220 34,74 50,18 Z',
    svgDetails: `
      <path d="M 50,18 C 66,74 70,220 66,276 C 55,286 45,286 34,276 C 30,220 34,74 50,18 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2.5"/>
      <path d="M 50,76 C 58,102 60,182 58,202 L 42,202 C 40,182 42,102 50,76 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="50" y1="38" x2="50" y2="225" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M 50,42 L 48,150 L 50,150 Z" fill="#f97316" opacity="0.7"/>
      <line x1="50" y1="158" x2="50" y2="268" stroke="#334155" stroke-width="2.5" stroke-linecap="round"/>
    `
  },
  {
    id: 'jacht',
    name: 'Motorjacht',
    category: 'middel',
    length: 24.0,
    width: 6.2,
    description: 'Een luxe motorjacht met meerdere dekken.',
    facts: [
      'Dit type jacht heeft een topsnelheid van circa 25 knopen (46 km/u).',
      'Aan boord bevinden zich luxe cabines, keuken en een zonnebank.'
    ],
    svgPath: 'M 50,12 C 70,68 74,228 70,280 L 30,280 C 26,228 30,68 50,12 Z',
    svgDetails: `
      <path d="M 50,12 C 70,68 74,228 70,280 L 30,280 C 26,228 30,68 50,12 Z" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2.5"/>
      <path d="M 50,22 C 66,72 70,222 68,272 L 32,272 C 30,222 34,72 50,22 Z" fill="#f59e0b" opacity="0.45"/>
      <path d="M 50,72 C 64,108 65,198 63,240 L 37,240 C 35,198 36,108 50,72 Z" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <path d="M 40,108 L 50,92 L 60,108 L 58,130 L 42,130 Z" fill="#0284c7" opacity="0.85"/>
      <rect x="44" y="48" width="6" height="14" rx="1" fill="#e2e8f0"/>
      <rect x="51" y="48" width="6" height="14" rx="1" fill="#e2e8f0"/>
      <rect x="46" y="172" width="8" height="32" rx="1.5" fill="#111827"/>
    `
  },
  {
    id: 'sleepboot',
    name: 'Havensleepboot',
    category: 'middel',
    length: 30.0,
    width: 10.0,
    description: 'Een oersterke sleepboot voor assistentie aan grote schepen.',
    facts: [
      'Hoewel klein, heeft een sleepboot duizenden pk\'s om mammoettankers te bewegen.',
      'Trekkracht wordt gemeten in "bollard pull" — vaak meer dan 80 ton.'
    ],
    svgPath: 'M 50,14 C 78,58 78,218 74,285 C 65,296 35,296 26,285 C 22,218 22,58 50,14 Z',
    svgDetails: `
      <path d="M 50,14 C 78,58 78,218 74,285 C 65,296 35,296 26,285 C 22,218 22,58 50,14 Z" fill="#1e293b" stroke="#e11d48" stroke-width="4.5"/>
      <path d="M 50,26 C 72,68 72,212 70,278 C 62,284 38,284 30,278 C 28,212 28,68 50,26 Z" fill="#334155"/>
      <rect x="35" y="68" width="30" height="68" rx="9" fill="#f8fafc" stroke="#1e293b" stroke-width="3.5"/>
      <rect x="40" y="78" width="20" height="14" rx="1.5" fill="#bae6fd"/>
      <rect x="38" y="145" width="6" height="22" fill="#111827" rx="2"/>
      <rect x="56" y="145" width="6" height="22" fill="#111827" rx="2"/>
      <rect x="40" y="182" width="20" height="32" fill="#0f172a" rx="2.5"/>
      <circle cx="50" cy="198" r="9" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
      <circle cx="50" cy="198" r="4" fill="#475569"/>
    `
  },
  {
    id: 'patrouilleboot',
    name: 'Kustwacht Patrouilleboot',
    category: 'middel',
    length: 42.0,
    width: 8.2,
    description: 'Een snel patrouilleschip van de kustwacht.',
    facts: [
      'Gebruikt voor grenscontrole, reddingsacties en visserijinspectie.',
      'Uitgerust met een snelle RIB die via een helling gelanceerd kan worden.'
    ],
    svgPath: 'M 50,14 C 68,58 70,240 66,285 L 34,285 C 30,240 32,58 50,14 Z',
    svgDetails: `
      <path d="M 50,14 C 68,58 70,240 66,285 L 34,285 C 30,240 32,58 50,14 Z" fill="#475569" stroke="#dc2626" stroke-width="3.5"/>
      <path d="M 50,24 C 65,62 67,234 63,277 L 37,277 C 33,234 35,62 50,24 Z" fill="#64748b"/>
      <path d="M 33,58 L 38,42 L 44,42 L 38,68 Z" fill="#ea580c"/>
      <path d="M 67,58 L 62,42 L 56,42 L 62,68 Z" fill="#ea580c"/>
      <rect x="37" y="98" width="26" height="90" rx="4.5" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
      <rect x="41" y="108" width="18" height="14" rx="1.5" fill="#bae6fd"/>
      <rect x="43" y="240" width="14" height="26" rx="2.5" fill="#ef4444"/>
    `
  },

  // =========================================================
  // GROTE SCHEPEN
  // =========================================================
  {
    id: 'ferry',
    name: 'Autoveerboot (RoPax Ferry)',
    category: 'groot',
    length: 160.0,
    width: 26.0,
    description: 'Een grote ro-ro veerboot voor internationaal verkeer.',
    facts: [
      'Deze ferries hebben enorme laadruimtes waar honderden auto\'s inrijden.',
      'Laadkleppen bevinden zich aan zowel de boeg als achterkant.'
    ],
    svgPath: 'M 50,8 C 66,28 73,98 73,278 L 27,278 C 27,98 34,28 50,8 Z',
    svgDetails: `
      <defs>
        <linearGradient id="ferry-hull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#1e3a5f;stop-opacity:1"/>
          <stop offset="50%" style="stop-color:#1e40af;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#1e3a5f;stop-opacity:1"/>
        </linearGradient>
      </defs>
      <path d="M 50,8 C 66,28 73,98 73,278 L 27,278 C 27,98 34,28 50,8 Z" fill="url(#ferry-hull)" stroke="#1e3a5f" stroke-width="2"/>
      <rect x="29" y="48" width="42" height="226" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="31" y="56" width="38" height="48" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
      <line x1="31" y1="68" x2="69" y2="68" stroke="#94a3b8" stroke-width="1"/>
      <line x1="31" y1="82" x2="69" y2="82" stroke="#94a3b8" stroke-width="1"/>
      <line x1="31" y1="96" x2="69" y2="96" stroke="#94a3b8" stroke-width="1"/>
      <rect x="27" y="168" width="5" height="28" fill="#fbbf24" rx="1"/>
      <rect x="68" y="168" width="5" height="28" fill="#fbbf24" rx="1"/>
      <rect x="36" y="115" width="28" height="140" fill="#f0f4f8" stroke="#cbd5e1" stroke-width="1"/>
    `
  },
  {
    id: 'cruiseschip',
    name: 'Modern Cruiseschip',
    category: 'groot',
    length: 330.0,
    width: 42.0,
    description: 'Een drijvende stad met plek voor duizenden passagiers.',
    facts: [
      'Dit schip heeft 15 tot 20 dekken, meerdere zwembaden en theaters.',
      'De hoogte boven het wateroppervlak kan wel 65 meter bedragen.'
    ],
    svgPath: 'M 50,5 Q 70,12 75,35 L 75,285 Q 75,294 50,298 Q 25,294 25,285 L 25,35 Q 30,12 50,5 Z',
    svgDetails: `
      <defs>
        <linearGradient id="cruise-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#e0e7ff"/>
          <stop offset="45%" style="stop-color:#f8fafc"/>
          <stop offset="100%" style="stop-color:#e0e7ff"/>
        </linearGradient>
      </defs>
      <!-- Hull -->
      <path d="M 50,5 Q 70,12 75,35 L 75,285 Q 75,294 50,298 Q 25,294 25,285 L 25,35 Q 30,12 50,5 Z" fill="url(#cruise-grad)" stroke="#6366f1" stroke-width="2.5"/>
      <!-- Deck base -->
      <rect x="27" y="38" width="46" height="248" fill="#f1f5f9" rx="2"/>
      <!-- Pool deck (vivid blue pools) -->
      <rect x="29" y="48" width="42" height="28" fill="#e2e8f0"/>
      <ellipse cx="50" cy="57" rx="13" ry="8" fill="#0ea5e9" stroke="#0284c7" stroke-width="1.5"/>
      <ellipse cx="50" cy="72" rx="11" ry="6" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
      <!-- Mid superstructure -->
      <rect x="33" y="82" width="34" height="52" fill="#f0f1f3" stroke="#9ca3af" stroke-width="1"/>
      <rect x="36" y="86" width="28" height="18" fill="#dbeafe" opacity="0.8"/>
      <!-- Promenade decks - detail lines -->
      <line x1="27" y1="140" x2="73" y2="140" stroke="#cbd5e1" stroke-width="0.8"/>
      <line x1="27" y1="165" x2="73" y2="165" stroke="#cbd5e1" stroke-width="0.8"/>
      <line x1="27" y1="195" x2="73" y2="195" stroke="#cbd5e1" stroke-width="0.8"/>
      <line x1="27" y1="225" x2="73" y2="225" stroke="#cbd5e1" stroke-width="0.8"/>
      <!-- Engine / stern area -->
      <rect x="38" y="232" width="24" height="46" fill="#d1d5db"/>
      <!-- Funnels -->
      <rect x="44" y="175" width="5" height="34" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" rx="2"/>
      <rect x="52" y="185" width="4" height="22" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" rx="1.5"/>
      <!-- Helipad at bow -->
      <circle cx="50" cy="22" r="10" fill="#6b7280" stroke="#9ca3af" stroke-width="2"/>
      <circle cx="50" cy="22" r="5" fill="#d1d5db"/>
      <!-- Anchor holes -->
      <circle cx="31" cy="20" r="2.5" fill="#374151"/>
      <circle cx="69" cy="20" r="2.5" fill="#374151"/>
    `
  },
  {
    id: 'marineschip',
    name: 'Marine Destroyer',
    category: 'groot',
    length: 155.0,
    width: 18.0,
    description: 'Een snel, zwaar bewapend marineschip met raketten en radar.',
    facts: [
      'Gecamoufleerd in grijs om op te gaan in de horizon.',
      'Voorzien van stealth-hoeken om de radarreflectie te minimaliseren.'
    ],
    svgPath: 'M 50,7 L 66,19 L 68,280 Q 68,291 50,295 Q 32,291 32,280 L 34,19 Z',
    svgDetails: `
      <path d="M 50,7 L 66,19 L 68,280 Q 68,291 50,295 Q 32,291 32,280 L 34,19 Z" fill="#9ca3af" stroke="#6b7280" stroke-width="2.5"/>
      <path d="M 50,11 L 65,21 L 67,278 L 33,278 L 35,21 Z" fill="#d1d5db" opacity="0.8"/>
      <!-- Gun turret (bow) -->
      <circle cx="50" cy="44" r="4" fill="#374151" stroke="#4b5563" stroke-width="1.5"/>
      <rect x="49" y="36" width="2" height="12" fill="#1f2937"/>
      <!-- Main superstructure -->
      <rect x="43" y="68" width="14" height="96" fill="#9ca3af" stroke="#6b7280" stroke-width="1.5" rx="2.5"/>
      <rect x="46" y="78" width="8" height="28" fill="#d1d5db" stroke="#6b7280" stroke-width="1"/>
      <!-- Radar mast -->
      <line x1="50" y1="62" x2="50" y2="92" stroke="#b4b6ba" stroke-width="2.5"/>
      <circle cx="50" cy="65" r="4" fill="#f87171"/>
      <circle cx="50" cy="76" r="3" fill="#b4b6ba"/>
      <!-- VLS cells -->
      <rect x="45" y="48" width="2.5" height="16" fill="#4b5563" rx="0.5"/>
      <rect x="52.5" y="48" width="2.5" height="16" fill="#4b5563" rx="0.5"/>
      <!-- Heli deck (aft) -->
      <rect x="38" y="235" width="24" height="34" fill="#9ca3af" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
      <line x1="39" y1="242" x2="61" y2="242" stroke="#d1d5db" stroke-width="1"/>
      <line x1="39" y1="252" x2="61" y2="252" stroke="#d1d5db" stroke-width="1"/>
      <!-- Exhaust -->
      <rect x="48.5" y="178" width="2" height="38" fill="#1f2937"/>
      <rect x="51.5" y="178" width="2" height="38" fill="#1f2937"/>
    `
  },
  {
    id: 'tanker',
    name: 'Olietanker (Aframax)',
    category: 'groot',
    length: 245.0,
    width: 42.0,
    description: 'Een middelgrote olietanker voor transport van ruwe olie.',
    facts: [
      'Heeft een dubbele romp (double hull) om olielekkages bij botsingen te voorkomen.',
      'Het dek is vlak en ligt vol met dikke leidingen en kleppen.'
    ],
    svgPath: 'M 50,10 C 68,20 76,48 76,275 C 76,283 24,283 24,275 C 24,48 32,20 50,10 Z',
    svgDetails: `
      <defs>
        <linearGradient id="tanker-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#451a03"/>
          <stop offset="50%" style="stop-color:#78350f"/>
          <stop offset="100%" style="stop-color:#451a03"/>
        </linearGradient>
      </defs>
      <path d="M 50,10 C 68,20 76,48 76,275 C 76,283 24,283 24,275 C 24,48 32,20 50,10 Z" fill="url(#tanker-g)" stroke="#1c0a00" stroke-width="3"/>
      <!-- Deck -->
      <path d="M 50,16 C 66,26 73,50 73,272 L 27,272 C 27,50 34,26 50,16 Z" fill="#1c1917"/>
      <!-- Tank sections -->
      <rect x="30" y="48" width="14" height="210" fill="#292524" stroke="#44403c" stroke-width="1"/>
      <rect x="56" y="48" width="14" height="210" fill="#292524" stroke="#44403c" stroke-width="1"/>
      <!-- Centre pipeline walkway -->
      <rect x="46" y="32" width="8" height="235" fill="#3f3734" rx="1"/>
      <!-- Cross pipes -->
      <line x1="28" y1="78" x2="72" y2="78" stroke="#78716c" stroke-width="2.5"/>
      <line x1="28" y1="128" x2="72" y2="128" stroke="#78716c" stroke-width="2.5"/>
      <line x1="28" y1="178" x2="72" y2="178" stroke="#78716c" stroke-width="2.5"/>
      <line x1="28" y1="228" x2="72" y2="228" stroke="#78716c" stroke-width="2.5"/>
      <!-- Pump house (bow) -->
      <rect x="44" y="28" width="12" height="16" fill="#57534e" stroke="#44403c" stroke-width="1.5" rx="2"/>
      <!-- Superstructure (stern) -->
      <rect x="34" y="235" width="32" height="35" fill="#f8fafc" stroke="#475569" stroke-width="2.5" rx="2"/>
      <rect x="38" y="240" width="24" height="14" rx="1.5" fill="#bae6fd" opacity="0.8"/>
      <!-- Funnel -->
      <rect x="47" y="256" width="6" height="11" fill="#1c1917" rx="1.5" stroke="#374151" stroke-width="1"/>
    `
  },
  {
    id: 'bulkcarrier',
    name: 'Bulkcarrier (Supramax)',
    category: 'groot',
    length: 190.0,
    width: 32.2,
    description: 'Een bulkschip voor droge lading zoals graan, kolen of erts.',
    facts: [
      'Herkenbaar aan de grote luiken op het dek en de eigen kranen.',
      'Kan ook lossen in havens zonder kade-infrastructuur dankzij eigen kranen.'
    ],
    svgPath: 'M 50,10 C 67,20 73,48 73,275 C 73,283 27,283 27,275 C 27,48 33,20 50,10 Z',
    svgDetails: `
      <defs>
        <linearGradient id="bulk-g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#7f1d1d"/>
          <stop offset="50%" style="stop-color:#991b1b"/>
          <stop offset="100%" style="stop-color:#7f1d1d"/>
        </linearGradient>
      </defs>
      <path d="M 50,10 C 67,20 73,48 73,275 C 73,283 27,283 27,275 C 27,48 33,20 50,10 Z" fill="url(#bulk-g)" stroke="#450a0a" stroke-width="3"/>
      <path d="M 50,16 C 65,26 71,50 71,270 L 29,270 C 29,50 35,26 50,16 Z" fill="#991b1b" opacity="0.85"/>
      <!-- Hatch 1 -->
      <rect x="32" y="38" width="36" height="30" fill="#450a0a" stroke="#f59e0b" stroke-width="2.5" rx="2"/>
      <line x1="34" y1="43" x2="66" y2="43" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="52" x2="66" y2="52" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="61" x2="66" y2="61" stroke="#f59e0b" stroke-width="1"/>
      <!-- Hatch 2 -->
      <rect x="32" y="78" width="36" height="30" fill="#450a0a" stroke="#f59e0b" stroke-width="2.5" rx="2"/>
      <line x1="34" y1="83" x2="66" y2="83" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="92" x2="66" y2="92" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="101" x2="66" y2="101" stroke="#f59e0b" stroke-width="1"/>
      <!-- Hatch 3 -->
      <rect x="32" y="118" width="36" height="30" fill="#450a0a" stroke="#f59e0b" stroke-width="2.5" rx="2"/>
      <line x1="34" y1="123" x2="66" y2="123" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="132" x2="66" y2="132" stroke="#f59e0b" stroke-width="1"/>
      <line x1="34" y1="141" x2="66" y2="141" stroke="#f59e0b" stroke-width="1"/>
      <!-- Deck cranes -->
      <g opacity="0.95">
        <circle cx="50" cy="70" r="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="50" y1="70" x2="50" y2="92" stroke="#cbd5e1" stroke-width="2.5"/>
        <line x1="46" y1="89" x2="54" y2="89" stroke="#cbd5e1" stroke-width="1.5"/>
      </g>
      <g opacity="0.95">
        <circle cx="50" cy="110" r="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="50" y1="110" x2="50" y2="132" stroke="#cbd5e1" stroke-width="2.5"/>
        <line x1="46" y1="129" x2="54" y2="129" stroke="#cbd5e1" stroke-width="1.5"/>
      </g>
      <!-- Superstructure at stern -->
      <rect x="35" y="236" width="30" height="32" fill="#f8fafc" stroke="#475569" stroke-width="2" rx="2.5"/>
      <rect x="39" y="241" width="22" height="14" rx="1.5" fill="#bae6fd" opacity="0.8"/>
      <!-- Funnel -->
      <rect x="46" y="256" width="8" height="9" fill="#111827" rx="1.5"/>
    `
  },
  {
    id: 'containerschip',
    name: 'Panamax Containerschip',
    category: 'groot',
    length: 294.0,
    width: 32.2,
    description: 'Ontworpen om exact door de sluizen van het Panamakanaal te passen.',
    facts: [
      'De maximale breedte van 32,2 meter was decennialang de wereldwijde standaard.',
      'Kan circa 5.000 TEU (standaard 20-voet containers) vervoeren.'
    ],
    svgPath: 'M 50,8 C 67,18 74,48 74,276 C 74,283 26,283 26,276 C 26,48 33,18 50,8 Z',
    svgDetails: `
      <defs>
        <linearGradient id="cs-hull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#172554"/>
          <stop offset="50%" style="stop-color:#1e3a8a"/>
          <stop offset="100%" style="stop-color:#172554"/>
        </linearGradient>
      </defs>
      <path d="M 50,8 C 67,18 74,48 74,276 C 74,283 26,283 26,276 C 26,48 33,18 50,8 Z" fill="url(#cs-hull)" stroke="#0c4a6e" stroke-width="3"/>
      <path d="M 50,14 C 65,24 72,50 72,272 L 28,272 C 28,50 35,24 50,14 Z" fill="#1e3a8a" opacity="0.8"/>
      <!-- Bay 1 red -->
      <rect x="30" y="38" width="40" height="36" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" rx="2"/>
      <line x1="36" y1="38" x2="36" y2="74" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="42" y1="38" x2="42" y2="74" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="48" y1="38" x2="48" y2="74" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="54" y1="38" x2="54" y2="74" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="60" y1="38" x2="60" y2="74" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <!-- Bay 2 green -->
      <rect x="30" y="78" width="40" height="40" fill="#059669" stroke="#047857" stroke-width="1.5" rx="2"/>
      <line x1="36" y1="78" x2="36" y2="118" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="42" y1="78" x2="42" y2="118" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="48" y1="78" x2="48" y2="118" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="54" y1="78" x2="54" y2="118" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <!-- Bay 3 orange -->
      <rect x="30" y="122" width="40" height="40" fill="#d97706" stroke="#b45309" stroke-width="1.5" rx="2"/>
      <line x1="36" y1="122" x2="36" y2="162" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="42" y1="122" x2="42" y2="162" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="48" y1="122" x2="48" y2="162" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="54" y1="122" x2="54" y2="162" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <!-- Bay 4 blue -->
      <rect x="30" y="166" width="40" height="44" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" rx="2"/>
      <line x1="36" y1="166" x2="36" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="42" y1="166" x2="42" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="48" y1="166" x2="48" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <line x1="54" y1="166" x2="54" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="0.7"/>
      <!-- Bridge at stern -->
      <rect x="34" y="228" width="32" height="36" fill="#f8fafc" stroke="#475569" stroke-width="2.5" rx="2.5"/>
      <rect x="38" y="234" width="24" height="16" rx="1.5" fill="#bae6fd" opacity="0.85"/>
      <!-- Funnel -->
      <rect x="46" y="252" width="8" height="9" fill="#111827" rx="1.5" stroke="#334155" stroke-width="0.8"/>
    `
  },

  // =========================================================
  // EXTREEM
  // =========================================================
  {
    id: 'msc_irina',
    name: 'MSC Irina (Grootste Containerschip)',
    category: 'extreem',
    length: 400.0,
    width: 61.3,
    description: 'Het grootste containerschip ter wereld (Megamax-klasse, 2023).',
    facts: [
      'Kan 24.346 standaardcontainers (TEU) tegelijkertijd dragen.',
      'Als alle containers achter elkaar worden gezet, vormen ze een ketting van 146 km.',
      'Het schip is breder dan de breedte van de gemiddelde Nederlandse gracht.'
    ],
    svgPath: 'M 50,4 C 77,16 82,44 82,284 L 18,284 C 18,44 23,16 50,4 Z',
    svgDetails: `
      <defs>
        <linearGradient id="irina-hull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0369a1"/>
          <stop offset="50%" style="stop-color:#0284c7"/>
          <stop offset="100%" style="stop-color:#0369a1"/>
        </linearGradient>
      </defs>
      <path d="M 50,4 C 77,16 82,44 82,284 L 18,284 C 18,44 23,16 50,4 Z" fill="url(#irina-hull)" stroke="#0c4a6e" stroke-width="3.5"/>
      <!-- Deck -->
      <path d="M 50,10 C 75,22 80,46 80,280 L 20,280 C 20,46 25,22 50,10 Z" fill="#075985"/>
      <!-- Container bays — 5 large bays -->
      <rect x="22" y="32" width="56" height="42" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>
      <line x1="30" y1="32" x2="30" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <line x1="38" y1="32" x2="38" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <line x1="46" y1="32" x2="46" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <line x1="54" y1="32" x2="54" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <line x1="62" y1="32" x2="62" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <line x1="70" y1="32" x2="70" y2="74" stroke="rgba(0,0,0,0.25)" stroke-width="1"/>
      <rect x="22" y="78" width="56" height="42" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
      <line x1="30" y1="78" x2="30" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="38" y1="78" x2="38" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="46" y1="78" x2="46" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="54" y1="78" x2="54" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="62" y1="78" x2="62" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="70" y1="78" x2="70" y2="120" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <rect x="22" y="124" width="56" height="42" fill="#16a34a" stroke="#15803d" stroke-width="1"/>
      <line x1="30" y1="124" x2="30" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="38" y1="124" x2="38" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="46" y1="124" x2="46" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="54" y1="124" x2="54" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="62" y1="124" x2="62" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="70" y1="124" x2="70" y2="166" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <rect x="22" y="170" width="56" height="42" fill="#7c3aed" stroke="#6d28d9" stroke-width="1"/>
      <line x1="30" y1="170" x2="30" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="38" y1="170" x2="38" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="46" y1="170" x2="46" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="54" y1="170" x2="54" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="62" y1="170" x2="62" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <line x1="70" y1="170" x2="70" y2="212" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <!-- Bridge structure -->
      <rect x="22" y="216" width="56" height="16" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
      <rect x="34" y="218" width="32" height="8" fill="#1e293b"/>
      <!-- Stern containers -->
      <rect x="22" y="236" width="56" height="36" fill="#374151" stroke="#4b5563" stroke-width="1"/>
      <!-- Funnel casing -->
      <rect x="40" y="274" width="20" height="9" fill="#111827" rx="1"/>
      <circle cx="44" cy="278" r="2.5" fill="#ef4444"/>
      <circle cx="56" cy="278" r="2.5" fill="#ef4444"/>
    `
  },
  {
    id: 'titanic',
    name: 'Titanic',
    category: 'extreem',
    length: 269.1,
    width: 28.2,
    description: 'Het beroemde, tragische passagiersschip dat in 1912 zonk.',
    facts: [
      'Toen het gebouwd werd, was het het grootste bewegende object ter wereld.',
      'Had vier karakteristieke schoorstenen — de vierde was nep (voor ventilatie).',
      'Ontworpen met 16 waterdichte compartimenten om als onzinkbaar te gelden.'
    ],
    svgPath: 'M 50,4 C 62,18 65,53 65,283 C 61,293 39,293 35,283 C 35,53 38,18 50,4 Z',
    svgDetails: `
      <defs>
        <linearGradient id="titanic-hull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#111827"/>
          <stop offset="50%" style="stop-color:#1f2937"/>
          <stop offset="100%" style="stop-color:#111827"/>
        </linearGradient>
      </defs>
      <path d="M 50,4 C 62,18 65,53 65,283 C 61,293 39,293 35,283 C 35,53 38,18 50,4 Z" fill="url(#titanic-hull)" stroke="#292524" stroke-width="3"/>
      <!-- Wooden promenade deck -->
      <path d="M 50,14 C 61,26 62,53 62,280 C 59,287 41,287 38,280 C 38,53 39,26 50,14 Z" fill="#ca8a04" opacity="0.75"/>
      <!-- Superstructure (passenger decks) -->
      <rect x="41" y="48" width="18" height="195" fill="#ffffff" rx="2.5" stroke="#e5e7eb" stroke-width="1"/>
      <!-- Porthole rows -->
      <line x1="41" y1="72" x2="59" y2="72" stroke="#e5e7eb" stroke-width="0.8"/>
      <line x1="41" y1="96" x2="59" y2="96" stroke="#e5e7eb" stroke-width="0.8"/>
      <line x1="41" y1="120" x2="59" y2="120" stroke="#e5e7eb" stroke-width="0.8"/>
      <line x1="41" y1="144" x2="59" y2="144" stroke="#e5e7eb" stroke-width="0.8"/>
      <line x1="41" y1="168" x2="59" y2="168" stroke="#e5e7eb" stroke-width="0.8"/>
      <line x1="41" y1="192" x2="59" y2="192" stroke="#e5e7eb" stroke-width="0.8"/>
      <!-- 4 Funnels (iconic!) -->
      <rect x="47" y="68" width="6" height="14" fill="#b45309" stroke="#111827" stroke-width="1.5" rx="1"/>
      <rect x="47" y="68" width="6" height="3" fill="#111827" rx="1"/>
      <rect x="47" y="108" width="6" height="14" fill="#b45309" stroke="#111827" stroke-width="1.5" rx="1"/>
      <rect x="47" y="108" width="6" height="3" fill="#111827" rx="1"/>
      <rect x="47" y="148" width="6" height="14" fill="#b45309" stroke="#111827" stroke-width="1.5" rx="1"/>
      <rect x="47" y="148" width="6" height="3" fill="#111827" rx="1"/>
      <rect x="47" y="188" width="6" height="14" fill="#b45309" stroke="#111827" stroke-width="1.5" rx="1"/>
      <rect x="47" y="188" width="6" height="3" fill="#111827" rx="1"/>
      <!-- Bow anchor chains -->
      <circle cx="42" cy="16" r="2" fill="#374151"/>
      <circle cx="58" cy="16" r="2" fill="#374151"/>
    `
  },
  {
    id: 'vliegdekschip',
    name: 'USS Gerald R. Ford (Vliegdekschip)',
    category: 'extreem',
    length: 337.0,
    width: 78.0,
    description: 'De grootste supercarrier ter wereld, aangedreven door kernreactoren.',
    facts: [
      'Het vliegdek is extreem breed voor gelijktijdig lanceren en landen van vliegtuigen.',
      'Biedt onderdak aan meer dan 75 gevechtsvliegtuigen en 4.500 bemanningsleden.',
      'De "island" (brug) staat rechts om het dek vrij te houden.'
    ],
    svgPath: 'M 50,4 L 84,28 L 90,198 L 80,284 L 20,284 L 16,68 Z',
    svgDetails: `
      <path d="M 50,4 L 84,28 L 90,198 L 80,284 L 20,284 L 16,68 Z" fill="#4b5563" stroke="#374151" stroke-width="3.5"/>
      <!-- Flight deck surface -->
      <path d="M 50,8 L 82,30 L 88,196 L 78,280 L 22,280 L 18,70 Z" fill="#6b7280"/>
      <!-- Angled landing strip markings -->
      <line x1="48" y1="8" x2="32" y2="280" stroke="#fff" stroke-width="3" stroke-dasharray="12,6" opacity="0.9"/>
      <line x1="40" y1="8" x2="24" y2="280" stroke="#fbbf24" stroke-width="1.5" opacity="0.8"/>
      <!-- Catapult tracks (2 forward) -->
      <line x1="68" y1="12" x2="42" y2="150" stroke="#9ca3af" stroke-width="2" stroke-dasharray="6,3"/>
      <line x1="76" y1="16" x2="54" y2="155" stroke="#9ca3af" stroke-width="2" stroke-dasharray="6,3"/>
      <!-- The Island (bridge) at starboard (right, near bow) -->
      <rect x="78" y="155" width="9" height="40" fill="#1f2937" stroke="#374151" stroke-width="1.5" rx="2"/>
      <circle cx="82" cy="171" r="3.5" fill="#94a3b8"/>
      <!-- Aircraft elevators (deck edge rectangles) -->
      <rect x="82" y="80" width="7" height="22" fill="#374151" stroke="#4b5563" stroke-width="1"/>
      <rect x="82" y="118" width="7" height="22" fill="#374151" stroke="#4b5563" stroke-width="1"/>
      <!-- Parked F-18 sketches -->
      <path d="M 26,108 L 32,116 L 22,116 Z" fill="#374151"/>
      <path d="M 30,148 L 36,156 L 24,156 Z" fill="#374151"/>
      <path d="M 34,198 L 40,206 L 28,206 Z" fill="#374151"/>
      <!-- Deck markings (H for heli, numbers) -->
      <rect x="40" y="245" width="22" height="22" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.5"/>
    `
  },
  {
    id: 'seawise_giant',
    name: 'Seawise Giant (Grootste Supertanker Ooit)',
    category: 'extreem',
    length: 458.45,
    width: 68.8,
    description: 'Het langste schip ooit gebouwd. Nu Knock Nevis. In 1988 getorpedeerd en later als opslagtanker gebruikt.',
    facts: [
      'Met 458 meter was dit langer dan de Eiffeltoren lang is.',
      'Te groot voor het Suezkanaal, het Panamakanaal én het Kanaal.',
      'Als je hem rechtop zet is hij groter dan het Empire State Building.'
    ],
    svgPath: 'M 50,3 C 78,14 85,42 85,284 C 85,292 15,292 15,284 C 15,42 22,14 50,3 Z',
    svgDetails: `
      <defs>
        <linearGradient id="giant-hull" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#1c1917"/>
          <stop offset="50%" style="stop-color:#292524"/>
          <stop offset="100%" style="stop-color:#1c1917"/>
        </linearGradient>
      </defs>
      <path d="M 50,3 C 78,14 85,42 85,284 C 85,292 15,292 15,284 C 15,42 22,14 50,3 Z" fill="url(#giant-hull)" stroke="#0c0a09" stroke-width="3.5"/>
      <!-- Deck -->
      <path d="M 50,9 C 76,20 83,44 83,280 L 17,280 C 17,44 24,20 50,9 Z" fill="#1c1917"/>
      <!-- Main pipeline walkway (centre) -->
      <rect x="47" y="24" width="6" height="248" fill="#292524" rx="1"/>
      <!-- Tank sections left -->
      <rect x="18" y="44" width="18" height="225" fill="#231f1e" stroke="#3f3734" stroke-width="1"/>
      <!-- Tank sections right -->
      <rect x="64" y="44" width="18" height="225" fill="#231f1e" stroke="#3f3734" stroke-width="1"/>
      <!-- Lateral pipes (many of them) -->
      <line x1="17" y1="68" x2="83" y2="68" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="98" x2="83" y2="98" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="128" x2="83" y2="128" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="158" x2="83" y2="158" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="188" x2="83" y2="188" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="218" x2="83" y2="218" stroke="#57534e" stroke-width="2"/>
      <line x1="17" y1="248" x2="83" y2="248" stroke="#57534e" stroke-width="2"/>
      <!-- Pump house (bow) -->
      <rect x="42" y="26" width="16" height="14" fill="#44403c" stroke="#57534e" stroke-width="1.5" rx="2"/>
      <!-- Superstructure (stern) -->
      <rect x="30" y="252" width="40" height="26" fill="#f8fafc" stroke="#475569" stroke-width="2.5" rx="2"/>
      <rect x="34" y="256" width="32" height="14" rx="1.5" fill="#bae6fd" opacity="0.75"/>
      <!-- Funnel -->
      <rect x="44" y="270" width="12" height="9" fill="#111827" rx="2" stroke="#374151" stroke-width="1"/>
    `
  },
];
