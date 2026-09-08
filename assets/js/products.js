/* LiquorBox product catalogue — static placeholder data until the backend is ready */
var PRODUCTS = [
  { id: 'jameson-750',        name: 'Jameson Irish Whiskey',        size: '750ml',        category: 'whiskey', price: 110000, img: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&q=80', desc: 'Triple-distilled Irish whiskey with notes of vanilla and toasted wood.' },
  { id: 'jack-daniels-750',   name: "Jack Daniel's Old No.7",       size: '750ml',        category: 'whiskey', price: 130000, img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800&q=80', desc: 'Charcoal-mellowed Tennessee whiskey — smooth caramel and oak.' },
  { id: 'ballantines-750',    name: "Ballantine's Finest",          size: '750ml',        category: 'whiskey', price: 85000,  img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&q=80', desc: 'Balanced blended Scotch with soft honey and gentle spice.' },
  { id: 'four-cousins-750',   name: 'Four Cousins Sweet Red',       size: '750ml',        category: 'wine',    price: 35000,  img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80', desc: 'South African natural sweet red — an easy crowd favourite.' },
  { id: 'fourth-street-750',  name: '4th Street Sweet Red',         size: '750ml',        category: 'wine',    price: 30000,  img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80', desc: 'Light, fruity and low-alcohol sweet red wine.' },
  { id: 'nederburg-750',      name: 'Nederburg Cabernet Sauvignon', size: '750ml',        category: 'wine',    price: 95000,  img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80', desc: 'Full-bodied cabernet with dark fruit and a firm finish.' },
  { id: 'nile-crate',         name: 'Nile Special',                 size: 'Crate of 24',  category: 'beer',    price: 62000,  img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80', desc: "Uganda's classic full-flavoured lager, by the crate." },
  { id: 'club-crate',         name: 'Club Pilsner',                 size: 'Crate of 24',  category: 'beer',    price: 58000,  img: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=800&q=80', desc: 'Crisp, easy-drinking pilsner for any gathering.' },
  { id: 'tusker-6',           name: 'Tusker Lite',                  size: '6-pack',       category: 'beer',    price: 25000,  img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&q=80', desc: 'Light, refreshing lager in a convenient six-pack.' },
  { id: 'waragi-750',         name: 'Uganda Waragi',                size: '750ml',        category: 'spirits', price: 28000,  img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80', desc: 'The national triple-distilled gin — bold and versatile.' },
  { id: 'smirnoff-750',       name: 'Smirnoff Red',                 size: '750ml',        category: 'spirits', price: 45000,  img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', desc: "The world's best-known vodka — clean and crisp." },
  { id: 'captain-morgan-750', name: 'Captain Morgan Spiced Gold',   size: '750ml',        category: 'spirits', price: 65000,  img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', desc: 'Caribbean rum with warming vanilla and spice.' },
  { id: 'tanqueray-750',      name: 'Tanqueray London Dry',         size: '750ml',        category: 'spirits', price: 120000, img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80', desc: 'Iconic four-botanical London dry gin.' },
  { id: 'coke-2l',            name: 'Coca-Cola',                    size: '2L',           category: 'mixers',  price: 8000,   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80', desc: 'The classic mixer for rum, whiskey and more.' },
  { id: 'tonic-6',            name: 'Tonic Water',                  size: '6 × 300ml',    category: 'mixers',  price: 15000,  img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80', desc: 'Crisp tonic — the only partner your gin needs.' },
  { id: 'redbull-4',          name: 'Red Bull',                     size: '4-pack',       category: 'mixers',  price: 20000,  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80', desc: 'Energy for the long nights.' },
  { id: 'party-house',        name: 'House Party Box',              size: 'Serves 10–15', category: 'party',   price: 150000, img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80', desc: '1 whiskey, 2 wines, 12 beers, mixers and ice — sorted.' },
  { id: 'party-weekend',      name: 'Weekend Party Box',            size: 'Serves 20–30', category: 'party',   price: 350000, img: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=800&q=80', desc: '2 spirits, 4 wines, 2 crates of beer, mixers, cups and ice.' }
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
