/**
 * Gallery & Gifts Registry Data
 */
export const GALLERY_CATEGORIES = ['All', 'Engagement', 'Addis Ababa', 'Travels', 'Bishoftu'];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Golden Sunset at Lake Kuriftu',
    category: 'Bishoftu',
    location: 'Bishoftu, Ethiopia',
    aspect: 'aspect-[3/4]',
    tag: 'Engagement',
    caption: 'Quiet reflections over the volcanic caldera waters where forever was promised.',
    gradient: 'from-[#EFE4D2] via-[#E2D1B8] to-[#D0BA9B]',
    motif: 'sunset'
  },
  {
    id: 2,
    title: 'The Serendipitous First Coffee',
    category: 'Addis Ababa',
    location: 'Bole, Addis Ababa',
    aspect: 'aspect-[4/3]',
    tag: 'Chapter I',
    caption: 'Four effortless hours over steaming cups of freshly roasted Yirgacheffe.',
    gradient: 'from-[#F5EFE6] via-[#E8DFD1] to-[#DACBBB]',
    motif: 'coffee'
  },
  {
    id: 3,
    title: 'Rift Valley Road Trip',
    category: 'Travels',
    location: 'Lake Langano',
    aspect: 'aspect-[3/4]',
    tag: 'Adventures',
    caption: 'Golden sand shores, acoustic melodies, and starlit campfire conversations.',
    gradient: 'from-[#E7ECE5] via-[#D5DFD2] to-[#BFCDBB]',
    motif: 'lake'
  },
  {
    id: 4,
    title: 'Handcrafted Heritage & Tibeb',
    category: 'Engagement',
    location: 'Addis Ababa',
    aspect: 'aspect-[4/3]',
    tag: 'Traditions',
    caption: 'Intricate gold-woven borders celebrating generations of Ethiopian elegance.',
    gradient: 'from-[#FAF2E1] via-[#F1E0C2] to-[#DFC69C]',
    motif: 'ring'
  },
  {
    id: 5,
    title: 'Breeze Along the Promenade',
    category: 'Bishoftu',
    location: 'Kuriftu Lakefront',
    aspect: 'aspect-[3/4]',
    tag: 'Moments',
    caption: 'Walking hand in hand through the manicured acacia gardens.',
    gradient: 'from-[#F7ECE4] via-[#EBDBD0] to-[#DCBFB0]',
    motif: 'arch'
  },
  {
    id: 6,
    title: 'Under the Entoto Eucalyptus',
    category: 'Addis Ababa',
    location: 'Mount Entoto Ridge',
    aspect: 'aspect-[4/3]',
    tag: 'City Views',
    caption: 'Overlooking the vibrant lights of Addis Ababa from peaceful mountain peaks.',
    gradient: 'from-[#F3ECE2] via-[#E3D7C7] to-[#CEBDA7]',
    motif: 'sunset'
  }
];

export const REGISTRY_FUNDS = [
  {
    title: 'Honeymoon Sanctuary & Travel Fund',
    description: 'Contribute towards our dream escape through the historical northern highlands and coastal retreats.',
    icon: 'plane',
    suggestedAmounts: ['$50', '$100', '$250', '$500']
  },
  {
    title: 'Traditional Habesha Home & Heritage',
    description: 'Help us curate handcrafted Ethiopian artisan tableware, bespoke pottery, and woven tapestries for our new home.',
    icon: 'home',
    suggestedAmounts: ['$75', '$150', '$300']
  },
  {
    title: 'Lake Kuriftu Sunset Escapade',
    description: 'A romantic lakeside candlelit dinner and private wooden boat cruise during our celebratory weekend.',
    icon: 'heart',
    suggestedAmounts: ['$50', '$100', '$200']
  }
];

export const BANK_TRANSFER_DETAILS = [
  {
    bankName: 'Commercial Bank of Ethiopia (CBE)',
    accountName: 'Alazar & Serg Wedding',
    accountNumber: '1000 4589 3214 001',
    branch: 'Bole Medhanialem Branch, Addis Ababa'
  },
  {
    bankName: 'Awash Bank',
    accountName: 'Alazar & Serg Wedding',
    accountNumber: '0130 4892 7712 00',
    branch: 'Kazanchis Executive Branch'
  },
  {
    bankName: 'Telebirr Mobile Payment',
    accountName: 'Alazar Wedding Reception',
    accountNumber: '+251 91 123 4567',
    branch: 'Instant Mobile Transfer'
  }
];
