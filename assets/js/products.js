/* LiquorBox product catalogue — static placeholder data until the backend is ready */
/* CHANGED: catalogue expanded + every image visually audited to show liquor only.
   Previous 18-item array replaced; old entries with juice/milkshake images removed. */
var IMG = {
  jdBottle:   'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80',  // Jack Daniel's bottle
  jwBottle:   'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80',  // Johnnie Walker bottle
  whiskyServe:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',  // whisky serve on wood
  amberPour:  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',  // old fashioned pour
  amberBottle:'https://images.unsplash.com/photo-1602166242292-93a00e63e8e8?w=800&q=80',  // amber whisky bottle
  sparkling:  'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80',     // sparkling wine pour
  redToast:   'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',  // red wine toast
  redPour:    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=80',     // red wine pour
  vineyard:   'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',  // wine glass in vineyard
  redGrapes:  'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80',  // red wine with grapes
  wineFlight: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=800&q=80',  // wine tasting flight
  wineCheese: 'https://images.unsplash.com/photo-1598306442928-4d90f32c6866?w=800&q=80',  // wine tasting with cheese
  beerMug:    'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80',
  beerPour:   'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80',
  beersTwo:   'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=800&q=80',
  beerDark:   'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=800&q=80',
  beerTaps:   'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80',
  beerTap:    'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&q=80',
  tapPour:    'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?w=800&q=80',
  martini:    'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?w=800&q=80',
  ginServe:   'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=800&q=80',  // gin & rosemary serve
  coupe:      'https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=800&q=80',  // coupe cocktail
  berry:      'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80',  // vodka berry cocktail
  rumCoke:    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',     // rum & coke with lime
  mojito:     'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80',
  cuervo:     'https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=800&q=80',  // Jose Cuervo bottle
  barLuxe:    'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80',     // upscale bar shelves
  barWarm:    'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80'   // warm bar interior
};

