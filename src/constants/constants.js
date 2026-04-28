export const PAGES = [
  { title: "About Us", href: "/about" },
  {
    title: "Tours",
    href: "/tours/domestic",
    dropdown: [
      {
        title: "Domestic Tours",
        href: "/tours/domestic-tours",
        dropdown: [
          { title: "North India", href: "/tours/domestic/north_india" },
          { title: "South India", href: "/tours/domestic/south_india" },
          {
            title: "East & West India",
            href: "/tours/domestic/east_and_west_india",
          },
          {
            title: "Weekend Getaways",
            href: "/tours/domestic/weekend_getaway",
          },
        ],
      },
      {
        title: "International Tours",
        href: "/tours/international-tours",
        dropdown: [
          { title: "Asia Tours", href: "/tours/international/asia" },
          { title: "Europe Tours", href: "/tours/international/europe" },
          { title: "Middle East Tours", href: "/tours/international/middle_east" },
          { title: "Africa Tours", href: "/tours/international/africa" },
          { title: "Australia & New Zealand Tours", href: "/tours/international/australia_and_newzealand" },
          // { title: "America Tours", href: "/tours/international/america" },
          { title: "USA & Canada Tours", href: "/tours/international/usa_and_canada" },
          // { title: "Canada Tours", href: "/tours/international/canada" },
          { title: "Cruise Holidays", href: "/tours/international/cruise_holidays" },
          { title: "Customized Tours", href: "/tours/international/customized_tours" },
        ],
      },
      {
        title: "Pilgrimage Tours",
        href: "/tours/pilgrimage",
        dropdown: [
          { title: "Holyland Tours", href: "/tours/pilgrimage/holyland" },
        ],
      },
      {
        title: "Inbound Tours",
        href: "/tours/inbound-tours",
        dropdown: [
          { title: "Cultural Experiences", href: "/tours/inbound/inbound-tours/Cultural Experiences" },
          { title: "Tours for Foreigners NRIs", href: "/tours/inbound/inbound-tours/Tour for Foreigners and NRIs" },
          { title: "Medical Tourism Packages", href: "/tours/inbound/inbound-tours/Medical Tourism" },
        ],
      },
    ],
  },
  { title: "Visas", href: "/visas" },
  {
    title: "Services",
    href: "/services",
    hideInfooter: true,
    dropdown: [
      {
        title: "Special Services",
        href: "/services/special-services",
        dropdown: [
          { title: "Corporate Travel", href: "/services/special-services/corporate-travel-solutions" },
          { title: "Destination Weddings", href: "/services/special-services/event-management" },
          { title: "Luxury Travel", href: "/services/special-services/luxury-travel" },
          { title: "MICE Travel", href: "/services/special-services/mice" },
        ],
      },
      {
        title: "Travel Documentation",
        dropdown: [
          { title: "Passport Services", href: "/services/travel-documentation/passport-services" },

          { title: "Travel Insurance", href: "/services/travel-documentation/travel-insurance" },
        ],
      },
      {
        title: "Travel Essentials",
        href: "/services/travel-essentials",
        dropdown: [
          { title: "Eurail", href: "/services/travel-essentials/eurorail-tickets" },
          { title: "Flight Ticket Booking", href: "/services/travel-essentials/flight-tickets" },
          { title: "Hotel Booking", href: "/services/travel-essentials/hotel-bookings" },
        ],
      },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const POPULAR_DESTINATIONS = [
  {
    name: "Almaty",
    images: ["/tours/international/asia/images/Almaty/Almaty (1).webp"],
    href: "/tours/international/asia?destinations=Almaty",
  },
  {
    name: "Azerbaijan",
    images: ["/tours/international/europe/images/Baku Azerbaijan/iltun-huseynli-BzjjoIeu-Ds-unsplash.jpg"],
    href: "/tours/international/europe?destinations=Azerbaijan",
  },
  {
    name: "Russia",
    images: ["/tours/international/europe/images/Russia/Russia (1).jpg"],
    href: "/tours/international/europe?destinations=Russia",
  },
  {
    name: "London",
    images: ["/tours/international/europe/images/United Kingdom/London (1).jpg"],
    href: "/tours/international/europe?destinations=London",
  },
  {
    name: "Bali",
    images: ["/tours/international/asia/images/Bali/Bali (1).jpg"],
    href: "/tours/international/asia?destinations=Bali",
  },
  {
    name: "Dubai",
    images: ["/tours/international/middle_east/images/Dubai/Dubai (1).jpg"],
    href: "/tours/international/middle_east?destinations=Dubai",
  },
];

export const BLOG_POSTS = [
  {
    id: "10-essential-travel-tips-for-first-time-travelers",
    title: "10 Essential Travel Tips for First-Time Travelers",
    author: "World Wings",
    tags: ["Travel Tips", "Guide"],
    image: "/blogs/10 Essential Travel Tips for First/banner.jpg",
    folder: "10 Essential Travel Tips for First",
    highlightTitle: false,
    href: "/blog/10-essential-travel-tips-for-first-time-travelers",
  },
  {
    id: "discover-india-a-journey-through-culture",
    title: "Discover India: A Journey Through Culture",
    author: "World Wings",
    tags: ["India", "Culture"],
    image: "/blogs/Discover India/banner.jpg",
    folder: "Discover India",
    highlightTitle: false,
    href: "/blog/discover-india-a-journey-through-culture",
  },
  {
    id: "why-choose-a-travel-agency-for-your-next-trip",
    title: "Why Choose a Travel Agency for Your Next Trip",
    author: "World Wings",
    tags: ["Travel Advice", "Planning"],
    image: "/blogs/Why Choose a Travel Agency/banner.jpg",
    folder: "Why Choose a Travel Agency",
    highlightTitle: true,
    href: "/blog/why-choose-a-travel-agency-for-your-next-trip",
  },
  {
    id: "the-spiritual-path-exploring-pilgrimage-tours",
    title: "The Spiritual Path: Exploring Pilgrimage Tours",
    author: "World Wings",
    tags: ["Spiritual", "Pilgrimage"],
    image: "/blogs/Pilgrimage Tours/banner.jpg",
    folder: "Pilgrimage Tours",
    highlightTitle: false,
    href: "/blog/the-spiritual-path-exploring-pilgrimage-tours",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mr. Samuel Surrender",
    location: "Chennai – Flight Ticketing",
    text: "World Wings handled my international flight bookings with exceptional care. Their team provided timely updates and ensured I had the best options available. I felt valued and supported throughout my journey.",
  },
  {
    id: 2,
    name: "Mr. Damodharan",
    location: "Chennai – Tour Package",
    text: "I chose their Europe tour package, and it exceeded my expectations. The itinerary was thoughtfully curated, accommodations were top-notch, and every detail was handled with professionalism and warmth.",
  },
  {
    id: 3,
    name: "Mr. Manoharan",
    location: "Chennai – Visa Processing",
    text: "Visa formalities can be daunting, but World Wings made the entire process seamless. Their guidance, attention to detail, and quick documentation helped me obtain my visa stress-free.",
  },
  {
    id: 4,
    name: "Mr. Micheal",
    location: "Chennai – Flight Ticketing",
    text: "I was impressed with their swift response and personalized service while booking my business-class flights. Their team understands the nuances of premium travel and delivers exactly what is needed.",
  },
  {
    id: 5,
    name: "Mrs. Mercy Ravindaran",
    location: "Chennai – Tour Package",
    text: "Traveling with World Wings was an experience filled with comfort and elegance. From airport transfers to hotel stays, everything was perfectly arranged, making it a truly memorable holiday.",
  },
  {
    id: 6,
    name: "Mrs. Celina Jani",
    location: "Coimbatore – Visa Processing",
    text: "Thanks to the expert team at World Wings, my visa paperwork for a European trip was processed quickly and without hassle. Their professionalism and support made all the difference.",
  },
  {
    id: 7,
    name: "Mr. Ranjith",
    location: "Australia – Tour Package",
    text: "Exploring Australia through World Wings was an absolute delight. The curated experiences, expert guides, and seamless arrangements made it a luxurious and enriching journey I’ll always cherish.",
  },
  {
    id: 8,
    name: "Dr. Ramesh",
    location: "Kariakudi – Tour Package (Japan Tour)",
    text: "The Japan tour package was organized impeccably. World Wings ensured I had cultural insights, smooth travel arrangements, and excellent hospitality at every stage of the trip.",
  },
  {
    id: 9,
    name: "Dr. Veeramani",
    location: "Karaikal – Tour Package",
    text: "From start to finish, my experience with World Wings was flawless. Every hotel, tour spot, and transfer was well-planned, allowing me to fully enjoy the sights without any worries.",
  },
  {
    id: 10,
    name: "Mrs. Sridevi",
    location: "Chennai – Visa Processing (Canada Visa)",
    text: "Applying for a Canada visa felt effortless thanks to the World Wings team. They handled everything with precision and care, guiding me through the complex process and ensuring all requirements were met.",
  },
];
