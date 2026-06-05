export interface WaterLocation {
  id: string;
  name: string;
  type: 'gracht' | 'meer' | 'kanaal' | 'haven' | 'rivier' | 'plas' | 'baai' | 'zee';
  country: string;
  lat: number;
  lng: number;
  defaultZoom: number;
  description: string;
  facts: string;
}

export const locations: WaterLocation[] = [
  {
    id: 'giesbeek_rhederlaag',
    name: 'Giesbeek (Rhederlaag)',
    type: 'plas',
    country: 'Nederland',
    lat: 51.9969828,
    lng: 6.0703053,
    defaultZoom: 15,
    description: 'Het recreatiegebied Rhederlaag bij Giesbeek, een uitgestrekt watersportgebied aan de IJssel.',
    facts: 'Rhederlaag is populair voor zeilboten en kleine pleziervaart. Probeer eens een gigantische tanker op deze plassen te leggen om te zien hoe bizar groot ze in werkelijkheid zijn!'
  },
  {
    id: 'amsterdam_gracht',
    name: 'Prinsengracht (Amsterdam)',
    type: 'gracht',
    country: 'Nederland',
    lat: 52.3742,
    lng: 4.8847,
    defaultZoom: 14,
    description: 'Een van de bekendste en drukst bevaren grachten van Amsterdam, omringd door historische grachtenpanden.',
    facts: 'De Prinsengracht is ongeveer 30 meter breed. Een modern cruiseschip of containerschip past hier absoluut niet tussen de kades, en zou de gracht volledig blokkeren!'
  },
  {
    id: 'rotterdam_haven',
    name: 'Waalhaven (Rotterdam)',
    type: 'haven',
    country: 'Nederland',
    lat: 51.8905,
    lng: 4.4441,
    defaultZoom: 14,
    description: 'Een van de grootste gegraven havenbekkens ter wereld, gelegen in de haven van Rotterdam.',
    facts: 'De Waalhaven is speciaal ontworpen voor gigantische vrachtschepen en containerschepen. Hier vallen zelfs de allergrootste schepen in het niet vergeleken met de uitgestrekte dokken.'
  },
  {
    id: 'loosdrecht',
    name: 'Loosdrechtse Plassen',
    type: 'plas',
    country: 'Nederland',
    lat: 52.2133,
    lng: 5.0682,
    defaultZoom: 14,
    description: 'Een groot watersportgebied in Utrecht en Noord-Holland, populair bij zeilers en sloepvaarders.',
    facts: 'De Loosdrechtse Plassen zijn gemiddeld slechts 2 tot 3 meter diep. Een groot marineschip of containerschip zou hier direct aan de grond lopen. Bovendien is de Seawise Giant bijna net zo lang als de breedte van sommige smallere doorgangen!'
  },
  {
    id: 'suez',
    name: 'Suez-kanaal (Ever Given incident)',
    type: 'kanaal',
    country: 'Egypte',
    lat: 30.0176,
    lng: 32.5802,
    defaultZoom: 15,
    description: 'Het cruciale zeekanaal dat de Middellandse Zee verbindt met de Rode Zee, waar in 2021 het containerschip Ever Given de wereldhandel blokkeerde.',
    facts: 'Het Suezkanaal is op de bodem zo\'n 120 meter breed en aan de waterlijn 200 tot 300 meter. De MSC Irina is 400 meter lang: als hij dwars ligt, blokkeert hij het kanaal volledig aan weerszijden!'
  },
  {
    id: 'panama',
    name: 'Miraflores Sluizen (Panamakanaal)',
    type: 'kanaal',
    country: 'Panama',
    lat: 9.0002,
    lng: -79.5919,
    defaultZoom: 17,
    description: 'De iconische sluizen aan de Pacifische zijde van het Panamakanaal, waar schepen omhoog of omlaag worden geschut.',
    facts: 'De klassieke Panamax-sluizen zijn exact 304,8 meter lang en 33,53 meter breed. Een Panamax-containerschip (294m lang, 32.2m breed) past er met slechts centimeters speling in!'
  },
  {
    id: 'lochness',
    name: 'Loch Ness',
    type: 'meer',
    country: 'Schotland',
    lat: 57.3228,
    lng: -4.4244,
    defaultZoom: 13,
    description: 'Een enorm, diep zoetwatermeer in de Schotse Hooglanden, wereldberoemd om de legende van het monster van Loch Ness.',
    facts: 'Loch Ness is extreem diep (tot 230 meter) en 36 kilometer lang. Zelfs de Seawise Giant zou hier makkelijk kunnen varen en keren. Ideaal om de legendarische Titanic op ware grootte te vergelijken.'
  },
  {
    id: 'venice',
    name: 'Canal Grande (Venetië)',
    type: 'gracht',
    country: 'Italië',
    lat: 45.4380,
    lng: 12.3281,
    defaultZoom: 18,
    description: 'De belangrijkste waterweg van Venetië, kronkelend langs prachtige paleizen uit de Renaissance.',
    facts: 'Het Canal Grande is gemiddeld zo\'n 5 meter diep en varieert tussen de 30 en 90 meter in breedte. Cruiseschepen zijn al jaren verbannen uit het centrum van Venetië vanwege de trillingen en golven die de historische funderingen beschadigen.'
  },
  {
    id: 'san_francisco',
    name: 'Golden Gate (San Francisco)',
    type: 'baai',
    country: 'Verenigde Staten',
    lat: 37.8199,
    lng: -122.4783,
    defaultZoom: 14,
    description: 'De iconische zeestraat die de Baai van San Francisco verbindt met de Grote Oceaan, overspannen door de Golden Gate Bridge.',
    facts: 'De Golden Gate Bridge heeft een doorvaarthoogte van 67 meter bij hoogwater. Sommige van de allergrootste cruiseschepen ter wereld moeten hun schoorstenen inklappen of wachten op eb om eronderdoor te passen!'
  },
  {
    id: 'sydney_harbour',
    name: 'Sydney Harbour',
    type: 'haven',
    country: 'Australië',
    lat: -33.8568,
    lng: 151.2153,
    defaultZoom: 15,
    description: 'Een van de mooiste natuurlijke havens ter wereld, met uitzicht op het Sydney Opera House en de Harbour Bridge.',
    facts: 'De havenmonding is diep en breed, waardoor cruiseschepen tot diep in de haven voor het Opera House kunnen aanmeren. Een prachtig contrast van schaal!'
  },
  {
    id: 'ijsselmeer',
    name: 'IJsselmeer (Urk)',
    type: 'meer',
    country: 'Nederland',
    lat: 52.6611,
    lng: 5.5898,
    defaultZoom: 12,
    description: 'Het grootste meer van Nederland, ontstaan door het afsluiten van de voormalige Zuiderzee.',
    facts: 'Hoewel het IJsselmeer erg groot is, is het gemiddeld slechts 4 tot 5 meter diep. Grote oceaanschepen zouden hier overal vastlopen in de modder, behalve in speciaal gebaggerde vaargeulen.'
  }
];