var PRODUCTS = [
  // Whiskey, Scotch & Cognac
  { id: 'singleton-12',        name: 'The Singleton of Dufftown 12 Yr', size: '750ml', category: 'whiskey', price: 185000, img: IMG.amberBottle, desc: 'Smooth, honeyed single malt with baked apple and toasted oak.' },
  { id: 'johnnie-black-750',   name: 'Johnnie Walker Black Label',      size: '750ml', category: 'whiskey', price: 165000, img: IMG.jwBottle,    desc: '12-year blended Scotch — signature smoke, raisins and vanilla.' },
  { id: 'jack-daniels-750',    name: "Jack Daniel's Old No.7",          size: '750ml', category: 'whiskey', price: 130000, img: IMG.jdBottle,    desc: 'Charcoal-mellowed Tennessee whiskey — smooth caramel and oak.' },
  { id: 'jameson-750',         name: 'Jameson Irish Whiskey',           size: '750ml', category: 'whiskey', price: 110000, img: IMG.whiskyServe, desc: 'Triple-distilled Irish whiskey with notes of vanilla and toasted wood.' },
  { id: 'johnnie-dblack-750',  name: 'Johnnie Walker Double Black',     size: '750ml', category: 'whiskey', price: 210000, img: IMG.amberPour,   desc: 'Black Label turned up — deeper smoke, darker malts.' },
  { id: 'glenfiddich-12',      name: 'Glenfiddich 12 Yr',               size: '750ml', category: 'whiskey', price: 260000, img: IMG.amberBottle, desc: 'The classic Speyside single malt — fresh pear and subtle oak.' },
  { id: 'chivas-12',           name: 'Chivas Regal 12 Yr',              size: '750ml', category: 'whiskey', price: 160000, img: IMG.whiskyServe, desc: 'Rich, generous blended Scotch with honey and ripe apple.' },
  { id: 'ballantines-750',     name: "Ballantine's Finest",             size: '750ml', category: 'whiskey', price: 85000,  img: IMG.jwBottle,    desc: 'Balanced blended Scotch with soft honey and gentle spice.' },
  { id: 'hennessy-vs-750',     name: 'Hennessy V.S Cognac',             size: '750ml', category: 'whiskey', price: 220000, img: IMG.amberPour,   desc: 'Bold, fragrant cognac — oak, vanilla and roasted nuts.' },
  { id: 'bond7-750',           name: 'Bond 7 Whisky',                   size: '750ml', category: 'whiskey', price: 35000,  img: IMG.jdBottle,    desc: 'Everyday smooth whisky — the reliable crowd-pleaser.' },

  // Wine & Champagne
  { id: 'four-cousins-750',    name: 'Four Cousins Sweet Red',          size: '750ml', category: 'wine',    price: 35000,  img: IMG.redGrapes,  desc: 'South African natural sweet red — an easy crowd favourite.' },
  { id: 'fourth-street-750',   name: '4th Street Sweet Red',            size: '750ml', category: 'wine',    price: 30000,  img: IMG.redToast,   desc: 'Light, fruity and low-alcohol sweet red wine.' },
  { id: 'nederburg-750',       name: 'Nederburg Cabernet Sauvignon',    size: '750ml', category: 'wine',    price: 95000,  img: IMG.redPour,    desc: 'Full-bodied cabernet with dark fruit and a firm finish.' },
  { id: 'robertson-750',       name: 'Robertson Winery Sweet Red',      size: '750ml', category: 'wine',    price: 40000,  img: IMG.vineyard,   desc: 'Juicy, plummy sweet red from the Robertson Valley.' },
  { id: 'drostdy-hof-750',     name: 'Drostdy-Hof Claret Select',       size: '750ml', category: 'wine',    price: 38000,  img: IMG.wineFlight, desc: 'Soft, medium-bodied red blend — perfect with nyama choma.' },
  { id: 'chamdor-750',         name: 'Chamdor Sparkling Red Grape',     size: '750ml', category: 'wine',    price: 25000,  img: IMG.sparkling,  desc: 'Alcohol-free sparkling grape — celebrate with everyone.' },
  { id: 'jc-le-roux-750',      name: 'J.C. Le Roux Le Domaine',         size: '750ml', category: 'wine',    price: 45000,  img: IMG.wineCheese, desc: 'Light, lively sparkling wine with a gentle sweetness.' },
  { id: 'moet-brut-750',       name: 'Moët & Chandon Brut Impérial',    size: '750ml', category: 'wine',    price: 450000, img: IMG.sparkling,  desc: 'The house champagne — bright fruit and an elegant finish.' },

  // Beer & Cider
  { id: 'nile-crate',          name: 'Nile Special',                    size: 'Crate of 24', category: 'beer', price: 62000, img: IMG.beerMug,  desc: "Uganda's classic full-flavoured lager, by the crate." },
  { id: 'club-crate',          name: 'Club Pilsner',                    size: 'Crate of 24', category: 'beer', price: 58000, img: IMG.beerPour, desc: 'Crisp, easy-drinking pilsner for any gathering.' },
  { id: 'tusker-6',            name: 'Tusker Lite',                     size: '6-pack',      category: 'beer', price: 25000, img: IMG.beersTwo, desc: 'Light, refreshing lager in a convenient six-pack.' },
  { id: 'guinness-6',          name: 'Guinness Foreign Extra',          size: '6-pack',      category: 'beer', price: 30000, img: IMG.beerDark, desc: 'Bold roasted stout — brewed strong for the tropics.' },
  { id: 'castle-6',            name: 'Castle Lite',                     size: '6-pack',      category: 'beer', price: 26000, img: IMG.beerTaps, desc: 'Extra-cold-brewed light lager, easy on the palate.' },
  { id: 'heineken-6',          name: 'Heineken',                        size: '6-pack',      category: 'beer', price: 33000, img: IMG.tapPour,  desc: 'The world-famous premium lager in green.' },
  { id: 'savanna-6',           name: 'Savanna Dry Cider',               size: '6-pack',      category: 'beer', price: 36000, img: IMG.beerTap,  desc: 'Crisp, dry apple cider — served with a lemon wedge.' },

  // Gin, Vodka, Rum & Tequila
  { id: 'waragi-750',          name: 'Uganda Waragi',                   size: '750ml', category: 'spirits', price: 28000,  img: IMG.martini,  desc: 'The national triple-distilled gin — bold and versatile.' },
  { id: 'gilbeys-750',         name: "Gilbey's Gin",                    size: '750ml', category: 'spirits', price: 32000,  img: IMG.ginServe, desc: 'Smooth classic gin — a dependable G&T base.' },
  { id: 'smirnoff-750',        name: 'Smirnoff Red',                    size: '750ml', category: 'spirits', price: 45000,  img: IMG.berry,    desc: "The world's best-known vodka — clean and crisp." },
  { id: 'tanqueray-750',       name: 'Tanqueray London Dry',            size: '750ml', category: 'spirits', price: 120000, img: IMG.coupe,    desc: 'Iconic four-botanical London dry gin.' },
  { id: 'captain-morgan-750',  name: 'Captain Morgan Spiced Gold',      size: '750ml', category: 'spirits', price: 65000,  img: IMG.rumCoke,  desc: 'Caribbean rum with warming vanilla and spice.' },
  { id: 'bombay-750',          name: 'Bombay Sapphire',                 size: '750ml', category: 'spirits', price: 130000, img: IMG.martini,  desc: 'Ten botanicals, vapour-infused — a bartender favourite.' },
  { id: 'absolut-750',         name: 'Absolut Vodka',                   size: '750ml', category: 'spirits', price: 95000,  img: IMG.berry,    desc: 'Swedish winter-wheat vodka — clean with a hint of grain.' },
  { id: 'malibu-750',          name: 'Malibu Coconut Rum',              size: '750ml', category: 'spirits', price: 70000,  img: IMG.mojito,   desc: 'Sunshine in a bottle — coconut rum for easy cocktails.' },
  { id: 'ciroc-750',           name: 'Cîroc Blue Dot',                  size: '750ml', category: 'spirits', price: 250000, img: IMG.coupe,    desc: 'Grape-based French vodka — exceptionally smooth.' },
  { id: 'cuervo-gold-750',     name: 'Jose Cuervo Especial Gold',       size: '750ml', category: 'spirits', price: 150000, img: IMG.cuervo,   desc: 'Golden-style tequila — made for shots and margaritas.' },

  // Luxury & rare — collector whiskies, cognacs, champagnes, tequilas and vodkas (prices are placeholder estimates)
  { id: 'macallan-1926',       name: 'Macallan 1926 Fine & Rare',            size: '750ml', category: 'whiskey', price: 9500000000, img: IMG.amberBottle, desc: 'The most coveted whisky ever bottled — 60 years in sherry oak.' },
  { id: 'macallan-30',         name: 'Macallan 30 Year Old Sherry Oak',      size: '700ml', category: 'whiskey', price: 18500000,   img: IMG.amberBottle, desc: 'Three decades in sherry-seasoned oak — dried fruit and spice.' },
  { id: 'macallan-m',          name: 'Macallan M Decanter',                  size: '700ml', category: 'whiskey', price: 22000000,   img: IMG.amberPour,   desc: 'Lalique crystal decanter holding Macallan at its most opulent.' },
  { id: 'macallan-rare-cask',  name: 'Macallan Rare Cask',                   size: '700ml', category: 'whiskey', price: 1200000,    img: IMG.whiskyServe, desc: 'Drawn from the rarest 1% of casks maturing at the estate.' },
  { id: 'dalmore-62',          name: 'Dalmore 62',                           size: '700ml', category: 'whiskey', price: 950000000,  img: IMG.amberBottle, desc: 'Legendary Highland single malt — only a handful ever released.' },
  { id: 'dalmore-25',          name: 'Dalmore 25 Year Old',                  size: '700ml', category: 'whiskey', price: 5000000,    img: IMG.amberPour,   desc: 'Quarter-century Highland malt finished in tawny port pipes.' },
  { id: 'glenfiddich-50',      name: 'Glenfiddich 50 Year Old',              size: '700ml', category: 'whiskey', price: 150000000,  img: IMG.amberBottle, desc: 'Half a century of patience from the Valley of the Deer.' },
  { id: 'glenlivet-50',        name: 'Glenlivet 50 Year Old Winchester',     size: '700ml', category: 'whiskey', price: 95000000,   img: IMG.amberBottle, desc: 'The Winchester Collection — Speyside elegance at 50 years.' },
  { id: 'glen-grant-72',       name: 'Glen Grant 72 Year Old',               size: '700ml', category: 'whiskey', price: 200000000,  img: IMG.amberBottle, desc: 'One of the oldest Scotches ever bottled — a museum piece.' },
  { id: 'balvenie-50',         name: 'Balvenie 50 Year Old',                 size: '700ml', category: 'whiskey', price: 140000000,  img: IMG.amberBottle, desc: 'Hand-crafted Speyside malt aged fifty years in a single cask.' },
  { id: 'jw-king-george-v',    name: 'Johnnie Walker Blue Label King George V', size: '750ml', category: 'whiskey', price: 2400000, img: IMG.jwBottle,    desc: 'Blue Label blended with rare casks from distilleries long closed.' },
  { id: 'jw-elusive-umami',    name: 'Johnnie Walker Blue Label Elusive Umami', size: '750ml', category: 'whiskey', price: 1800000, img: IMG.jwBottle,    desc: 'A savoury-rich limited Blue Label with Kei Kobayashi.' },
  { id: 'hibiki-30',           name: 'Hibiki 30 Year Old',                   size: '700ml', category: 'whiskey', price: 17000000,   img: IMG.amberPour,   desc: "Suntory's harmony at its peak — silky, floral, endless." },
  { id: 'yamazaki-25',         name: 'Yamazaki 25 Year Old',                 size: '700ml', category: 'whiskey', price: 38000000,   img: IMG.amberBottle, desc: 'Deep sherry-cask Japanese single malt — profoundly rare.' },
  { id: 'yamazaki-18',         name: 'Yamazaki 18 Year Old',                 size: '700ml', category: 'whiskey', price: 5500000,    img: IMG.whiskyServe, desc: 'The benchmark Japanese single malt — mizunara depth.' },
  { id: 'hakushu-25',          name: 'Hakushu 25 Year Old',                  size: '700ml', category: 'whiskey', price: 33000000,   img: IMG.amberPour,   desc: 'Forest-distillery malt — smoky green freshness, very scarce.' },
  { id: 'karuizawa-1968',      name: 'Karuizawa 1968',                       size: '700ml', category: 'whiskey', price: 550000000,  img: IMG.amberBottle, desc: 'From the closed cult distillery — liquid Japanese history.' },
  { id: 'hanyu-full-card',     name: "Hanyu Ichiro's Full Card Series",      size: 'Set of 54', category: 'whiskey', price: 5500000000, img: IMG.barLuxe, desc: 'The complete playing-card set — the holy grail of collections.' },
  { id: 'pappy-23',            name: "Pappy Van Winkle's Family Reserve 23 Yr", size: '750ml', category: 'whiskey', price: 18000000, img: IMG.jdBottle,   desc: 'The most hunted bourbon in the world — wheated perfection.' },
  { id: 'old-rip-25',          name: 'Old Rip Van Winkle 25 Year Old',       size: '750ml', category: 'whiskey', price: 220000000,  img: IMG.amberBottle, desc: 'A quarter-century bourbon released once in a generation.' },
  { id: 'michters-25',         name: "Michter's 25 Year Old Bourbon",        size: '750ml', category: 'whiskey', price: 55000000,   img: IMG.amberPour,   desc: 'Released only when the master distiller says it is ready.' },
  { id: 'bt-double-eagle',     name: 'Buffalo Trace Double Eagle Very Rare', size: '750ml', category: 'whiskey', price: 30000000,   img: IMG.amberBottle, desc: '20 years, double eagle crystal decanter — ultra limited.' },
  { id: 'bookers',             name: "Booker's Bourbon",                     size: '750ml', category: 'whiskey', price: 380000,     img: IMG.jdBottle,    desc: 'Uncut, unfiltered barrel-proof bourbon from Jim Beam.' },
  { id: 'hennessy-richard',    name: 'Hennessy Richard',                     size: '700ml', category: 'whiskey', price: 18500000,   img: IMG.amberPour,   desc: 'A tribute to the founder — eaux-de-vie up to 200 years old.' },
  { id: 'hennessy-paradis-imp',name: 'Hennessy Paradis Impérial',            size: '700ml', category: 'whiskey', price: 11000000,   img: IMG.amberPour,   desc: 'Precision-selected eaux-de-vie — cognac at its most refined.' },
  { id: 'louis-xiii',          name: 'Rémy Martin Louis XIII',               size: '700ml', category: 'whiskey', price: 13000000,   img: IMG.amberBottle, desc: 'A century of cognac in a Baccarat crystal decanter.' },
  { id: 'remy-black-pearl',    name: 'Rémy Martin Black Pearl',              size: '700ml', category: 'whiskey', price: 180000000,  img: IMG.amberBottle, desc: 'Louis XIII drawn from a single legendary tierçon.' },
  { id: 'martell-lor',         name: "Martell L'Or de Jean Martell",         size: '700ml', category: 'whiskey', price: 11500000,   img: IMG.amberPour,   desc: 'The pinnacle of the house of Martell — gold in a decanter.' },
  { id: 'courvoisier-essence', name: "Courvoisier L'Essence",                size: '700ml', category: 'whiskey', price: 11000000,   img: IMG.amberPour,   desc: 'Rare eaux-de-vie from Grande and Petite Champagne.' },
  { id: 'camus-5150',          name: 'Camus Cuvée 5.150',                    size: '700ml', category: 'whiskey', price: 48000000,   img: IMG.amberBottle, desc: 'Five generations blended into one crystal masterpiece.' },
  { id: 'hardy-perfection',    name: 'Hardy Perfection',                     size: '700ml', category: 'whiskey', price: 55000000,   img: IMG.amberBottle, desc: '140 years of slow maturation — cognac beyond age statements.' },
  { id: 'dusse-xo',            name: "D'Ussé XO",                            size: '750ml', category: 'whiskey', price: 900000,     img: IMG.amberPour,   desc: 'Bold XO cognac finished with dark berry and honeyed oak.' },
  { id: 'adb-brut-gold',       name: 'Armand de Brignac Brut Gold',          size: '750ml', category: 'wine',    price: 1200000,    img: IMG.sparkling,   desc: 'The gold Ace of Spades — opulent, silky champagne.' },
  { id: 'adb-blanc-blancs',    name: 'Armand de Brignac Blanc de Blancs',    size: '750ml', category: 'wine',    price: 3300000,    img: IMG.sparkling,   desc: '100% chardonnay Ace of Spades — precise and luminous.' },
  { id: 'dom-p3',              name: 'Dom Pérignon P3 Plénitude',            size: '750ml', category: 'wine',    price: 9500000,    img: IMG.sparkling,   desc: 'Third plénitude — Dom Pérignon after decades on the lees.' },
  { id: 'krug-clos-mesnil',    name: 'Krug Clos du Mesnil',                  size: '750ml', category: 'wine',    price: 4500000,    img: IMG.wineCheese,  desc: 'Single walled vineyard, single year — chardonnay perfection.' },
  { id: 'cristal-vinotheque',  name: 'Louis Roederer Cristal Vinothèque',    size: '750ml', category: 'wine',    price: 3800000,    img: IMG.sparkling,   desc: 'Cristal re-released after extended cellar ageing.' },
  { id: 'pj-belle-epoque',     name: 'Perrier-Jouët Belle Epoque',           size: '750ml', category: 'wine',    price: 950000,     img: IMG.sparkling,   desc: 'The anemone bottle — floral, fine-boned vintage champagne.' },
  { id: 'clase-azul-ultra',    name: 'Clase Azul Ultra',                     size: '750ml', category: 'spirits', price: 6800000,    img: IMG.cuervo,      desc: 'Extra añejo in a hand-painted platinum-and-gold decanter.' },
  { id: 'patron-burdeos',      name: 'Patrón Gran Burdeos',                  size: '750ml', category: 'spirits', price: 1900000,    img: IMG.cuervo,      desc: 'Añejo finished in Bordeaux barrels — tequila meets claret.' },
  { id: 'don-julio-1942',      name: 'Don Julio 1942',                       size: '750ml', category: 'spirits', price: 700000,     img: IMG.cuervo,      desc: 'The celebration añejo — warm vanilla and roasted agave.' },
  { id: 'don-julio-real',      name: 'Don Julio Real',                       size: '750ml', category: 'spirits', price: 1500000,    img: IMG.cuervo,      desc: 'Extra añejo poured from a stunning agave-piña decanter.' },
  { id: 'casa-dragones',       name: 'Casa Dragones Joven',                  size: '750ml', category: 'spirits', price: 1100000,    img: IMG.coupe,       desc: 'Small-batch sipping tequila — crystalline and delicate.' },
  { id: 'gran-patron-plat',    name: 'Gran Patrón Platinum',                 size: '750ml', category: 'spirits', price: 950000,     img: IMG.coupe,       desc: 'Triple-distilled silver tequila in a crystal bottle.' },
  { id: 'beluga-gold',         name: 'Beluga Gold Line',                     size: '700ml', category: 'spirits', price: 450000,     img: IMG.berry,       desc: 'Limited noble Russian vodka — comes with its own brush and wax seal.' },
  { id: 'grey-goose-altius',   name: 'Grey Goose Altius',                    size: '750ml', category: 'spirits', price: 480000,     img: IMG.martini,     desc: 'Grey Goose elevated — winter wheat, alpine spring water.' },
  { id: 'crystal-head-aurora', name: 'Crystal Head Aurora',                  size: '700ml', category: 'spirits', price: 400000,     img: IMG.coupe,       desc: 'Iridescent skull decanter, five-times-distilled English wheat.' },
  { id: 'billionaire-vodka',   name: 'Billionaire Vodka',                    size: '750ml', category: 'spirits', price: 14000000,   img: IMG.martini,     desc: 'Ice-filtered through diamonds — vodka as pure extravagance.' },
  { id: 'diva-vodka',          name: 'Diva Vodka',                           size: '700ml', category: 'spirits', price: 15000000,   img: IMG.berry,       desc: 'Sand-filtered premium vodka with a gemstone-filled core.' },

  // Mixers
  { id: 'coke-2l',             name: 'Coca-Cola',                       size: '2L',        category: 'mixers', price: 8000,  img: IMG.rumCoke,  desc: 'The classic mixer for rum, whiskey and more.' },
  { id: 'tonic-6',             name: 'Tonic Water',                     size: '6 × 300ml', category: 'mixers', price: 15000, img: IMG.ginServe, desc: 'Crisp tonic — the only partner your gin needs.' },
  { id: 'redbull-4',           name: 'Red Bull',                        size: '4-pack',    category: 'mixers', price: 20000, img: IMG.berry,    desc: 'Energy for the long nights.' },

  // Party Boxes
  { id: 'party-house',         name: 'House Party Box',                 size: 'Serves 10–15', category: 'party', price: 150000, img: IMG.barLuxe, desc: '1 whiskey, 2 wines, 12 beers, mixers and ice — sorted.' },
  { id: 'party-weekend',       name: 'Weekend Party Box',               size: 'Serves 20–30', category: 'party', price: 350000, img: IMG.barWarm, desc: '2 spirits, 4 wines, 2 crates of beer, mixers, cups and ice.' }
];

var CATEGORIES = [
  ['all', 'All'],
  ['whiskey', 'Whiskey & Bourbon'],
  ['wine', 'Wine'],
  ['beer', 'Beer & Cider'],
  ['spirits', 'Gin, Vodka & Rum'],
  ['mixers', 'Mixers & Soft Drinks'],
  ['party', 'Party Boxes']
];

function findProduct(id){ return PRODUCTS.find(function(p){ return p.id === id; }); }
function categoryLabel(id){
  var c = CATEGORIES.find(function(x){ return x[0] === id; });
  return c ? c[1] : id;
}
