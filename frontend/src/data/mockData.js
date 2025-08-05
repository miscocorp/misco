// Mock data for Machineryline Pakistan clone

export const siteStats = {
  totalAds: 309301,
  yearsOnMarket: 23,
  clients: 6600,
  monthlyUsers: 7000000
};

export const mainCategories = [
  { id: 'construction', name: 'Construction equipment', icon: 'Construction', color: '#ff6b47' },
  { id: 'industrial', name: 'Industrial equipment', icon: 'Factory', color: '#ff6b47' },
  { id: 'mining', name: 'Mining equipment', icon: 'Pickaxe', color: '#ff6b47' },
  { id: 'spare-parts', name: 'Spare parts', icon: 'Settings', color: '#ff6b47' },
  { id: 'services', name: 'Services', icon: 'Wrench', color: '#ff6b47' },
  { id: 'rent', name: 'Rent', icon: 'Calendar', color: '#ff6b47' },
  { id: 'companies', name: 'Companies', icon: 'Building2', color: '#ff6b47' }
];

export const constructionEquipment = [
  { name: 'Excavators', count: 31273, icon: 'Truck' },
  { name: 'Cranes', count: 7066, icon: 'Construction' },
  { name: 'Concrete equipment', count: 3754, icon: 'HardHat' },
  { name: 'Surface finishing equipment', count: 228, icon: 'Hammer' },
  { name: 'Building equipment', count: 387, icon: 'Building' },
  { name: 'Drilling machinery', count: 2671, icon: 'Drill' },
  { name: 'Road construction equipment', count: 2985, icon: 'Road' },
  { name: 'Construction rollers', count: 3260, icon: 'Circle' },
  { name: 'Earthmoving equipment', count: 5521, icon: 'Mountain' },
  { name: 'Aerial platforms', count: 7939, icon: 'ArrowUp' },
  { name: 'Modular containers', count: 580, icon: 'Box' },
  { name: 'Construction loaders', count: 3342, icon: 'Loader' }
];

export const industrialEquipment = [
  { name: 'Metalworking machinery', count: 4251, icon: 'Hammer' },
  { name: 'Woodworking machinery', count: 1847, icon: 'TreePine' },
  { name: 'Stoneworking machinery', count: 892, icon: 'Mountain' },
  { name: 'Recycling machinery', count: 1236, icon: 'Recycle' },
  { name: 'Plastic machinery', count: 567, icon: 'Package' },
  { name: 'Glass machinery', count: 234, icon: 'GlassWater' },
  { name: 'Food processing equipment', count: 1456, icon: 'ChefHat' },
  { name: 'Packaging machinery', count: 987, icon: 'Package2' },
  { name: 'Electric generators', count: 2341, icon: 'Zap' },
  { name: 'Welding equipment', count: 1789, icon: 'Flame' },
  { name: 'Compressors', count: 2456, icon: 'Wind' },
  { name: 'Pumping equipment', count: 1678, icon: 'Droplets' }
];

export const miningEquipment = [
  { name: 'Quarry machinery', count: 1245, icon: 'Pickaxe' },
  { name: 'Underground mining equipment', count: 789, icon: 'Mountain' },
  { name: 'Crushing equipment', count: 2156, icon: 'Hammer' },
  { name: 'Mining equipment parts', count: 3478, icon: 'Settings' }
];

export const spareParts = {
  total: 145938,
  brands: [
    { name: 'Liebherr parts', count: 15798 },
    { name: 'Caterpillar parts', count: 15353 },
    { name: 'Komatsu parts', count: 6821 },
    { name: 'Hitachi parts', count: 5638 },
    { name: 'Rexroth parts', count: 5220 },
    { name: 'Case parts', count: 4638 },
    { name: 'Volvo Trucks parts', count: 4234 },
    { name: 'JCB parts', count: 3913 },
    { name: 'Deutz parts', count: 3331 },
    { name: 'Kubota parts', count: 2279 },
    { name: 'John Deere parts', count: 2016 },
    { name: 'New Holland parts', count: 1944 },
    { name: 'Bobcat parts', count: 1668 },
    { name: 'Cummins parts', count: 1609 }
  ]
};

