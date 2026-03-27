export const PAGES = [
    { title: "About Us", href: "/about" },
    {
        title: "Tours",
        href: "/tours",
        dropdown: [
            {
                title: "Domestic Tours",
                href: "/tours/domestic-tours",
                dropdown: [
                    { title: "North India", href: "/tours/domestic-tours/north-india" },
                    { title: "South India", href: "/tours/domestic-tours/south-india" },
                    { title: "East & Northeast", href: "/tours/domestic-tours/east-and-northeast" },
                    { title: "West India", href: "/tours/domestic-tours/west-india" },
                    { title: "Weekend Getaways", href: "/tours/domestic-tours/weekend-getaways" }
                ]
            },
            {
                title: "International Tours",
                href: "/tours/international-tours",
                dropdown: [
                    { title: "Asia Tours", href: "/tours/international-tours/asia-tours" },
                    { title: "Europe Tours", href: "/tours/international-tours/europe-tours" },
                    { title: "Middle East Tours", href: "/tours/international-tours/middle-east-tours" },
                    { title: "Africa Tours", href: "/tours/international-tours/africa-tours" },
                    { title: "Australia & New Zealand Tours", href: "/tours/international-tours/australia-and-new-zealand-tours" },
                    { title: "America Tours", href: "/tours/international-tours/america-tours" },
                    { title: "Canada Tours", href: "/tours/international-tours/canada-tours" },
                    { title: "Cruise Holidays", href: "/tours/international-tours/cruise-holidays" },
                    { title: "Customized Tours", href: "/tours/international-tours/customized-tours" }
                ]
            },
            {
                title: "Pilgrimage Tours",
                href: "/tours/pilgrimage-tours",
                dropdown: [
                    { title: "Holyland Tours", href: "/tours/pilgrimage-tours/holyland-tours" },
                    { title: "Europe Pilgrimage Tours", href: "/tours/pilgrimage-tours/europe-pilgrimage-tours" }
                ]
            },
            {
                title: "Inbound Tours",
                href: "/tours/inbound-tours",
                dropdown: [
                    { title: "Tours for NRIs", href: "/tours/inbound-tours/tours-for-nris" },
                    { title: "Tours for Foreigners", href: "/tours/inbound-tours/tours-for-foreigners" },
                    { title: "Cultural Experiences", href: "/tours/inbound-tours/cultural-experiences" },
                    { title: "Medical Tourism Packages", href: "/tours/inbound-tours/medical-tourism-packages" }
                ]
            }
        ],
    },
    {
        title: "Services",
        href: "/services",
        dropdown: [
            {
                title: "Travel Essentials",
                href: "/services/travel-essentials",
                dropdown: [
                    { title: "Flight Tickets", href: "/services/travel-essentials/flight-tickets" },
                    { title: "Hotel Bookings", href: "/services/travel-essentials/hotel-bookings" },
                    { title: "Eurorail Tickets", href: "/services/travel-essentials/eurorail-tickets" },
                    { title: "Cruise Packages", href: "/services/travel-essentials/cruise-packages" }
                ]
            },
            {
                title: "Travel Documentation",
                href: "/services/travel-documentation",
                dropdown: [
                    { title: "Passport Services", href: "/services/travel-documentation/passport-services" },
                    { title: "Visa Services (All Countries)", href: "/services/travel-documentation/visa-services-all-countries" },
                    { title: "Travel Insurance", href: "/services/travel-documentation/travel-insurance" }
                ]
            },
            {
                title: "Special Services",
                href: "/services/special-services",
                dropdown: [
                    { title: "MICE (Meetings, Incentives, Conferences & Exhibitions)", href: "/services/special-services/mice-meetings-incentives-conferences-exhibitions" },
                    { title: "Event Management", href: "/services/special-services/event-management" },
                    { title: "Corporate Travel Solutions", href: "/services/special-services/corporate-travel-solutions" },
                    { title: "Luxury Travel", href: "/services/special-services/luxury-travel" }
                ]
            }
        ]
    },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
];