export const featuredListings = [
  {
    id: 1,
    title: 'Caterpillar 320D Tracked Excavator',
    year: 2017,
    hours: 4500,
    price: 35000,
    currency: 'USD',
    location: 'Lahore, Pakistan',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
    category: 'Excavators',
    seller: 'TrueTech Machinery'
  },
  {
    id: 2,
    title: 'Liebherr LTM 1050-3.1 Mobile Crane',
    year: 2019,
    hours: 2800,
    price: 184700,
    currency: 'EUR',
    location: 'Karachi, Pakistan',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
    category: 'Cranes',
    seller: 'Heavy Machinery Co.'
  },
  {
    id: 3,
    title: 'Komatsu PC200-8 Hydraulic Excavator',
    year: 2020,
    hours: 1200,
    price: 58000,
    currency: 'USD',
    location: 'Islamabad, Pakistan',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop',
    category: 'Excavators',
    seller: 'Pakistan Equipment'
  },
  {
    id: 4,
    title: 'JCB 3CX Backhoe Loader',
    year: 2018,
    hours: 3200,
    price: 42000,
    currency: 'USD',
    location: 'Faisalabad, Pakistan',
    image: 'https://images.unsplash.com/photo-1605741433048-099ad2c458ee?w=400&h=250&fit=crop',
    category: 'Backhoe Loaders',
    seller: 'Construction Plus'
  }
];

export const clientReviews = [
  {
    id: 1,
    company: 'Chengdu Fesi Machinery Co.,Ltd.',
    name: 'Felicia',
    country: 'China',
    countryCode: 'cn',
    yearsUsing: 4,
    review: 'Inquiry is not much, but each one is high quality and target customers',
    fullReview: 'Machineryline is a very professional construction machinery sales platform, even the quantity of contact customer is not very much from this platform, but the quality of the customer is our target customer, so we are happy to work with Machineryline.',
    logo: '/images/company-logos/fesi.png'
  },
  {
    id: 2,
    company: 'PHU KROTOSZ',
    name: 'PHU Krotosz',
    country: 'Poland',
    countryCode: 'pl',
    yearsUsing: 2,
    review: 'Everything you need for successful sales in one place. Fast, effective and simple process of creating ads.',
    fullReview: 'Everything you need for successful sales in one place. Fast, effective and simple process of creating ads. We have a lot of interest from all over the world. Communication with potential customers is facilitated by an auto-translator. I highly recommend to any trader.',
    logo: '/images/company-logos/krotosz.png'
  },
  {
    id: 3,
    company: 'CONMACH',
    name: 'Victoria',
    country: 'Turkey',
    countryCode: 'tr',
    yearsUsing: 5,
    review: 'Good job! Best ever!',
    fullReview: 'Good job! Best ever!',
    logo: '/images/company-logos/conmach.png'
  },
  {
    id: 4,
    company: 'EU Cranes',
    name: 'EU Cranes team',
    country: 'Latvia',
    countryCode: 'lv',
    yearsUsing: 12,
    review: 'We are working already six years with Autoline and all this time has been very good.',
    fullReview: 'We are working already six years with Autoline and all this time has been very good. The service is in very high level, also clients are satisfied with the service. We would recommend Autoline platform for any trader.',
    logo: '/images/company-logos/eucranes.png'
  }
];

export const relatedProjects = [
  {
    name: 'Autoline',
    description: 'Trucks and Buses',
    url: 'https://autoline24.pk/',
    logo: '/images/projects/autoline.png',
    stats: [
      { name: 'Trucks', count: 31177 },
      { name: 'Truck tractors', count: 23735 },
      { name: 'Semi-trailers', count: 17293 },
      { name: 'Dump trucks', count: 7822 },
      { name: 'Box trucks', count: 3490 }
    ]
  },
  {
    name: 'Agroline',
    description: 'Farm equipment',
    url: 'https://agroline-pk.com/',
    logo: '/images/projects/agroline.png',
    stats: [
      { name: 'Tractors', count: 15715 },
      { name: 'Combines', count: 5095 },
      { name: 'Harrows', count: 3351 },
      { name: 'Combine headers', count: 2595 },
      { name: 'Mini tractors', count: 673 }
    ]
  },
  {
    name: 'Forkliftonline',
    description: 'Material handling equipment',
    url: 'https://forkliftonline.pk/',
    logo: '/images/projects/forkliftonline.png',
    stats: [
      { name: 'Forklifts', count: 18220 },
      { name: 'Diesel forklifts', count: 3922 },
      { name: 'Electric forklifts', count: 3766 },
      { name: 'Telehandlers', count: 3486 },
      { name: 'Pallet stackers', count: 1660 }
    ]
  }
];

export const countries = [
  { code: 'pk', name: 'Pakistan', language: 'English' },
  { code: 'us', name: 'USA', language: 'English' },
  { code: 'gb', name: 'UK', language: 'English' },
  { code: 'de', name: 'Deutschland', language: 'Deutsch' },
  { code: 'fr', name: 'France', language: 'français' },
  { code: 'cn', name: '中国', language: '中文' },
  { code: 'in', name: 'India', language: 'English' }
];