export const POPULAR_DESTINATIONS = [
    {
        name: "Almaty",
        images: ["Almaty (1).webp"],
    },
    {
        name: "Andhaman",
        images: ["Andhaman (1).jpg"],
    },
    {
        name: "Australia",
        images: ["Australia (1).jpg"],
    },
    {
        name: "Azerbaijan",
        images: ["Azerbaijan (1).jpg"],
    },
    {
        name: "Bali",
        images: ["Bali (1).jpg"],
    },
    {
        name: "Dubai",
        images: ["Dubai (1).jpg"],
    },
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Top 10 Essential Travel Tips for First-Time Travelers",
        author: "touriza",
        tags: ["Ocean", "Railway"],
        image: "/blog/blog-1.jpg",
        highlightTitle: false
    },
    {
        id: 2,
        title: "International Travel Checklist What You Must Not Forget",
        author: "touriza",
        tags: ["Mountain", "Travel"],
        image: "/blog/blog-2.jpg",
        highlightTitle: false
    },
    {
        id: 3,
        title: "Budget Travel Tips How to Explore More by Spending Less",
        author: "touriza",
        tags: ["Ocean", "River"],
        image: "/blog/blog-3.jpg",
        highlightTitle: true
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: "Mr. Samuel Surrender",
        location: "Chennai – Flight Ticketing",
        text: "World Wings handled my international flight bookings with exceptional care. Their team provided timely updates and ensured I had the best options available. I felt valued and supported throughout my journey."
    },
    {
        id: 2,
        name: "Mr. Damodharan",
        location: "Chennai – Tour Package",
        text: "I chose their Europe tour package, and it exceeded my expectations. The itinerary was thoughtfully curated, accommodations were top-notch, and every detail was handled with professionalism and warmth."
    },
    {
        id: 3,
        name: "Mr. Manoharan",
        location: "Chennai – Visa Processing",
        text: "Visa formalities can be daunting, but World Wings made the entire process seamless. Their guidance, attention to detail, and quick documentation helped me obtain my visa stress-free."
    },
    {
        id: 4,
        name: "Mr. Micheal",
        location: "Chennai – Flight Ticketing",
        text: "I was impressed with their swift response and personalized service while booking my business-class flights. Their team understands the nuances of premium travel and delivers exactly what is needed."
    },
    {
        id: 5,
        name: "Mrs. Mercy Ravindaran",
        location: "Chennai – Tour Package",
        text: "Traveling with World Wings was an experience filled with comfort and elegance. From airport transfers to hotel stays, everything was perfectly arranged, making it a truly memorable holiday."
    },
    {
        id: 6,
        name: "Mrs. Celina Jani",
        location: "Coimbatore – Visa Processing",
        text: "Thanks to the expert team at World Wings, my visa paperwork for a European trip was processed quickly and without hassle. Their professionalism and support made all the difference."
    },
    {
        id: 7,
        name: "Mr. Ranjith",
        location: "Australia – Tour Package",
        text: "Exploring Australia through World Wings was an absolute delight. The curated experiences, expert guides, and seamless arrangements made it a luxurious and enriching journey I’ll always cherish."
    },
    {
        id: 8,
        name: "Dr. Ramesh",
        location: "Kariakudi – Tour Package (Japan Tour)",
        text: "The Japan tour package was organized impeccably. World Wings ensured I had cultural insights, smooth travel arrangements, and excellent hospitality at every stage of the trip."
    },
    {
        id: 9,
        name: "Dr. Veeramani",
        location: "Karaikal – Tour Package",
        text: "From start to finish, my experience with World Wings was flawless. Every hotel, tour spot, and transfer was well-planned, allowing me to fully enjoy the sights without any worries."
    },
    {
        id: 10,
        name: "Mrs. Sridevi",
        location: "Chennai – Visa Processing (Canada Visa)",
        text: "Applying for a Canada visa felt effortless thanks to the World Wings team. They handled everything with precision and care, guiding me through the complex process and ensuring all requirements were met."
    }
];