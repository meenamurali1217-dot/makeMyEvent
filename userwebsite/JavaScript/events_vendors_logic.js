
const eventCategories=[
  {id:"wedding",    name:"Weddings",         icon:"fa-rings-wedding",     short:"Wedding"},
  {id:"corporate",  name:"Corporate Events", icon:"fa-briefcase",         short:"Corporate"},
  {id:"birthday",   name:"Birthdays",        icon:"fa-cake-candles",      short:"Birthday"},
  {id:"anniversary",name:"Anniversaries",   icon:"fa-heart",             short:"Anniversary"},
  {id:"babyshower", name:"Baby Showers",     icon:"fa-baby",              short:"Baby Shower"},
  {id:"party",      name:"Parties",          icon:"fa-champagne-glasses", short:"Party"},
  {id:"movie",      name:"Movie Screenings", icon:"fa-film",              short:"Movie"},
  {id:"cultural",   name:"Cultural Events",  icon:"fa-masks-theater",     short:"Cultural"},
  {id:"engagement", name:"Engagements",      icon:"fa-gem",               short:"Engagement"},
  {id:"religious",  name:"Religious Events", icon:"fa-place-of-worship",  short:"Religious"},
  {id:"sports",     name:"Sports Events",    icon:"fa-trophy",            short:"Sports"},
  {id:"concert",    name:"Concerts & Shows", icon:"fa-music",             short:"Concert"},
];
const vendors=[
  /* WEDDING */
  {id:"v1",name:"Shaadi Mahal Events",eventType:"wedding",badge:"Luxury Wedding Planners",location:"Banjara Hills, Hyderabad",img:"https://placehold.co/600x400/8b1a2b/ffffff?text=Shaadi+Mahal+Events",description:"Grand South Indian and pan-Indian wedding planners with opulent mandap setups and full bridal management.",rating:"4.9",reviews:412,priceFrom:"\u20b92.5 L",packages:[
    {img:"https://placehold.co/200x200/c9a85c/ffffff?text=Rathi",tierClass:"tier-classic",tier:"Rathi",title:"Rathi Ceremony Package",subtitle:"Traditional pre-wedding rituals",score:"4.7",reviewCount:"210 reviews",quote:"The Rathi ceremony was beautifully organised. Every ritual was followed perfectly!",author:"\u2014 Priya Reddy, Hyderabad",services:[
      {label:"Rathi ceremony venue decoration with marigold and jasmine",icon:"fa-leaf",price:18000},
      {label:"Traditional brass lamps and banana leaves setup",icon:"fa-fire",price:8000},
      {label:"Nadaswaram and Melam orchestra (3 hours)",icon:"fa-music",price:15000},
      {label:"Catering \u2014 traditional Andhra meals (100 guests)",icon:"fa-utensils",price:45000},
      {label:"Bridal mehndi artist",icon:"fa-hand",price:6000},
      {label:"Photography and videography (6 hours)",icon:"fa-camera",price:25000},
    ]},
    {img:"https://placehold.co/200x200/b8860b/ffffff?text=Grand+Wedding",tierClass:"tier-gold",tier:"Gold",title:"Pellikoduku Grand Wedding",subtitle:"Full Telugu wedding \u2014 all rituals",score:"4.9",reviewCount:"178 reviews",quote:"The mandap was like a palace. Every guest was speechless \u2014 truly a dream wedding!",author:"\u2014 Ananya and Ravi Kumar, Vijayawada",services:[
      {label:"Grand mandap with silk drapes and fresh flower garlands",icon:"fa-archway",price:85000},
      {label:"Full Telugu wedding rituals coordinator and purohit",icon:"fa-user-tie",price:18000},
      {label:"Catering \u2014 grand Andhra meals (300 guests) with live counters",icon:"fa-utensils",price:180000},
      {label:"Cinematic photography and videography team (full day)",icon:"fa-video",price:75000},
      {label:"Bridal hair makeup and saree draping",icon:"fa-spa",price:20000},
      {label:"Baraat procession with decorated horse and band",icon:"fa-drum",price:35000},
    ]},
  ]},
  {id:"v2",name:"Vivah Rangoli Planners",eventType:"wedding",badge:"North Indian Wedding Expert",location:"Rajouri Garden, New Delhi",img:"https://placehold.co/600x400/5a1a00/f5c890?text=Vivah+Rangoli",description:"Specialist North Indian wedding planners covering Punjabi, UP and Rajasthani wedding traditions with grand baraat setups.",rating:"4.8",reviews:356,priceFrom:"\u20b93 L",packages:[
    {img:"https://placehold.co/200x200/d4780a/ffffff?text=Sangeet",tierClass:"tier-classic",tier:"Sangeet",title:"Sangeet and Mehendi Utsav",subtitle:"Vibrant pre-wedding celebrations",score:"4.8",reviewCount:"240 reviews",quote:"The Sangeet night was unforgettable \u2014 DJ, mehendi artists, and the decor were all top-notch!",author:"\u2014 Kavya and Arjun Sharma, Delhi",services:[
      {label:"Sangeet stage setup with LED backdrop and fairy lights",icon:"fa-lightbulb",price:55000},
      {label:"Mehendi ceremony tent with flower rangoli decor",icon:"fa-hand",price:30000},
      {label:"DJ and sound system (6 hours)",icon:"fa-music",price:40000},
      {label:"Catering \u2014 chaat counters and dinner buffet (200 guests)",icon:"fa-utensils",price:120000},
      {label:"Professional mehendi artist team (3 artists)",icon:"fa-pen-nib",price:15000},
    ]},
  ]},
  /* CORPORATE */
  {id:"v7",name:"Prestige Corporate Events",eventType:"corporate",badge:"Corporate Event Specialist",location:"Cyber City, Gurugram",img:"https://placehold.co/600x400/1a1f36/50c0cc?text=Prestige+Corporate",description:"End-to-end corporate event management \u2014 product launches, annual galas, team outings and conferences across India.",rating:"4.7",reviews:198,priceFrom:"\u20b91.5 L",packages:[
    {img:"https://placehold.co/200x200/103010/80e080?text=Product+Launch",tierClass:"tier-classic",tier:"Standard",title:"Product Launch Event",subtitle:"Professional brand launch setup",score:"4.6",reviewCount:"118 reviews",quote:"Flawless execution for our product launch \u2014 our MD was thoroughly impressed!",author:"\u2014 Rajan Mehta, VP at TechNova India",services:[
      {label:"Venue sourcing and full branding setup",icon:"fa-location-dot",price:60000},
      {label:"AV equipment \u2014 LED screen, projectors, wireless mics",icon:"fa-display",price:80000},
      {label:"Corporate branding backdrops and standees",icon:"fa-flag",price:25000},
      {label:"Catering \u2014 hi-tea and lunch for 100 guests",icon:"fa-mug-saucer",price:95000},
      {label:"On-site event manager and support team",icon:"fa-user-tie",price:30000},
    ]},
    {img:"https://placehold.co/200x200/205020/c0f0c0?text=Gala+Night",tierClass:"tier-premium",tier:"Premium",title:"Annual Gala and Awards Night",subtitle:"Grand recognition event (up to 300 guests)",score:"4.8",reviewCount:"80 reviews",quote:"The gala setup was world-class \u2014 our employees were proud and the awards segment was emotional.",author:"\u2014 Sunita Arora, HR Director at IndiaTech Corp",services:[
      {label:"5-star banquet hall coordination and full decor",icon:"fa-building-columns",price:120000},
      {label:"Custom awards trophy design and felicitation setup",icon:"fa-trophy",price:55000},
      {label:"3-course dinner catering (300 guests) with mocktail bar",icon:"fa-utensils",price:420000},
      {label:"Live entertainment \u2014 Bollywood act or stand-up comedian",icon:"fa-music",price:120000},
      {label:"Event photography and videography",icon:"fa-camera",price:60000},
    ]},
  ]},
  /* BIRTHDAY */
  {id:"v5",name:"Jashan Party Studio",eventType:"birthday",badge:"Birthday Celebrations Expert",location:"Koramangala, Bengaluru",img:"https://placehold.co/600x400/0a1a3a/50a0f5?text=Jashan+Party+Studio",description:"High-energy birthday planners for kids and adults with Bollywood, Rajasthani and superhero themes across Bengaluru.",rating:"4.8",reviews:521,priceFrom:"\u20b925,000",packages:[
    {img:"https://placehold.co/200x200/1050a0/80c0ff?text=Kids+Theme",tierClass:"tier-classic",tier:"Fun",title:"Kids Theme Birthday Bash",subtitle:"Superhero or cartoon theme (up to 50 kids)",score:"4.7",reviewCount:"350 reviews",quote:"My son's party was amazing \u2014 the kids went crazy! Best birthday ever.",author:"\u2014 Preethi Suresh, Bengaluru",services:[
      {label:"Theme decoration \u2014 balloon arch and backdrop",icon:"fa-star",price:8000},
      {label:"Themed tableware, centrepieces and return gift bags",icon:"fa-gift",price:6000},
      {label:"Entertainer \u2014 magician or clown (2 hours)",icon:"fa-hat-wizard",price:8000},
      {label:"Custom 2-tier fondant birthday cake",icon:"fa-cake-candles",price:4500},
      {label:"Catering \u2014 pizza, pasta, chaat and cold drinks (50 guests)",icon:"fa-utensils",price:18000},
    ]},
    {img:"https://placehold.co/200x200/003080/c0e0ff?text=Bollywood+Night",tierClass:"tier-premium",tier:"Premium",title:"Bollywood Night Birthday",subtitle:"Themed adult party (up to 150 guests)",score:"4.9",reviewCount:"171 reviews",quote:"The Bollywood theme was a hit \u2014 everyone came dressed up and the DJ was fantastic!",author:"\u2014 Rohit Malhotra, Bengaluru",services:[
      {label:"Bollywood film set themed venue transformation",icon:"fa-wand-magic-sparkles",price:35000},
      {label:"Professional DJ with Bollywood hits (5 hours)",icon:"fa-music",price:22000},
      {label:"Catering \u2014 chaat station, live dosa counter and buffet (150 guests)",icon:"fa-utensils",price:90000},
      {label:"Custom multi-tier birthday cake and mithai table",icon:"fa-cake-candles",price:12000},
      {label:"Photography and birthday reel (3 hours)",icon:"fa-camera",price:15000},
    ]},
  ]},
  /* ANNIVERSARY */
  {id:"va1",name:"Eternal Moments Co.",eventType:"anniversary",badge:"Romance and Anniversary Specialists",location:"Marine Drive, Mumbai",img:"https://placehold.co/600x400/5a0a3a/ffc0e0?text=Eternal+Moments",description:"Curating intimate and grand anniversary celebrations with bespoke decor, romantic dining experiences and surprise elements.",rating:"4.9",reviews:287,priceFrom:"\u20b940,000",packages:[
    {img:"https://placehold.co/200x200/a03060/ffe0f0?text=Silver+Dinner",tierClass:"tier-silver",tier:"Silver",title:"Silver Anniversary Dinner",subtitle:"Intimate romantic candlelight celebration",score:"4.9",reviewCount:"180 reviews",quote:"The rooftop setup with roses and candles was absolutely magical \u2014 we renewed our vows!",author:"\u2014 Meera and Suresh Nair, Mumbai",services:[
      {label:"Rooftop or garden romantic setup with floral decor",icon:"fa-heart",price:25000},
      {label:"Candlelight dinner for two \u2014 5-course gourmet meal",icon:"fa-utensils",price:18000},
      {label:"Live acoustic guitarist or violinist (2 hours)",icon:"fa-guitar",price:12000},
      {label:"Personalised anniversary photo album and frame",icon:"fa-image",price:8000},
      {label:"Anniversary cake with custom photo design",icon:"fa-cake-candles",price:4000},
      {label:"Couple photoshoot \u2014 1 hour golden hour session",icon:"fa-camera",price:15000},
    ]},
    {img:"https://placehold.co/200x200/7a0050/ffd0f0?text=Grand+Gala",tierClass:"tier-gold",tier:"Grand",title:"Golden Anniversary Grand Gala",subtitle:"Celebration with family and friends (up to 100 guests)",score:"4.8",reviewCount:"107 reviews",quote:"Our parents were in tears \u2014 50 years of love celebrated so beautifully. Every detail was perfect!",author:"\u2014 The Sharma Family, Delhi",services:[
      {label:"Grand hall decoration with gold and white theme",icon:"fa-archway",price:85000},
      {label:"Slideshow of 50 years \u2014 video production",icon:"fa-film",price:35000},
      {label:"Catering \u2014 3-course dinner with mocktail bar (100 guests)",icon:"fa-utensils",price:180000},
      {label:"Live ghazal or Bollywood band (3 hours)",icon:"fa-music",price:55000},
      {label:"Custom anniversary keepsake book for all guests",icon:"fa-book",price:30000},
    ]},
  ]},
  /* BABY SHOWER */
  {id:"vb1",name:"Little Moments Events",eventType:"babyshower",badge:"Baby Shower Specialists",location:"Indiranagar, Bengaluru",img:"https://placehold.co/600x400/d4f0e0/1a6a4a?text=Little+Moments",description:"Heartwarming and beautifully styled baby shower events with pastel themes, custom props and Godh Bharai rituals.",rating:"4.8",reviews:193,priceFrom:"\u20b920,000",packages:[
    {img:"https://placehold.co/200x200/b0e8c8/1a6a4a?text=Pastel+Dream",tierClass:"tier-teal",tier:"Sweet",title:"Pastel Dream Baby Shower",subtitle:"Intimate celebration for mother-to-be",score:"4.8",reviewCount:"130 reviews",quote:"The pastel balloon wall and nappy cake were adorable \u2014 all the guests loved it!",author:"\u2014 Divya Menon, Bengaluru",services:[
      {label:"Pastel balloon wall and floral arch backdrop",icon:"fa-seedling",price:12000},
      {label:"Customised diaper cake and baby prop display",icon:"fa-baby",price:6000},
      {label:"Catering \u2014 afternoon tea with finger foods and desserts (30 guests)",icon:"fa-mug-saucer",price:18000},
      {label:"Baby shower games kit and prizes",icon:"fa-dice",price:4000},
      {label:"Custom cake \u2014 gender reveal or baby theme",icon:"fa-cake-candles",price:5500},
      {label:"Photography session \u2014 2 hours",icon:"fa-camera",price:8000},
    ]},
    {img:"https://placehold.co/200x200/60b8a0/ffffff?text=Godh+Bharai",tierClass:"tier-premium",tier:"Premium",title:"Godh Bharai Ceremony",subtitle:"Traditional Indian baby shower ritual",score:"4.9",reviewCount:"63 reviews",quote:"Such a loving and authentic Godh Bharai \u2014 the rituals were conducted so beautifully!",author:"\u2014 Sunita Iyer, Chennai",services:[
      {label:"Godh Bharai ritual setup with banana leaves and flowers",icon:"fa-leaf",price:20000},
      {label:"Puja arrangement and purohit coordination",icon:"fa-fire",price:10000},
      {label:"Traditional saree gifting ceremony props",icon:"fa-gift",price:8000},
      {label:"Catering \u2014 traditional spread for 50 guests",icon:"fa-utensils",price:40000},
      {label:"Floral jewellery and decoration for mother-to-be",icon:"fa-star",price:7000},
      {label:"Photography and videography (full event)",icon:"fa-camera",price:15000},
    ]},
  ]},
  /* PARTY */
  {id:"vp1",name:"Neon Nights Mumbai",eventType:"party",badge:"Premium Party Planners",location:"Lower Parel, Mumbai",img:"https://placehold.co/600x400/1a0a2e/c050ff?text=Neon+Nights+Mumbai",description:"High-energy party planners for adults with neon themes, open bars, celebrity DJs and rooftop setups across Mumbai.",rating:"4.7",reviews:312,priceFrom:"\u20b960,000",packages:[
    {img:"https://placehold.co/200x200/4a0090/e0a0ff?text=Neon+Party",tierClass:"tier-premium",tier:"Neon",title:"Neon Glow Party Night",subtitle:"UV and neon themed adult party",score:"4.7",reviewCount:"210 reviews",quote:"The neon lights, UV paint and DJ set the perfect vibe \u2014 unforgettable night!",author:"\u2014 Rohan Shah, Mumbai",services:[
      {label:"Full venue neon and UV light transformation",icon:"fa-lightbulb",price:45000},
      {label:"Professional DJ with 5-hour set",icon:"fa-music",price:40000},
      {label:"Bar setup \u2014 mocktails and cocktails open bar (50 guests)",icon:"fa-champagne-glasses",price:50000},
      {label:"Catering \u2014 party finger foods and live counters",icon:"fa-utensils",price:60000},
      {label:"Photo booth with neon props",icon:"fa-camera",price:12000},
    ]},
  ]},
  {id:"vp2",name:"Rang de Party Planners",eventType:"party",badge:"Holi and Theme Party Experts",location:"Connaught Place, Delhi",img:"https://placehold.co/600x400/2a0a10/ff7070?text=Rang+de+Parties",description:"Colourful and themed party specialists \u2014 Holi bashes, masquerade balls, retro nights and Bollywood-themed events.",rating:"4.6",reviews:198,priceFrom:"\u20b935,000",packages:[
    {img:"https://placehold.co/200x200/802020/ffc080?text=Holi+Bash",tierClass:"tier-teal",tier:"Festive",title:"Rang Barse Holi Bash",subtitle:"High-energy Holi party for groups",score:"4.6",reviewCount:"140 reviews",quote:"The dhol, colours and bhang laddoos made it the best Holi we have celebrated!",author:"\u2014 Ravi and Friends, Delhi",services:[
      {label:"Open ground setup with tents and waterproofing",icon:"fa-tent",price:30000},
      {label:"Organic herbal colour kit (100 guests)",icon:"fa-palette",price:18000},
      {label:"Live dhol player and folk DJ",icon:"fa-drum",price:22000},
      {label:"Catering \u2014 thandai, gujiya and Holi snacks",icon:"fa-utensils",price:45000},
      {label:"Water gun setup and refill station",icon:"fa-droplet",price:10000},
    ]},
  ]},
  /* MOVIE SCREENING */
  {id:"vm1",name:"StarScreen Events",eventType:"movie",badge:"Private Movie Screening Experts",location:"Jubilee Hills, Hyderabad",img:"https://placehold.co/600x400/1a1000/ffd040?text=StarScreen+Events",description:"Curating private outdoor and indoor movie screenings for all occasions \u2014 birthdays, date nights, family gatherings and corporate entertainment.",rating:"4.8",reviews:156,priceFrom:"\u20b918,000",packages:[
    {img:"https://placehold.co/200x200/5a4000/ffd080?text=Outdoor+Night",tierClass:"tier-classic",tier:"Classic",title:"Outdoor Movie Night",subtitle:"Rooftop or garden cinema experience",score:"4.8",reviewCount:"100 reviews",quote:"The rooftop screening under the stars was magical \u2014 our friends still talk about it!",author:"\u2014 Ananya Reddy, Hyderabad",services:[
      {label:"Outdoor LED screen or inflatable screen setup (12 ft)",icon:"fa-tv",price:12000},
      {label:"Projector with Dolby audio system",icon:"fa-film",price:8000},
      {label:"Bean bag and cushion seating for 25 guests",icon:"fa-couch",price:7000},
      {label:"Popcorn station and snack counter",icon:"fa-utensils",price:6000},
      {label:"Fairy lights and ambiance lighting",icon:"fa-lightbulb",price:4000},
    ]},
    {img:"https://placehold.co/200x200/3a2800/ffc050?text=Luxury+Cinema",tierClass:"tier-gold",tier:"Luxury",title:"Luxury Private Cinema",subtitle:"Premium indoor screening experience",score:"4.9",reviewCount:"56 reviews",quote:"Felt like our own private multiplex \u2014 the sound, recliners and service were unbeatable!",author:"\u2014 Karan Mehta, Mumbai",services:[
      {label:"Private hall with recliner seating for 30 guests",icon:"fa-couch",price:30000},
      {label:"4K laser projector with Dolby Atmos sound",icon:"fa-film",price:22000},
      {label:"Red carpet entry and themed lobby decor",icon:"fa-star",price:15000},
      {label:"Full meal catering with in-seat service",icon:"fa-utensils",price:35000},
      {label:"Custom movie poster with guests names",icon:"fa-image",price:5000},
    ]},
  ]},
  /* CULTURAL */
  {id:"vc1",name:"Rang Mahotsav Events",eventType:"cultural",badge:"Cultural Festival Experts",location:"Varanasi, Uttar Pradesh",img:"https://placehold.co/600x400/5a1a00/ff9040?text=Rang+Mahotsav",description:"Authentic Indian cultural event specialists \u2014 classical music nights, folk dance festivals, temple celebrations and cultural galas.",rating:"4.9",reviews:221,priceFrom:"\u20b950,000",packages:[
    {img:"https://placehold.co/200x200/c05010/ffe0c0?text=Classical+Night",tierClass:"tier-classic",tier:"Classic",title:"Shastreeya Sangeet Evening",subtitle:"Classical music and dance performance",score:"4.9",reviewCount:"155 reviews",quote:"The tabla and sitar performance under the stars in Varanasi was a transcendental experience!",author:"\u2014 Dr. Ravi Shankar Pillai, Chennai",services:[
      {label:"Open-air or heritage venue booking",icon:"fa-building-columns",price:40000},
      {label:"Classical music ensemble \u2014 sitar, tabla, sarangi",icon:"fa-music",price:60000},
      {label:"Bharatanatyam or Odissi dance performance",icon:"fa-masks-theater",price:45000},
      {label:"Traditional lighting and stage decoration",icon:"fa-lightbulb",price:20000},
      {label:"Catering \u2014 traditional thali dinner (100 guests)",icon:"fa-utensils",price:80000},
    ]},
    {img:"https://placehold.co/200x200/8b3010/ffc090?text=Folk+Festival",tierClass:"tier-premium",tier:"Mahotsav",title:"Folk Mahotsav",subtitle:"Full-day folk dance and music festival",score:"4.8",reviewCount:"66 reviews",quote:"Rajasthani folk music and fire dancers \u2014 our guests were completely mesmerised!",author:"\u2014 Priya Cultural Society, Jaipur",services:[
      {label:"Multi-stage folk performance setup",icon:"fa-tent",price:80000},
      {label:"Rajasthani folk artists \u2014 Kalbeliya dancers and Manganiyar musicians",icon:"fa-masks-theater",price:90000},
      {label:"Fire dancer and acrobat troupe performance",icon:"fa-fire",price:40000},
      {label:"Artisan craft market setup (10 stalls)",icon:"fa-store",price:30000},
      {label:"Traditional food court \u2014 8 regional cuisines",icon:"fa-utensils",price:120000},
    ]},
  ]},
  /* ENGAGEMENT */
  {id:"v9",name:"Bandhan Proposal Co.",eventType:"engagement",badge:"Engagement Specialists",location:"Jubilee Hills, Hyderabad",img:"https://placehold.co/600x400/2e0a1a/f5a0c8?text=Bandhan+Proposal",description:"Romantic proposal and engagement party planners creating personalised moments for couples across India.",rating:"4.9",reviews:234,priceFrom:"\u20b935,000",packages:[
    {img:"https://placehold.co/200x200/a03060/ffe0f0?text=Proposal",tierClass:"tier-classic",tier:"Classic",title:"Surprise Proposal Moment",subtitle:"Intimate and romantic",score:"4.9",reviewCount:"180 reviews",quote:"She said haan and was in tears \u2014 the rose petals and candle setup was straight out of a film!",author:"\u2014 Karthik Reddy, Hyderabad",services:[
      {label:"Private terrace or garden proposal setup",icon:"fa-location-dot",price:15000},
      {label:"Rose petal trail and floating candle arrangement",icon:"fa-heart",price:10000},
      {label:"Hidden candid photographer",icon:"fa-camera",price:18000},
      {label:"Custom LED letter board message",icon:"fa-lightbulb",price:6000},
      {label:"Post-proposal portrait session (1 hour)",icon:"fa-image",price:12000},
    ]},
  ]},
  /* RELIGIOUS */
  {id:"vr1",name:"Shubh Puja Services",eventType:"religious",badge:"Religious Event Specialists",location:"Pune, Maharashtra",img:"https://placehold.co/600x400/5a3000/ffd0a0?text=Shubh+Puja",description:"Specialised in griha pravesh, satyanarayan katha, navratri jagrata and all types of religious ceremony management.",rating:"4.9",reviews:445,priceFrom:"\u20b915,000",packages:[
    {img:"https://placehold.co/200x200/c07830/fff0d0?text=Griha+Pravesh",tierClass:"tier-classic",tier:"Puja",title:"Griha Pravesh Ceremony",subtitle:"Housewarming with all rituals",score:"4.9",reviewCount:"280 reviews",quote:"Every ritual was conducted beautifully \u2014 our home felt truly blessed after the ceremony!",author:"\u2014 Anjali and Raj Joshi, Pune",services:[
      {label:"Full puja samagri and decoration arrangement",icon:"fa-fire",price:15000},
      {label:"Purohit coordination and ritual guidance",icon:"fa-user-tie",price:10000},
      {label:"Flower rangoli and marigold toran setup",icon:"fa-seedling",price:8000},
      {label:"Catering \u2014 prasad and traditional feast (50 guests)",icon:"fa-utensils",price:30000},
      {label:"Photography of key rituals",icon:"fa-camera",price:8000},
    ]},
  ]},
  /* SPORTS */
  {id:"vs1",name:"Champions Sports Events",eventType:"sports",badge:"Sports Event Management",location:"DLF Cyber Hub, Gurugram",img:"https://placehold.co/600x400/0a3010/60d060?text=Champions+Sports",description:"End-to-end management for sports tournaments, cricket leagues, marathons, cycling events and corporate sports days.",rating:"4.6",reviews:134,priceFrom:"\u20b975,000",packages:[
    {img:"https://placehold.co/200x200/104020/80f080?text=Cricket+League",tierClass:"tier-classic",tier:"League",title:"Corporate Cricket League",subtitle:"Full-day T20 tournament for corporates",score:"4.6",reviewCount:"90 reviews",quote:"The tournament was incredibly well organised \u2014 from umpires to trophies, everything was perfect!",author:"\u2014 Kiran Shah, HR Lead at FinEdge",services:[
      {label:"Ground booking and pitch preparation",icon:"fa-location-dot",price:35000},
      {label:"Umpires, scoreboard and match officials",icon:"fa-user-tie",price:20000},
      {label:"Custom team jerseys (8 teams, 11 players each)",icon:"fa-shirt",price:40000},
      {label:"Commentary setup and PA system",icon:"fa-microphone",price:15000},
      {label:"Trophies, medals and certificate printing",icon:"fa-trophy",price:20000},
      {label:"Catering \u2014 lunch and refreshments for 100",icon:"fa-utensils",price:45000},
    ]},
  ]},
  /* CONCERT */
  {id:"vco1",name:"Dhvani Live Events",eventType:"concert",badge:"Concert and Live Show Producers",location:"HITEC City, Hyderabad",img:"https://placehold.co/600x400/0a001a/8040ff?text=Dhvani+Live+Events",description:"Full-scale concert production, artist management and live show execution for Bollywood acts, stand-up comedy nights and indie music events.",rating:"4.7",reviews:178,priceFrom:"\u20b92 L",packages:[
    {img:"https://placehold.co/200x200/200060/d0a0ff?text=Live+Concert",tierClass:"tier-premium",tier:"Live",title:"Bollywood Live Concert Package",subtitle:"Full production for 500+ audience",score:"4.7",reviewCount:"120 reviews",quote:"The stage, lighting and sound were concert-grade. Our guests were blown away!",author:"\u2014 Event Head, TechCorp Annual Day",services:[
      {label:"Main stage with LED jumbotron and truss rigging",icon:"fa-tv",price:250000},
      {label:"Line array speaker system",icon:"fa-music",price:180000},
      {label:"Professional lighting rig \u2014 moving heads and laser",icon:"fa-lightbulb",price:120000},
      {label:"Artist management and hospitality rider",icon:"fa-star",price:80000},
      {label:"Crowd management, security and medical team",icon:"fa-shield-halved",price:60000},
      {label:"Live streaming and broadcast setup",icon:"fa-video",price:75000},
    ]},
  ]},

  /* ── WEDDING (3 more) ── */
  {id:"w3",name:"Mangalyam Weddings",eventType:"wedding",badge:"South Indian Specialist",location:"Velachery, Chennai",img:"https://placehold.co/600x400/3a0a0a/f5a050?text=Mangalyam+Weddings",description:"Expert Tamil and Kerala wedding planners specialising in Brahmin, Mudaliar and Nair wedding customs with authentic ritual coordination.",rating:"4.8",reviews:289,priceFrom:"\u20b91.8 L",packages:[
    {img:"https://placehold.co/200x200/c0614a/ffffff?text=Nichayathartham",tierClass:"tier-classic",tier:"Classic",title:"Nichayathartham & Naandi",subtitle:"Engagement and pre-wedding pooja",score:"4.8",reviewCount:"189 reviews",quote:"The Nichayathartham was organised perfectly \u2014 every ritual explained clearly!",author:"\u2014 Kavitha and Arun Krishnan, Chennai",services:[
      {label:"Nichayathartham venue decor with mango leaves and flowers",icon:"fa-leaf",price:22000},
      {label:"Naandi and Ganapathi pooja arrangements",icon:"fa-fire",price:8000},
      {label:"Nadaswaram and tavil ensemble (2 hours)",icon:"fa-music",price:12000},
      {label:"Traditional South Indian sadya catering (150 guests)",icon:"fa-utensils",price:65000},
      {label:"Professional photography (event highlights)",icon:"fa-camera",price:18000},
      {label:"Return gifts and vethalai pakku arrangements",icon:"fa-gift",price:10000},
    ]},
    {img:"https://placehold.co/200x200/8b4513/ffd700?text=Kashi+Yatra",tierClass:"tier-gold",tier:"Grand",title:"Kashi Yatra Grand Wedding",subtitle:"Full Tamil Brahmin wedding",score:"4.9",reviewCount:"95 reviews",quote:"Every ritual from Kashi Yatra to Saptapadi was conducted with such elegance!",author:"\u2014 Meena and Suresh Iyer, Coimbatore",services:[
      {label:"Wedding hall decor with banana trees and kolam",icon:"fa-archway",price:75000},
      {label:"Kashi Yatra props and ceremony coordination",icon:"fa-user-tie",price:15000},
      {label:"Catering \u2014 Tamil sadya on banana leaf (250 guests)",icon:"fa-utensils",price:150000},
      {label:"Nadaswaram and Melam full day",icon:"fa-music",price:25000},
      {label:"Cinematic videography and photography",icon:"fa-video",price:60000},
      {label:"Bridal silk saree draping and makeup",icon:"fa-spa",price:18000},
    ]},
  ]},
  {id:"w4",name:"Shagun Events Mumbai",eventType:"wedding",badge:"Maharashtrian Wedding Expert",location:"Andheri West, Mumbai",img:"https://placehold.co/600x400/1a1030/c8a8f8?text=Shagun+Events+Mumbai",description:"Premium wedding planners specialising in Maharashtrian and Gujarati weddings with traditional nauvari setups and Antarpat ceremonies.",rating:"4.7",reviews:198,priceFrom:"\u20b92 L",packages:[
    {img:"https://placehold.co/200x200/3a1060/e0c8ff?text=Haldi+Kelvan",tierClass:"tier-classic",tier:"Haldi",title:"Haldi and Kelvan Ceremony",subtitle:"Traditional pre-wedding rituals",score:"4.9",reviewCount:"130 reviews",quote:"The haldi setup with marigold decor was absolutely stunning and so authentic!",author:"\u2014 Rujuta and Sameer Joshi, Pune",services:[
      {label:"Haldi ceremony open-air setup with marigold decor",icon:"fa-seedling",price:28000},
      {label:"Kelvan dinner venue decoration",icon:"fa-leaf",price:20000},
      {label:"Traditional dhol player (3 hours)",icon:"fa-drum",price:8000},
      {label:"Catering \u2014 Maharashtrian puran poli and dinner thali (150 guests)",icon:"fa-utensils",price:85000},
      {label:"Haldi photography and reel creation",icon:"fa-camera",price:15000},
    ]},
    {img:"https://placehold.co/200x200/5a2090/f0e0ff?text=Antarpat",tierClass:"tier-premium",tier:"Grand",title:"Antarpat Grand Wedding",subtitle:"Full Maharashtrian wedding day",score:"4.8",reviewCount:"68 reviews",quote:"The Antarpat moment with the shehnai playing was so emotional and perfectly captured.",author:"\u2014 Priya and Rahul Deshmukh, Mumbai",services:[
      {label:"Mandap with traditional panchrangi and flower garlands",icon:"fa-archway",price:65000},
      {label:"Antarpat ceremony coordination with purohit",icon:"fa-user-tie",price:15000},
      {label:"Shehnai player and Mangalashtak singers",icon:"fa-music",price:22000},
      {label:"Catering \u2014 Maharashtrian menu with puran poli and modak (300 guests)",icon:"fa-utensils",price:180000},
      {label:"Photography and cinematic wedding film",icon:"fa-video",price:65000},
      {label:"Bridal nauvari saree draping and makeup",icon:"fa-spa",price:22000},
    ]},
  ]},
  {id:"w5",name:"Royal Bengal Weddings",eventType:"wedding",badge:"Bengali Wedding Specialist",location:"Salt Lake, Kolkata",img:"https://placehold.co/600x400/0a2a0a/a0f090?text=Royal+Bengal+Weddings",description:"Specialists in authentic Bengali Biye traditions \u2014 Aiburo Bhaat, Gaye Holud, Sindoor Khela and grand Bou Bhat ceremonies.",rating:"4.8",reviews:167,priceFrom:"\u20b91.5 L",packages:[
    {img:"https://placehold.co/200x200/306030/c0f0a0?text=Gaye+Holud",tierClass:"tier-classic",tier:"Holud",title:"Gaye Holud Utsav",subtitle:"Traditional Bengali pre-wedding ritual",score:"4.8",reviewCount:"110 reviews",quote:"The Gaye Holud was pure joy \u2014 the dhak, shankha and ululation made it magical!",author:"\u2014 Arpita and Sourav Sen, Kolkata",services:[
      {label:"Gaye Holud ceremony decor with earthen pots and marigold",icon:"fa-seedling",price:20000},
      {label:"Dhak player and shankha blowing ceremony",icon:"fa-drum",price:10000},
      {label:"Traditional Bengali snacks and mishti table (100 guests)",icon:"fa-utensils",price:55000},
      {label:"Holud photography and candid coverage",icon:"fa-camera",price:18000},
      {label:"Bride and groom traditional attire styling assistance",icon:"fa-star",price:12000},
    ]},
    {img:"https://placehold.co/200x200/0a4a0a/80e060?text=Biye+Grand",tierClass:"tier-gold",tier:"Biye",title:"Shubho Biye Grand Package",subtitle:"Full Bengali wedding ceremony",score:"4.9",reviewCount:"57 reviews",quote:"Saat Paak, Sindoor Khela \u2014 every ritual was perfect. The flower tray decor was breathtaking!",author:"\u2014 Sreya and Debanjan Roy, Kolkata",services:[
      {label:"Wedding venue decor \u2014 alpona, flowers and clay lamps",icon:"fa-archway",price:70000},
      {label:"Saat Paak and Sindoor Khela ritual coordination",icon:"fa-user-tie",price:15000},
      {label:"Catering \u2014 Bengali wedding menu with mishti and fish (200 guests)",icon:"fa-utensils",price:140000},
      {label:"Dhak player full day and wedding musicians",icon:"fa-music",price:18000},
      {label:"Cinematic wedding film and photo album",icon:"fa-video",price:55000},
      {label:"Bridal Benarasi saree draping and makeup",icon:"fa-spa",price:20000},
    ]},
  ]},
  {id:"w6",name:"Desert Rose Weddings",eventType:"wedding",badge:"Rajasthani Palace Wedding Experts",location:"MI Road, Jaipur",img:"https://placehold.co/600x400/7a3000/ffd0a0?text=Desert+Rose+Weddings",description:"Luxury destination wedding planners specialising in fort and palace weddings across Rajasthan with royal Rajput traditions.",rating:"4.9",reviews:341,priceFrom:"\u20b95 L",packages:[
    {img:"https://placehold.co/200x200/c06010/ffe0c0?text=Mehendi+Raat",tierClass:"tier-classic",tier:"Mehendi",title:"Mehendi Raat & Sangeet",subtitle:"Rajasthani folk pre-wedding evening",score:"4.8",reviewCount:"220 reviews",quote:"Kalbelia dancers around a bonfire with folk music \u2014 our guests were completely transported!",author:"\u2014 Priya and Aditya Singh, Jaipur",services:[
      {label:"Open courtyard mehendi night setup with diyas and fabric drape",icon:"fa-fire",price:40000},
      {label:"Kalbelia folk dancers (4 artists, 2 hours)",icon:"fa-masks-theater",price:30000},
      {label:"Rajasthani folk music \u2014 dhol, been and manjeera",icon:"fa-music",price:22000},
      {label:"Catering \u2014 Rajasthani dal baati churma dinner (150 guests)",icon:"fa-utensils",price:90000},
      {label:"Professional mehendi artists (5 artists)",icon:"fa-hand",price:20000},
    ]},
    {img:"https://placehold.co/200x200/9a4000/ffc080?text=Palace+Wedding",tierClass:"tier-diamond",tier:"Royal",title:"Royal Palace Wedding",subtitle:"Heritage fort or palace venue \u2014 full 2-day event",score:"5.0",reviewCount:"121 reviews",quote:"Married in a 400-year-old fort. The elephant procession and fireworks were beyond anything we imagined!",author:"\u2014 Meera and Vikram Rathore, Jodhpur",services:[
      {label:"Heritage fort or haveli venue booking and coordination",icon:"fa-building-columns",price:350000},
      {label:"Elephant procession for groom's baraat entry",icon:"fa-star",price:80000},
      {label:"Royal Rajput wedding decor \u2014 marigold, mogra and fabric draping",icon:"fa-archway",price:200000},
      {label:"Catering \u2014 royal Rajasthani thali with live counters (500 guests)",icon:"fa-utensils",price:500000},
      {label:"Drone aerial shoot, cinematic film and photo album",icon:"fa-film",price:120000},
      {label:"Fireworks and pyrotechnics for baraat",icon:"fa-wand-magic-sparkles",price:75000},
    ]},
  ]},

  /* ── CORPORATE (3 more) ── */
  {id:"c3",name:"Pinnacle Team Experiences",eventType:"corporate",badge:"Team Outing and Offsite Experts",location:"Powai, Mumbai",img:"https://placehold.co/600x400/002a4a/60c0f0?text=Pinnacle+Team+Experiences",description:"End-to-end corporate team outings, offsite retreats and employee engagement experiences across hill stations, beaches and resorts.",rating:"4.6",reviews:143,priceFrom:"\u20b960,000",packages:[
    {img:"https://placehold.co/200x200/004080/80c0ff?text=Beach+Outing",tierClass:"tier-classic",tier:"Outing",title:"Beach Team Day Out",subtitle:"Goa or Alibaug beach team outing",score:"4.6",reviewCount:"90 reviews",quote:"The team bonding games and beach BBQ were fantastic \u2014 best outing we have ever had!",author:"\u2014 Sneha Iyer, People Head at Finedge",services:[
      {label:"Bus transport from office (both ways)",icon:"fa-bus",price:30000},
      {label:"Beach resort access and outdoor activity zone",icon:"fa-umbrella-beach",price:45000},
      {label:"Team bonding games facilitation (5 activities)",icon:"fa-people-group",price:20000},
      {label:"BBQ lunch and snacks for 50 people",icon:"fa-utensils",price:35000},
      {label:"Photography and candid coverage of the day",icon:"fa-camera",price:10000},
    ]},
    {img:"https://placehold.co/200x200/0a3060/c0e0ff?text=Hill+Retreat",tierClass:"tier-premium",tier:"Retreat",title:"Leadership Hill Retreat",subtitle:"2-day Lonavala or Mahabaleshwar offsite",score:"4.7",reviewCount:"53 reviews",quote:"The strategic sessions in the morning and bonfire at night was the perfect blend of work and fun!",author:"\u2014 Rohan Mehta, CEO at CloudBridge",services:[
      {label:"2-day resort booking for 30 delegates",icon:"fa-hotel",price:120000},
      {label:"Facilitated leadership workshops (2 sessions)",icon:"fa-chalkboard-teacher",price:60000},
      {label:"All meals \u2014 breakfast, lunch and dinner for 2 days",icon:"fa-utensils",price:80000},
      {label:"Bonfire, DJ night and outdoor games",icon:"fa-fire",price:25000},
      {label:"Transport from city and back (luxury coach)",icon:"fa-bus",price:30000},
    ]},
  ]},
  {id:"c4",name:"Blaze Corporate Entertainment",eventType:"corporate",badge:"Corporate Entertainment Specialists",location:"Koramangala, Bengaluru",img:"https://placehold.co/600x400/1a0a30/c080ff?text=Blaze+Corporate",description:"Delivering unforgettable corporate entertainment \u2014 stand-up comedy nights, mentalist shows, live bands and themed party nights for companies.",rating:"4.8",reviews:176,priceFrom:"\u20b975,000",packages:[
    {img:"https://placehold.co/200x200/400080/e0c0ff?text=Comedy+Night",tierClass:"tier-classic",tier:"Comedy",title:"Corporate Comedy Night",subtitle:"Stand-up comedy show for employees",score:"4.8",reviewCount:"120 reviews",quote:"The comedian had everyone in splits \u2014 even our stoic CFO was crying with laughter!",author:"\u2014 Anjali Rao, Culture Head at ZenPayroll",services:[
      {label:"Venue setup for 200 \u2014 stage, lighting and seating",icon:"fa-lightbulb",price:35000},
      {label:"Headline stand-up comedian (60-minute set)",icon:"fa-microphone",price:80000},
      {label:"Opening act comedian (20-minute set)",icon:"fa-microphone-lines",price:25000},
      {label:"Hi-tea and mocktail bar for 200 guests",icon:"fa-mug-saucer",price:40000},
      {label:"Photography and short highlight video",icon:"fa-camera",price:12000},
    ]},
    {img:"https://placehold.co/200x200/600020/ffc0d0?text=Mentalist+Show",tierClass:"tier-premium",tier:"Premium",title:"Mentalist and Magic Gala",subtitle:"Illusion show for 300+ employees",score:"4.9",reviewCount:"56 reviews",quote:"The mentalist read minds from the audience \u2014 the entire room was completely stunned and amazed!",author:"\u2014 Kiran Bhat, Admin Director at TechPulse",services:[
      {label:"Full stage setup with black drape and theatrical lighting",icon:"fa-lightbulb",price:55000},
      {label:"Celebrity mentalist show (90 minutes)",icon:"fa-eye",price:150000},
      {label:"Grand illusion opener act (30 minutes)",icon:"fa-wand-magic-sparkles",price:50000},
      {label:"3-course dinner for 300 guests",icon:"fa-utensils",price:270000},
      {label:"Event photography and video production",icon:"fa-video",price:40000},
    ]},
  ]},
  {id:"c5",name:"ConnectX MICE Solutions",eventType:"corporate",badge:"Meetings, Incentives and Exhibitions",location:"BKC, Mumbai",img:"https://placehold.co/600x400/0a2a1a/60f0a0?text=ConnectX+MICE",description:"Full-service MICE event management for trade shows, dealer meets, channel partner conferences and incentive travel programmes.",rating:"4.5",reviews:88,priceFrom:"\u20b92 L",packages:[
    {img:"https://placehold.co/200x200/104030/80f0b0?text=Trade+Show",tierClass:"tier-classic",tier:"Expo",title:"Trade Show and Expo Booth",subtitle:"Exhibition stand design and management",score:"4.5",reviewCount:"55 reviews",quote:"Our stall got the highest footfall at the expo \u2014 the design and digital elements were brilliant!",author:"\u2014 Vishal Nair, VP Sales at HealthTech India",services:[
      {label:"Custom exhibition stand design and build (3m x 3m)",icon:"fa-store",price:80000},
      {label:"AV screen, LED walls and digital display panels",icon:"fa-display",price:60000},
      {label:"On-site booth management staff (2 days)",icon:"fa-user-tie",price:30000},
      {label:"Brand collateral \u2014 banners, brochures and giveaways",icon:"fa-flag",price:40000},
      {label:"Lead capture app and visitor data collection",icon:"fa-mobile",price:20000},
    ]},
  ]},

  /* ── BIRTHDAY (3 more) ── */
  {id:"b3",name:"Funtastic Kids Carnival",eventType:"birthday",badge:"Kids Event Specialists",location:"Andheri East, Mumbai",img:"https://placehold.co/600x400/0a306a/f0c060?text=Funtastic+Kids",description:"Over-the-top kids birthday carnival planners \u2014 circus themes, princess parties, science labs and outdoor adventure birthdays.",rating:"4.9",reviews:612,priceFrom:"\u20b918,000",packages:[
    {img:"https://placehold.co/200x200/204080/90c0ff?text=Princess+Party",tierClass:"tier-classic",tier:"Princess",title:"Royal Princess Party",subtitle:"Fairytale themed party for girls",score:"4.9",reviewCount:"410 reviews",quote:"My daughter felt like a real princess \u2014 the castle decor and characters were absolutely magical!",author:"\u2014 Anita Sharma, Mumbai",services:[
      {label:"Castle balloon backdrop and princess throne",icon:"fa-star",price:12000},
      {label:"Character visit \u2014 princess actor in costume (90 mins)",icon:"fa-masks-theater",price:15000},
      {label:"Crown and wand craft activity for kids",icon:"fa-wand-magic-sparkles",price:5000},
      {label:"Custom tiered princess cake and cupcake tower",icon:"fa-cake-candles",price:7000},
      {label:"Return gift bags with theme accessories",icon:"fa-gift",price:6000},
      {label:"Party photographer (2 hours)",icon:"fa-camera",price:8000},
    ]},
    {img:"https://placehold.co/200x200/402060/e0b0ff?text=Science+Lab",tierClass:"tier-premium",tier:"Science",title:"Mad Scientist Birthday Lab",subtitle:"STEM-themed interactive party (ages 6\u201312)",score:"4.8",reviewCount:"202 reviews",quote:"The kids were doing real experiments and making slime \u2014 absolutely loved every second!",author:"\u2014 Ramesh Kapoor, Bengaluru",services:[
      {label:"Lab-themed decor \u2014 beakers, potions and lab coats",icon:"fa-flask",price:10000},
      {label:"Scientist entertainer with 6 live experiments",icon:"fa-atom",price:20000},
      {label:"Take-home slime kit for each child (20 kits)",icon:"fa-flask",price:8000},
      {label:"Custom science-themed cake with dry ice effect",icon:"fa-cake-candles",price:6000},
      {label:"Catering \u2014 themed finger foods and mocktails",icon:"fa-utensils",price:20000},
    ]},
  ]},
  {id:"b4",name:"The Cake Club Events",eventType:"birthday",badge:"Dessert and Decor Specialists",location:"Banjara Hills, Hyderabad",img:"https://placehold.co/600x400/3a0a3a/f0a0f0?text=The+Cake+Club",description:"Boutique dessert-forward birthday event studio specialising in candy tables, custom cakes, balloon sculptures and intimate adult celebrations.",rating:"4.7",reviews:298,priceFrom:"\u20b920,000",packages:[
    {img:"https://placehold.co/200x200/600060/ffc0ff?text=Candy+Table",tierClass:"tier-classic",tier:"Sweet",title:"Dreamy Candy Table Party",subtitle:"Dessert bar and decor for any age",score:"4.7",reviewCount:"195 reviews",quote:"The candy table was Instagram-worthy \u2014 guests kept taking photos in front of it all evening!",author:"\u2014 Sunita Bhat, Hyderabad",services:[
      {label:"6-foot styled candy and dessert table",icon:"fa-candy-cane",price:18000},
      {label:"Custom 3-tier birthday cake \u2014 flavour of choice",icon:"fa-cake-candles",price:7000},
      {label:"Personalised balloon garland and number balloons",icon:"fa-star",price:8000},
      {label:"Themed backdrop and neon sign",icon:"fa-lightbulb",price:10000},
      {label:"Photography and styling session (2 hours)",icon:"fa-camera",price:10000},
    ]},
    {img:"https://placehold.co/200x200/800040/ffd0e0?text=Rooftop+30th",tierClass:"tier-gold",tier:"Luxury",title:"Luxury Rooftop 30th/40th/50th",subtitle:"Milestone birthday dinner for adults",score:"4.8",reviewCount:"103 reviews",quote:"My 40th birthday rooftop dinner with the city skyline was absolutely unforgettable!",author:"\u2014 Kavitha Menon, Hyderabad",services:[
      {label:"Rooftop venue booking and full floral decor",icon:"fa-location-dot",price:40000},
      {label:"5-course private dinner for 20 guests with sommelier",icon:"fa-utensils",price:60000},
      {label:"Live acoustic duo or jazz band (3 hours)",icon:"fa-guitar",price:25000},
      {label:"Custom number cake and dessert station",icon:"fa-cake-candles",price:10000},
      {label:"Cinematic birthday film and photoshoot",icon:"fa-video",price:22000},
    ]},
  ]},
  {id:"b5",name:"Zindagi Party Studio",eventType:"birthday",badge:"Teen and Young Adult Parties",location:"Karol Bagh, Delhi",img:"https://placehold.co/600x400/0a0a3a/7070ff?text=Zindagi+Party+Studio",description:"High-energy birthday parties for teenagers and young adults \u2014 gamer nights, retro 80s themes, K-pop parties and outdoor adventure birthdays.",rating:"4.6",reviews:234,priceFrom:"\u20b930,000",packages:[
    {img:"https://placehold.co/200x200/101060/a0a0ff?text=Gamer+Night",tierClass:"tier-classic",tier:"Gamer",title:"Ultimate Gamer Night",subtitle:"Gaming-themed birthday for teens",score:"4.6",reviewCount:"155 reviews",quote:"A whole gaming zone with LED walls and Fortnite setup \u2014 my son refused to leave!",author:"\u2014 Rajiv Gupta, Delhi",services:[
      {label:"Gaming zone setup \u2014 console stations and VR headsets",icon:"fa-gamepad",price:35000},
      {label:"LED strip lighting and pixel wall decor",icon:"fa-lightbulb",price:15000},
      {label:"Gaming-themed birthday cake and cupcakes",icon:"fa-cake-candles",price:6000},
      {label:"Catering \u2014 gamer fuel: pizza, nachos and energy drinks",icon:"fa-utensils",price:25000},
      {label:"Tournament with prizes and trophies",icon:"fa-trophy",price:10000},
    ]},
    {img:"https://placehold.co/200x200/20006a/c0a0ff?text=Retro+80s",tierClass:"tier-premium",tier:"Retro",title:"Retro 80s Disco Night",subtitle:"Themed party for adults (21+)",score:"4.7",reviewCount:"79 reviews",quote:"The 80s theme, mirror ball and retro DJ took us straight back to our college days!",author:"\u2014 Meera and friends, Delhi",services:[
      {label:"Retro disco venue transformation \u2014 mirror balls and neon",icon:"fa-lightbulb",price:40000},
      {label:"80s themed DJ set (4 hours)",icon:"fa-music",price:30000},
      {label:"Costume contest with prize for best dressed",icon:"fa-trophy",price:8000},
      {label:"Catering \u2014 retro snacks and mocktail bar (60 guests)",icon:"fa-utensils",price:55000},
      {label:"Polaroid photo booth with retro props",icon:"fa-camera",price:12000},
    ]},
  ]},

  /* ── ANNIVERSARY (2 more) ── */
  {id:"an2",name:"Yaadon Ki Shaam Events",eventType:"anniversary",badge:"Surprise Anniversary Planners",location:"Lajpat Nagar, Delhi",img:"https://placehold.co/600x400/2a001a/ff90c0?text=Yaadon+Ki+Shaam",description:"Specialists in surprise anniversary events \u2014 from intimate home setups to grand restaurant takeovers across Delhi NCR.",rating:"4.7",reviews:189,priceFrom:"\u20b915,000",packages:[
    {img:"https://placehold.co/200x200/800030/ffc0e0?text=Surprise+Setup",tierClass:"tier-classic",tier:"Surprise",title:"Surprise Home Anniversary",subtitle:"In-home decoration and surprise reveal",score:"4.7",reviewCount:"130 reviews",quote:"My husband had no idea \u2014 when he walked in and saw the balloons and candles he was in tears!",author:"\u2014 Pooja Malhotra, Delhi",services:[
      {label:"In-home decor setup while spouse is away",icon:"fa-house",price:12000},
      {label:"Balloon ceiling canopy and petal floor art",icon:"fa-heart",price:8000},
      {label:"Personalised photo string lights",icon:"fa-image",price:5000},
      {label:"Anniversary cake and dessert box delivery",icon:"fa-cake-candles",price:4000},
      {label:"Surprise reveal photography",icon:"fa-camera",price:8000},
    ]},
    {img:"https://placehold.co/200x200/600028/ffe0f0?text=Restaurant+Takeover",tierClass:"tier-premium",tier:"Exclusive",title:"Restaurant Surprise Takeover",subtitle:"Private dinner with decor and live music",score:"4.8",reviewCount:"59 reviews",quote:"The chef\u2019s table with rose petals and the violinist playing our song \u2014 absolutely beautiful!",author:"\u2014 Arjun Sharma, Delhi",services:[
      {label:"Private restaurant or lounge booking (2 hours)",icon:"fa-location-dot",price:20000},
      {label:"Full floral decor \u2014 roses, candles and draping",icon:"fa-seedling",price:18000},
      {label:"Live violinist or guitarist during dinner",icon:"fa-guitar",price:15000},
      {label:"5-course anniversary dinner for two",icon:"fa-utensils",price:25000},
      {label:"Custom anniversary cake with champagne pour",icon:"fa-cake-candles",price:8000},
      {label:"Couple photography session",icon:"fa-camera",price:12000},
    ]},
  ]},
  {id:"an3",name:"Silver Threads Events",eventType:"anniversary",badge:"25th and 50th Anniversary Experts",location:"Jubilee Hills, Hyderabad",img:"https://placehold.co/600x400/1a1a00/e0e060?text=Silver+Threads+Events",description:"Dedicated planners for milestone silver and golden anniversaries with family-centred programmes, tributes and memory displays.",rating:"4.8",reviews:132,priceFrom:"\u20b980,000",packages:[
    {img:"https://placehold.co/200x200/606000/f0f080?text=Silver+Jubilee",tierClass:"tier-silver",tier:"Silver",title:"Silver Jubilee Celebration",subtitle:"25th anniversary party with family",score:"4.8",reviewCount:"90 reviews",quote:"The 25-year photo timeline and the video tribute made every guest emotional. Absolutely beautiful!",author:"\u2014 The Krishnamurthy Family, Hyderabad",services:[
      {label:"Banquet hall decor \u2014 silver and white theme",icon:"fa-archway",price:60000},
      {label:"25-year photo timeline display and video tribute",icon:"fa-film",price:40000},
      {label:"Catering \u2014 dinner for 75 guests",icon:"fa-utensils",price:120000},
      {label:"Live ghazal singer (2 hours)",icon:"fa-music",price:30000},
      {label:"Renewal of vows ceremony coordination",icon:"fa-heart",price:15000},
      {label:"Family portrait session",icon:"fa-camera",price:18000},
    ]},
  ]},

  /* ── BABY SHOWER (2 more) ── */
  {id:"bs2",name:"Stork and Sprinkle",eventType:"babyshower",badge:"Luxury Baby Shower Designers",location:"Nungambakkam, Chennai",img:"https://placehold.co/600x400/d0e8f8/1a3a6a?text=Stork+and+Sprinkle",description:"Elegant and luxury baby shower stylists \u2014 gender reveal parties, boho garden showers and royal nursery themes across Chennai.",rating:"4.9",reviews:142,priceFrom:"\u20b928,000",packages:[
    {img:"https://placehold.co/200x200/90c8e8/1a3a6a?text=Gender+Reveal",tierClass:"tier-teal",tier:"Reveal",title:"Gender Reveal Garden Party",subtitle:"Surprise reveal with family and friends",score:"4.9",reviewCount:"95 reviews",quote:"The balloon confetti burst \u2014 pink! \u2014 and everyone was screaming with joy. Perfectly arranged!",author:"\u2014 Deepa and Arjun Nair, Chennai",services:[
      {label:"Outdoor garden setup with floral arch and greenery wall",icon:"fa-seedling",price:18000},
      {label:"Giant balloon burst reveal (custom colour inside)",icon:"fa-star",price:8000},
      {label:"Gender reveal cake \u2014 pink or blue inside",icon:"fa-cake-candles",price:6000},
      {label:"Catering \u2014 brunch spread for 40 guests",icon:"fa-utensils",price:30000},
      {label:"Reveal photography and video reel",icon:"fa-camera",price:12000},
    ]},
    {img:"https://placehold.co/200x200/60a8d8/ffffff?text=Boho+Shower",tierClass:"tier-premium",tier:"Boho",title:"Boho Garden Baby Shower",subtitle:"Earthy, elegant outdoor celebration",score:"4.8",reviewCount:"47 reviews",quote:"The macrame wall, rattan chairs and wildflower garlands were so beautiful \u2014 felt like a dream!",author:"\u2014 Nithya Suresh, Chennai",services:[
      {label:"Boho outdoor setup \u2014 macrame, rattan and wildflowers",icon:"fa-leaf",price:25000},
      {label:"Baby shower games facilitation (5 games with prizes)",icon:"fa-dice",price:8000},
      {label:"Custom boho cake and dessert spread",icon:"fa-cake-candles",price:9000},
      {label:"High tea catering for 30 guests",icon:"fa-mug-saucer",price:24000},
      {label:"Professional photographer (3 hours)",icon:"fa-camera",price:14000},
    ]},
  ]},
  {id:"bs3",name:"Baby Bloom Events",eventType:"babyshower",badge:"Baby Shower and Naming Ceremony",location:"Koramangala, Bengaluru",img:"https://placehold.co/600x400/e8f4e8/1a5a1a?text=Baby+Bloom+Events",description:"Full-service baby shower and namakarana ceremony planners covering every tradition \u2014 Christian, Muslim, Hindu and interfaith celebrations.",rating:"4.7",reviews:108,priceFrom:"\u20b916,000",packages:[
    {img:"https://placehold.co/200x200/a0d4a0/1a5a1a?text=Namakarana",tierClass:"tier-classic",tier:"Naming",title:"Namakarana Naming Ceremony",subtitle:"Traditional South Indian naming ritual",score:"4.7",reviewCount:"72 reviews",quote:"The cradle ceremony and naming ritual were so beautifully arranged \u2014 every detail was perfect!",author:"\u2014 Smitha and Karthik Rao, Bengaluru",services:[
      {label:"Ceremonial cradle decoration with flowers",icon:"fa-baby",price:10000},
      {label:"Namakarana pooja items and purohit coordination",icon:"fa-fire",price:8000},
      {label:"Venue decor \u2014 banana leaves, kolam and lamps",icon:"fa-leaf",price:12000},
      {label:"Catering \u2014 traditional South Indian lunch (50 guests)",icon:"fa-utensils",price:25000},
      {label:"Photography of ceremony highlights",icon:"fa-camera",price:8000},
    ]},
  ]},

  /* ── PARTY (2 more) ── */
  {id:"p3",name:"House of Carnivale",eventType:"party",badge:"Masquerade and Theme Party Experts",location:"Lower Parel, Mumbai",img:"https://placehold.co/600x400/1a0808/f0a000?text=House+of+Carnivale",description:"Immersive themed event designers \u2014 Venetian masquerade balls, Great Gatsby soirees, Mardi Gras nights and murder mystery parties.",rating:"4.8",reviews:221,priceFrom:"\u20b970,000",packages:[
    {img:"https://placehold.co/200x200/600010/ffc060?text=Masquerade",tierClass:"tier-gold",tier:"Masque",title:"Venetian Masquerade Ball",subtitle:"Opulent masked party for 80+ guests",score:"4.8",reviewCount:"150 reviews",quote:"Walking into a Venetian palazzo in Mumbai \u2014 the candelabras, opera singer and masks were sublime!",author:"\u2014 Priya Kapoor, Mumbai",services:[
      {label:"Venetian-themed full venue transformation",icon:"fa-archway",price:90000},
      {label:"Masquerade masks for all guests (80 guests)",icon:"fa-masks-theater",price:20000},
      {label:"Opera singer or classical quartet performance (90 mins)",icon:"fa-music",price:60000},
      {label:"3-course sit-down dinner (80 guests)",icon:"fa-utensils",price:120000},
      {label:"Candlelight and chandelier lighting design",icon:"fa-lightbulb",price:35000},
    ]},
    {img:"https://placehold.co/200x200/800020/ffd0a0?text=Gatsby+Night",tierClass:"tier-premium",tier:"Gatsby",title:"Great Gatsby Roaring 20s Night",subtitle:"Art Deco themed cocktail party",score:"4.7",reviewCount:"71 reviews",quote:"The feathers, pearls and jazz band made us feel like it was 1925 \u2014 an extraordinary night!",author:"\u2014 Vivek and Aisha Rao, Mumbai",services:[
      {label:"Art Deco venue decor \u2014 gold, black and feathers",icon:"fa-star",price:75000},
      {label:"Jazz quartet (3 hours)",icon:"fa-guitar",price:45000},
      {label:"1920s themed cocktail and mocktail bar",icon:"fa-champagne-glasses",price:50000},
      {label:"Catering \u2014 canapes and buffet dinner (60 guests)",icon:"fa-utensils",price:80000},
      {label:"Costume contest with Art Deco prizes",icon:"fa-trophy",price:10000},
    ]},
  ]},
  {id:"p4",name:"Garden Soiree Events",eventType:"party",badge:"Outdoor Garden Party Specialists",location:"Koramangala, Bengaluru",img:"https://placehold.co/600x400/0a2a10/80e080?text=Garden+Soiree",description:"Elegant outdoor garden party planners for farewell parties, house warmings, sundowners and high-tea socials across Bengaluru.",rating:"4.6",reviews:154,priceFrom:"\u20b935,000",packages:[
    {img:"https://placehold.co/200x200/104020/a0f0a0?text=Sundowner",tierClass:"tier-teal",tier:"Sundowner",title:"Sundowner Garden Soiree",subtitle:"Elegant outdoor evening party",score:"4.6",reviewCount:"100 reviews",quote:"The fairy lights came on as the sun set \u2014 the whole garden looked like something from a magazine!",author:"\u2014 Ranjini Patel, Bengaluru",services:[
      {label:"Garden setup \u2014 fairy lights, floral centrepieces and seating",icon:"fa-seedling",price:28000},
      {label:"Cocktail and mocktail bar with mixologist (3 hours)",icon:"fa-champagne-glasses",price:30000},
      {label:"Live acoustic duo (2 hours)",icon:"fa-guitar",price:18000},
      {label:"Catering \u2014 canapes, charcuterie and dinner (40 guests)",icon:"fa-utensils",price:40000},
      {label:"Event photographer (3 hours)",icon:"fa-camera",price:12000},
    ]},
  ]},

  /* ── MOVIE SCREENING (2 more) ── */
  {id:"mv2",name:"Cinephile Pop-Up Events",eventType:"movie",badge:"Retro and Theme Screening Experts",location:"Bandra West, Mumbai",img:"https://placehold.co/600x400/0a0a1a/f0c020?text=Cinephile+Pop-Up",description:"Curating retro drive-ins, themed film nights, festival screenings and pop-up cinema experiences across Mumbai.",rating:"4.7",reviews:118,priceFrom:"\u20b922,000",packages:[
    {img:"https://placehold.co/200x200/302000/f0d060?text=Retro+Drive-In",tierClass:"tier-classic",tier:"Drive-In",title:"Retro Drive-In Movie Night",subtitle:"Classic drive-in cinema experience",score:"4.7",reviewCount:"78 reviews",quote:"Parked our cars, tuned to the FM frequency and watched the film under the stars \u2014 so nostalgic!",author:"\u2014 Ankit and Priya Shah, Mumbai",services:[
      {label:"Drive-in screen setup (20 ft inflatable)",icon:"fa-tv",price:18000},
      {label:"FM radio transmitter for in-car audio",icon:"fa-radio",price:6000},
      {label:"Vintage decor \u2014 bunting, checkerboard and neon signs",icon:"fa-lightbulb",price:8000},
      {label:"Popcorn boxes and snack bags for 20 cars",icon:"fa-utensils",price:12000},
    ]},
    {img:"https://placehold.co/200x200/202000/e0e060?text=Themed+Screening",tierClass:"tier-premium",tier:"Themed",title:"Immersive Themed Screening",subtitle:"Costume and themed cinema night",score:"4.8",reviewCount:"40 reviews",quote:"A Harry Potter themed screening with butter beer and house banners \u2014 completely magical!",author:"\u2014 The Book Club, Mumbai",services:[
      {label:"Themed venue decor matching the film",icon:"fa-archway",price:25000},
      {label:"4K projection with surround sound",icon:"fa-film",price:15000},
      {label:"Themed food and drink menu for 30 guests",icon:"fa-utensils",price:22000},
      {label:"Costume contest with prizes",icon:"fa-trophy",price:8000},
      {label:"Photo wall and candid photography",icon:"fa-camera",price:10000},
    ]},
  ]},
  {id:"mv3",name:"OpenAir Screens India",eventType:"movie",badge:"Outdoor Cinema Specialists",location:"Koregaon Park, Pune",img:"https://placehold.co/600x400/101010/ffdd44?text=OpenAir+Screens",description:"Bringing cinema under the open sky \u2014 corporate outdoor screenings, rooftop movie nights and community film festivals in Pune and beyond.",rating:"4.6",reviews:94,priceFrom:"\u20b914,000",packages:[
    {img:"https://placehold.co/200x200/1a1800/f0d040?text=Community+Fest",tierClass:"tier-classic",tier:"Community",title:"Community Film Festival",subtitle:"Outdoor screening for housing societies",score:"4.6",reviewCount:"62 reviews",quote:"Our apartment complex had a wonderful bonding evening \u2014 the kids loved it and so did the seniors!",author:"\u2014 RWA Secretary, Koregaon Park",services:[
      {label:"Outdoor inflatable screen (15 ft) and projector",icon:"fa-tv",price:10000},
      {label:"Seating arrangement \u2014 chairs and floor mats for 80",icon:"fa-couch",price:8000},
      {label:"Sound system with wireless microphone",icon:"fa-music",price:5000},
      {label:"Popcorn, chips and cold drinks counter",icon:"fa-utensils",price:10000},
      {label:"Kids activity zone before the screening",icon:"fa-child",price:8000},
    ]},
  ]},

  /* ── CULTURAL EVENTS (2 more) ── */
  {id:"cu2",name:"Utsav Heritage Events",eventType:"cultural",badge:"Heritage Festival Curators",location:"Lal Chowk, Srinagar",img:"https://placehold.co/600x400/0a2a3a/80d0f0?text=Utsav+Heritage+Events",description:"Curating authentic Kashmiri and North Indian cultural festivals \u2014 Shikara festivals, Baisakhi mehfils, Sufi nights and classical heritage evenings.",rating:"4.9",reviews:178,priceFrom:"\u20b960,000",packages:[
    {img:"https://placehold.co/200x200/102a3a/80c0e0?text=Sufi+Night",tierClass:"tier-premium",tier:"Sufi",title:"Sufi Mehfil Evening",subtitle:"Qawwali and Sufi music night",score:"4.9",reviewCount:"120 reviews",quote:"The qawwali under stars in a garden setting was the most moving musical experience of my life.",author:"\u2014 Radhika Singh, Delhi",services:[
      {label:"Open-air garden setup with carpet and lanterns",icon:"fa-fire",price:30000},
      {label:"Sufi qawwali troupe \u2014 6 artists (2.5 hours)",icon:"fa-music",price:75000},
      {label:"Shayari recitation opening act (30 mins)",icon:"fa-microphone",price:20000},
      {label:"Catering \u2014 Mughlai feast for 80 guests",icon:"fa-utensils",price:90000},
      {label:"Documentary-style event photography and video",icon:"fa-video",price:25000},
    ]},
  ]},
  {id:"cu3",name:"Natya Vedika Productions",eventType:"cultural",badge:"Classical Arts and Theatre Producers",location:"Mylapore, Chennai",img:"https://placehold.co/600x400/3a0808/f0a060?text=Natya+Vedika",description:"Premier producers of classical Indian theatre, Carnatic music concerts, Bharatanatyam arangetrams and Tamil drama performances.",rating:"4.9",reviews:256,priceFrom:"\u20b940,000",packages:[
    {img:"https://placehold.co/200x200/a03010/ffe0c0?text=Arangetram",tierClass:"tier-gold",tier:"Arangetram",title:"Bharatanatyam Arangetram",subtitle:"Debut classical dance production",score:"4.9",reviewCount:"180 reviews",quote:"Every element of our daughter\u2019s arangetram \u2014 lighting, sound, decor and catering \u2014 was flawless!",author:"\u2014 Uma and Rajan Iyer, Chennai",services:[
      {label:"Stage setup with traditional backdrop and props",icon:"fa-archway",price:50000},
      {label:"Professional stage lighting design (classical style)",icon:"fa-lightbulb",price:40000},
      {label:"Nattuvanar and live orchestra coordination",icon:"fa-music",price:80000},
      {label:"Catering \u2014 traditional Brahmin lunch (200 guests)",icon:"fa-utensils",price:120000},
      {label:"Professional videography and photography",icon:"fa-video",price:50000},
      {label:"Invitation design, printing and distribution",icon:"fa-envelope",price:15000},
    ]},
    {img:"https://placehold.co/200x200/802808/ffc0a0?text=Carnatic+Concert",tierClass:"tier-classic",tier:"Concert",title:"Carnatic Music Sabha",subtitle:"Classical music concert event",score:"4.8",reviewCount:"76 reviews",quote:"The acoustics, seating and stage management were impeccable \u2014 every rasikas felt the music!",author:"\u2014 Carnatic Music Society of Chennai",services:[
      {label:"Auditorium or sabha hall booking and setup",icon:"fa-building-columns",price:35000},
      {label:"Stage decor with bronze lamps and floral arrangement",icon:"fa-seedling",price:15000},
      {label:"Sound system \u2014 microphones and monitors (classical grade)",icon:"fa-music",price:25000},
      {label:"Refreshments \u2014 filter coffee and snacks (150 guests)",icon:"fa-mug-saucer",price:20000},
      {label:"Photography and audio recording of the concert",icon:"fa-camera",price:18000},
    ]},
  ]},

  /* ── ENGAGEMENT (2 more) ── */
  {id:"en2",name:"Golden Moment Events",eventType:"engagement",badge:"Ring Ceremony Planners",location:"Andheri, Mumbai",img:"https://placehold.co/600x400/2a0a30/e0a0ff?text=Golden+Moment+Events",description:"Specialising in intimate and grand ring ceremonies, Roka functions and engagement parties with tailor-made decor across Mumbai.",rating:"4.8",reviews:201,priceFrom:"\u20b950,000",packages:[
    {img:"https://placehold.co/200x200/500070/f0d0ff?text=Ring+Ceremony",tierClass:"tier-classic",tier:"Ring",title:"Grand Ring Ceremony",subtitle:"Formal engagement party for 100 guests",score:"4.8",reviewCount:"140 reviews",quote:"The floral decor and couple monogram projection were stunning \u2014 our families were overwhelmed!",author:"\u2014 Nisha and Arjun Kapoor, Mumbai",services:[
      {label:"Ring ceremony venue decor \u2014 floral arch and draping",icon:"fa-archway",price:55000},
      {label:"LED couple monogram projection",icon:"fa-star",price:15000},
      {label:"Catering \u2014 Indian snacks and dinner (100 guests)",icon:"fa-utensils",price:100000},
      {label:"Engagement cake and dessert table",icon:"fa-cake-candles",price:10000},
      {label:"Photography and highlight reel",icon:"fa-camera",price:25000},
      {label:"Guest return gifts and favour boxes",icon:"fa-gift",price:12000},
    ]},
  ]},
  {id:"en3",name:"Pre-Wed Stories",eventType:"engagement",badge:"Pre-Wedding Shoot Specialists",location:"Civil Lines, Jaipur",img:"https://placehold.co/600x400/1a0a00/ffc080?text=Pre-Wed+Stories",description:"Award-winning pre-wedding photography and film production in heritage locations across Rajasthan \u2014 forts, havelis and sand dunes.",rating:"4.9",reviews:312,priceFrom:"\u20b945,000",packages:[
    {img:"https://placehold.co/200x200/803000/ffd0a0?text=Fort+Shoot",tierClass:"tier-gold",tier:"Heritage",title:"Heritage Fort Pre-Wedding Shoot",subtitle:"Cinematic shoot at Rajasthani fort or haveli",score:"4.9",reviewCount:"230 reviews",quote:"Our shoot at Amer Fort at sunrise was like living in a Bollywood film. The results were extraordinary!",author:"\u2014 Meera and Rajiv Sharma, Jaipur",services:[
      {label:"Heritage location scouting and permissions",icon:"fa-location-dot",price:15000},
      {label:"Cinematographer and director of photography team",icon:"fa-video",price:60000},
      {label:"Outfit styling \u2014 2 looks per person",icon:"fa-star",price:20000},
      {label:"Makeup artist for bride (full day)",icon:"fa-spa",price:15000},
      {label:"Drone aerial footage",icon:"fa-film",price:25000},
      {label:"Same-week edited film and 30 gallery images",icon:"fa-image",price:20000},
    ]},
  ]},

  /* ── RELIGIOUS (2 more) ── */
  {id:"re2",name:"Anand Puja Mandap",eventType:"religious",badge:"Puja and Festival Specialists",location:"Vastrapur, Ahmedabad",img:"https://placehold.co/600x400/5a2000/ffa040?text=Anand+Puja+Mandap",description:"Full-service religious event management for navratri garba, ganesh puja, diwali puja, satyanarayan katha and all Gujarati and Marwari rituals.",rating:"4.8",reviews:321,priceFrom:"\u20b912,000",packages:[
    {img:"https://placehold.co/200x200/a04000/ffd0a0?text=Navratri+Garba",tierClass:"tier-classic",tier:"Garba",title:"Navratri Garba Night",subtitle:"Community or private garba event",score:"4.8",reviewCount:"210 reviews",quote:"The garba was electrifying \u2014 the lighting, the dhol and the entire energy was incredible!",author:"\u2014 Navratri Committee, Ahmedabad",services:[
      {label:"Garba venue setup \u2014 circle arrangement and decor",icon:"fa-archway",price:30000},
      {label:"Dhol tasha group (5 players, full night)",icon:"fa-drum",price:25000},
      {label:"DJ and sound system for garba music",icon:"fa-music",price:20000},
      {label:"Dandiya sticks for 200 participants",icon:"fa-wand-magic-sparkles",price:8000},
      {label:"Catering \u2014 fasting-friendly snacks and chaas (200 guests)",icon:"fa-utensils",price:40000},
    ]},
    {img:"https://placehold.co/200x200/802000/ffe0c0?text=Ganesh+Puja",tierClass:"tier-premium",tier:"Utsav",title:"Ganesh Chaturthi Utsav",subtitle:"10-day community celebration management",score:"4.9",reviewCount:"111 reviews",quote:"Our society had the most beautiful Ganesh installation \u2014 the idol, decor and visarjan were flawless!",author:"\u2014 Housing Society, Pune",services:[
      {label:"Eco-friendly Ganesh idol sourcing and installation",icon:"fa-fire",price:35000},
      {label:"10-day pandal decoration and daily flower arrangement",icon:"fa-seedling",price:50000},
      {label:"Daily aarti coordination and prasad distribution",icon:"fa-user-tie",price:20000},
      {label:"Cultural programme \u2014 folk music and skits (3 evenings)",icon:"fa-masks-theater",price:40000},
      {label:"Visarjan procession with dhol and tasha",icon:"fa-drum",price:18000},
    ]},
  ]},
  {id:"re3",name:"Sacred Occasions Events",eventType:"religious",badge:"Christian and Interfaith Ceremony Planners",location:"Park Street, Kolkata",img:"https://placehold.co/600x400/0a1a3a/c0d0f0?text=Sacred+Occasions",description:"Experienced planners for Christian baptisms, communions, confirmation ceremonies, interfaith weddings and prayer meetings across India.",rating:"4.7",reviews:144,priceFrom:"\u20b920,000",packages:[
    {img:"https://placehold.co/200x200/1a3060/a0c0f0?text=Baptism+Party",tierClass:"tier-classic",tier:"Baptism",title:"Baptism and Christening Party",subtitle:"Celebration for baby\u2019s baptism",score:"4.7",reviewCount:"95 reviews",quote:"The white and gold decor was heavenly and the catering kept everyone happy for hours!",author:"\u2014 The D\u2019Souza Family, Kolkata",services:[
      {label:"Venue decor \u2014 white, gold and floral theme",icon:"fa-archway",price:18000},
      {label:"Custom christening cake and dessert table",icon:"fa-cake-candles",price:8000},
      {label:"Catering \u2014 Continental and Indian spread (60 guests)",icon:"fa-utensils",price:45000},
      {label:"Live acoustic hymns and contemporary music (2 hours)",icon:"fa-music",price:15000},
      {label:"Photography and video highlights",icon:"fa-camera",price:14000},
    ]},
  ]},

  /* ── SPORTS (2 more) ── */
  {id:"sp2",name:"Finishline Marathon Co.",eventType:"sports",badge:"Marathon and Running Event Experts",location:"Bandra, Mumbai",img:"https://placehold.co/600x400/0a3a10/80f060?text=Finishline+Marathon",description:"End-to-end marathon, fun run and cycling event management for corporates, NGOs and communities across major Indian cities.",rating:"4.7",reviews:112,priceFrom:"\u20b91 L",packages:[
    {img:"https://placehold.co/200x200/205040/a0f0c0?text=Fun+Run",tierClass:"tier-classic",tier:"Fun Run",title:"Corporate Fun Run 5K",subtitle:"Employee wellness running event",score:"4.7",reviewCount:"75 reviews",quote:"400 employees running together at dawn with our company logo on their bibs \u2014 incredible sight!",author:"\u2014 HR Director, WealthTech India",services:[
      {label:"Route planning, permissions and safety marshals",icon:"fa-location-dot",price:40000},
      {label:"Timing chips and results system for all runners",icon:"fa-stopwatch",price:35000},
      {label:"Custom finisher medal and T-shirt (400 pax)",icon:"fa-medal",price:80000},
      {label:"Finish line arch, tents and race-day setup",icon:"fa-archway",price:30000},
      {label:"Post-race refreshments \u2014 bananas, water and energy drinks",icon:"fa-utensils",price:20000},
    ]},
    {img:"https://placehold.co/200x200/104030/80e0a0?text=Full+Marathon",tierClass:"tier-premium",tier:"Marathon",title:"Community Half Marathon",subtitle:"Registered event with 1000+ runners",score:"4.8",reviewCount:"37 reviews",quote:"Our first half marathon as a community event had 1,200 participants. The organisation was outstanding.",author:"\u2014 Runclub Bengaluru",services:[
      {label:"Full route management, police liaisons and permits",icon:"fa-shield-halved",price:120000},
      {label:"RFID timing system for 1000 runners",icon:"fa-stopwatch",price:90000},
      {label:"Hydration stations every 2 km (10 stations)",icon:"fa-droplet",price:40000},
      {label:"Medical team \u2014 ambulance and paramedics on route",icon:"fa-kit-medical",price:60000},
      {label:"Finisher medals, bibs and event T-shirts",icon:"fa-medal",price:150000},
      {label:"Live tracking app and race-day communication",icon:"fa-mobile",price:45000},
    ]},
  ]},
  {id:"sp3",name:"PlayZone Corporate Sports",eventType:"sports",badge:"Corporate Sports Day Organisers",location:"Whitefield, Bengaluru",img:"https://placehold.co/600x400/1a0a3a/c080ff?text=PlayZone+Corporate",description:"Full-day corporate sports tournaments and olympiads with multi-sport formats \u2014 cricket, football, badminton, tug-of-war and relay races.",rating:"4.6",reviews:87,priceFrom:"\u20b980,000",packages:[
    {img:"https://placehold.co/200x200/2a1060/e0c0ff?text=Sports+Olympiad",tierClass:"tier-teal",tier:"Olympiad",title:"Corporate Sports Olympiad",subtitle:"Full-day multi-sport tournament",score:"4.6",reviewCount:"60 reviews",quote:"6 sports, 300 employees, 8 hours of competition \u2014 the energy and camaraderie were unforgettable!",icon:"fa-trophy",services:[
      {label:"Multi-sport ground booking (cricket, football, badminton)",icon:"fa-location-dot",price:50000},
      {label:"Referees, umpires and scoring system for all sports",icon:"fa-user-tie",price:30000},
      {label:"Team kits for 10 teams (jerseys and caps)",icon:"fa-shirt",price:45000},
      {label:"Opening and closing ceremony with commentary",icon:"fa-microphone",price:20000},
      {label:"Trophies, medals and certificates for all categories",icon:"fa-trophy",price:25000},
      {label:"Catering \u2014 breakfast, lunch and evening snacks for 300",icon:"fa-utensils",price:90000},
    ]},
  ]},

  /* ── CONCERT (2 more) ── */
  {id:"co2",name:"Unplugged India Events",eventType:"concert",badge:"Indie and Acoustic Show Producers",location:"Indiranagar, Bengaluru",img:"https://placehold.co/600x400/0a0a2a/8090ff?text=Unplugged+India",description:"Curating intimate acoustic gigs, indie music nights, college fests and open-mic events across Bengaluru, Pune and Mumbai.",rating:"4.7",reviews:143,priceFrom:"\u20b930,000",packages:[
    {img:"https://placehold.co/200x200/101050/c0c8ff?text=Indie+Night",tierClass:"tier-classic",tier:"Indie",title:"Indie Music Night",subtitle:"Curated multi-artist show (250 audience)",score:"4.7",reviewCount:"95 reviews",quote:"Four incredible indie bands, perfect sound and a crowd that was absolutely electric \u2014 loved it!",author:"\u2014 Indie Fan, Bengaluru",services:[
      {label:"Venue booking and stage setup (250 capacity)",icon:"fa-location-dot",price:25000},
      {label:"4 indie bands \u2014 45 min sets each",icon:"fa-guitar",price:80000},
      {label:"Professional sound engineer and FOH mixing",icon:"fa-music",price:30000},
      {label:"Bar and snack counters (250 guests)",icon:"fa-champagne-glasses",price:40000},
      {label:"Event photographer and video reel",icon:"fa-camera",price:15000},
    ]},
    {img:"https://placehold.co/200x200/201060/e0d0ff?text=Open+Mic",tierClass:"tier-teal",tier:"Open Mic",title:"Open Mic Showcase Night",subtitle:"Community performance platform",score:"4.6",reviewCount:"48 reviews",quote:"As a first-time performer the whole experience was warm, welcoming and professionally run!",author:"\u2014 Aditya Kumar, Bengaluru",services:[
      {label:"Venue and PA system setup for 80 guests",icon:"fa-lightbulb",price:10000},
      {label:"Open mic host/MC for the evening",icon:"fa-microphone",price:8000},
      {label:"10 artist slots \u2014 music, poetry, comedy and spoken word",icon:"fa-guitar",price:15000},
      {label:"Light catering \u2014 coffee, beer and snacks",icon:"fa-mug-saucer",price:12000},
      {label:"Photography and artist profile reels",icon:"fa-camera",price:8000},
    ]},
  ]},
  {id:"co3",name:"Swar Samrat Productions",eventType:"concert",badge:"Bollywood and Classical Live Show Managers",location:"Andheri West, Mumbai",img:"https://placehold.co/600x400/1a000a/f060a0?text=Swar+Samrat+Productions",description:"Premier live entertainment producers for Bollywood tribute shows, classical music festivals, fusion concerts and celebrity artist management.",rating:"4.8",reviews:209,priceFrom:"\u20b93 L",packages:[
    {img:"https://placehold.co/200x200/500028/ffc0e0?text=Bollywood+Tribute",tierClass:"tier-premium",tier:"Bollywood",title:"Bollywood Tribute Live Show",subtitle:"Tribute acts and medley for 800+ audience",score:"4.8",reviewCount:"150 reviews",quote:"The tribute artists were so close to the originals \u2014 the audience sang along for three straight hours!",author:"\u2014 Annual Day Committee, HDFC Life",services:[
      {label:"Headline Bollywood tribute act (3 artists, 90 mins)",icon:"fa-music",price:200000},
      {label:"Full stage production \u2014 lights, LED wall and sound",icon:"fa-lightbulb",price:180000},
      {label:"Background dancers and choreography (8 dancers)",icon:"fa-masks-theater",price:60000},
      {label:"Catering \u2014 snacks and mocktail bar (800 guests)",icon:"fa-utensils",price:160000},
      {label:"Live streaming and recording",icon:"fa-video",price:50000},
    ]},
    {img:"https://placehold.co/200x200/300010/ffa0c0?text=Fusion+Concert",tierClass:"tier-gold",tier:"Fusion",title:"Jugalbandi Fusion Concert",subtitle:"Classical meets contemporary crossover show",score:"4.9",reviewCount:"59 reviews",quote:"Sitar with electronic music, bansuri with jazz \u2014 a concert unlike anything I have experienced!",author:"\u2014 Raghav Menon, Mumbai",services:[
      {label:"Fusion ensemble \u2014 6 classical and contemporary musicians",icon:"fa-music",price:150000},
      {label:"Intimate black-box theatre setup (200 capacity)",icon:"fa-archway",price:45000},
      {label:"Professional sound design and lighting",icon:"fa-lightbulb",price:55000},
      {label:"Pre-show artist meet-and-greet for 20 guests",icon:"fa-star",price:30000},
      {label:"Catering \u2014 high-tea before the concert",icon:"fa-mug-saucer",price:30000},
    ]},
  ]},
];

let activeCat="wedding",currentBookingData=null;
let myRequests=[];
try{myRequests=JSON.parse(localStorage.getItem('evh_requests2')||'[]');}catch(e){myRequests=[];}

function saveRequests(){try{localStorage.setItem('evh_requests2',JSON.stringify(myRequests));}catch(e){}}
function byType(t){return vendors.filter(v=>v.eventType===t);}
function fmtStars(s){const n=parseFloat(s),f=Math.floor(n),h=n%1>=.5?1:0,e=5-f-h;let r='';for(let i=0;i<f;i++)r+='<i class="fa-solid fa-star"></i>';if(h)r+='<i class="fa-solid fa-star-half-stroke"></i>';for(let i=0;i<e;i++)r+='<i class="fa-regular fa-star"></i>';return r;}
function fmtMoney(n){if(n>=10000000)return '\u20b9'+(n/10000000).toFixed(2).replace(/\.?0+$/,'')+' Cr';if(n>=100000)return '\u20b9'+(n/100000).toFixed(2).replace(/\.?0+$/,'')+' L';return '\u20b9'+n.toLocaleString('en-IN');}
function fmtDate(d){try{return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});}catch(e){return d;}}
function fmtTime(t){if(!t)return 'Not specified';try{const[h,m]=t.split(':').map(Number);const ampm=h>=12?'PM':'AM';const hr=h%12||12;return `${hr}:${m.toString().padStart(2,'0')} ${ampm}`;}catch(e){return t;}}

function updateReqBadge(){
  const badge=document.getElementById('reqBadge');
  if(myRequests.length>0){badge.style.display='flex';badge.textContent=myRequests.length;}
  else{badge.style.display='none';}
}

function renderServicesGrid(){
  const grid=document.getElementById('servicesGrid');
  grid.innerHTML=eventCategories.map(c=>{
    const count=byType(c.id).length;
    return `<div class="service-card${c.id===activeCat?' active':''}" onclick="selectCategory('${c.id}')">
      <div class="sc-icon-wrap"><i class="fa-solid ${c.icon}"></i></div>
      <div class="sc-name">${c.name}</div>
      <div class="sc-count">${count} vendor${count!==1?'s':''}</div>
    </div>`;
  }).join('');
}

function selectCategory(catId){
  activeCat=catId;
  activeServiceType='all';
  renderServicesGrid();renderCats();
  document.getElementById('pkgView').style.display='none';
  if(currentMode==='individual'){
    document.getElementById('individualView').style.display='block';
    document.getElementById('indDetailView').style.display='none';
    document.getElementById('vendorGrid').style.display='none';
    renderIndividualCats();
    renderIndividualCards();
  } else {
    document.getElementById('individualView').style.display='none';
    document.getElementById('vendorGrid').style.display='block';
    renderVendors();
  }
  setTimeout(()=>{
    document.getElementById('catBar').scrollIntoView({behavior:'smooth',block:'nearest'});
    const ab=document.querySelector('.cat-btn.active');
    if(ab)ab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  },100);
}

function renderCats(){
  const bar=document.getElementById('catBar');
  bar.innerHTML=eventCategories.map(c=>`<button class="cat-btn${c.id===activeCat?' active':''}" data-cat="${c.id}"><i class="fa-solid ${c.icon}"></i> ${c.short}<span class="cat-count">${byType(c.id).length}</span></button>`).join('');
  bar.querySelectorAll('.cat-btn').forEach(b=>b.addEventListener('click',()=>selectCategory(b.dataset.cat)));
}

function renderVendors(){
  const list=byType(activeCat),cat=eventCategories.find(c=>c.id===activeCat);
  document.getElementById('sectionHeading').innerHTML=`<i class="fa-solid ${cat.icon}" style="color:var(--teal);margin-right:10px;font-size:22px;"></i>${cat.name} <span>Vendors</span>`;
  document.getElementById('sectionMeta').textContent=`${list.length} verified vendor${list.length!==1?'s':''} \u00b7 Click any card to explore packages`;
  if(!list.length){document.getElementById('vendorCards').innerHTML=`<div class="empty"><div class="empty-icon"><i class="fa-solid fa-clock"></i></div><h3>Coming Soon</h3><p>We are onboarding vendors for this category.</p></div>`;return;}
  document.getElementById('vendorCards').innerHTML=list.map((v,i)=>`
    <div class="vendor-card" data-id="${v.id}" style="animation-delay:${i*55}ms">
      <div class="vc-img-wrap"><img class="vc-img" src="${v.img}" alt="${v.name}" loading="lazy"/><div class="vc-badge">${v.badge}</div><div class="vc-pkg-count"><i class="fa-solid fa-layer-group" style="font-size:10px;margin-right:4px;"></i>${v.packages.length} package${v.packages.length!==1?'s':''}</div></div>
      <div class="vc-body"><div class="vc-cat">${cat.name}</div><div class="vc-name">${v.name}</div><div class="vc-desc">${v.description}</div>
      <div class="vc-rating"><span class="stars">${fmtStars(v.rating)}</span><span class="rating-num">${v.rating}</span><span style="color:var(--ink3);font-size:12px;">(${v.reviews})</span></div>
      <div class="vc-location"><i class="fa-solid fa-location-dot"></i>${v.location}</div>
      <div class="vc-footer"><div class="vc-price-hint">From <strong>${v.priceFrom}</strong></div><div class="vc-cta">View packages <i class="fa-solid fa-arrow-right"></i></div></div></div>
    </div>`).join('');
  document.querySelectorAll('.vendor-card').forEach(c=>c.addEventListener('click',()=>openPackages(c.dataset.id)));
}

function openPackages(vid){
  const v=vendors.find(x=>x.id===vid);if(!v)return;
  document.getElementById('pkgVendorName').textContent=v.name;
  document.getElementById('pkgVendorMeta').innerHTML=`<i class="fa-solid fa-shield-halved" style="color:var(--teal);margin-right:5px;"></i>${v.badge} &bull; <i class="fa-solid fa-star" style="color:#d4a017;margin:0 3px 0 8px;"></i>${v.rating} (${v.reviews} reviews)`;
  document.getElementById('pkgVendorLocation').innerHTML=`<i class="fa-solid fa-location-dot"></i><span>${v.location}</span>`;
  document.getElementById('pkgTableBody').innerHTML=v.packages.map(p=>`
    <tr>
      <td class="td-pkg"><div class="pkg-thumb-wrap"><img class="pkg-thumb" src="${p.img}" alt="${p.title}" loading="lazy"/><span class="pkg-tier ${p.tierClass}">${p.tier}</span></div><div class="pkg-title">${p.title}</div><div class="pkg-subtitle">${p.subtitle}</div></td>
      <td><ul class="inc-list">${p.services.map(s=>`<li><i class="fa-solid ${s.icon}"></i>${s.label}</li>`).join('')}</ul></td>
      <td class="td-rev">
        <div class="rev-stars-row">${fmtStars(p.score)}</div>
        <div class="rev-score">${p.score}</div>
        <div class="rev-count"><i class="fa-regular fa-comment-dots" style="margin-right:4px;color:var(--ink3);"></i>${p.reviewCount}</div>
        <div class="rev-quote">${p.quote}<div class="rev-author">${p.author}</div></div>
        <button class="book-now-btn" data-vid="${v.id}" data-pkg="${encodeURIComponent(p.title)}"><i class="fa-solid fa-calendar-check"></i> Book &amp; Customise</button>
      </td>
    </tr>`).join('');
  document.querySelectorAll('.book-now-btn').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();openBookingModal(btn.dataset.vid,decodeURIComponent(btn.dataset.pkg));}));
  document.getElementById('vendorGrid').style.display='none';
  document.getElementById('pkgView').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}

function openBookingModal(vid,pkgTitle){
  const v=vendors.find(x=>x.id===vid);if(!v)return;
  const p=v.packages.find(x=>x.title===pkgTitle);if(!p)return;
  currentBookingData={vendor:v,pkg:p};
  currentIndData=null;
  document.getElementById('bookingForm').style.display='block';
  document.getElementById('successScreen').style.display='none';
  document.getElementById('bLabel').textContent=v.badge;
  document.getElementById('bName').textContent=p.title;
  document.getElementById('bSub').textContent=v.name+' \u00b7 Tick services and customise your event';
  const today=new Date(),minDate=new Date(today.getTime()+7*24*60*60*1000);
  const dateEl=document.getElementById('eventDate');
  dateEl.value='';dateEl.min=minDate.toISOString().split('T')[0];dateEl.classList.remove('error');
  document.getElementById('dateErrMsg').style.display='none';
  document.getElementById('dateHint').style.display='flex';
  document.getElementById('eventTime').value='';
  document.getElementById('customNote').value='';
  document.getElementById('svcTableBody').innerHTML=p.services.map((s,i)=>`
    <tr><td><label class="svc-row-label" for="cb_${i}"><input type="checkbox" class="svc-cb" id="cb_${i}" data-price="${s.price}" data-label="${s.label}"/><i class="fa-solid ${s.icon} svc-icon"></i>${s.label}</label></td><td>${fmtMoney(s.price)}</td></tr>`).join('');
  document.querySelectorAll('.svc-cb').forEach(cb=>cb.addEventListener('change',updateEstimate));
  updateEstimate();
  document.getElementById('bookingOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function validateDate(){
  const dateEl=document.getElementById('eventDate'),val=dateEl.value;
  const today=new Date();today.setHours(0,0,0,0);
  const min=new Date(today.getTime()+7*24*60*60*1000);
  const errMsg=document.getElementById('dateErrMsg'),hint=document.getElementById('dateHint');
  if(!val||new Date(val)<min){dateEl.classList.add('error');errMsg.style.display='flex';hint.style.display='none';}
  else{dateEl.classList.remove('error');errMsg.style.display='none';hint.style.display='flex';}
  updateEstimate();
}

function updateEstimate(){
  const checked=[...document.querySelectorAll('.svc-cb:checked')];
  const total=checked.reduce((s,c)=>s+parseInt(c.dataset.price),0);
  document.getElementById('estAmount').textContent=fmtMoney(total);
  document.getElementById('estNote').textContent=checked.length?`${checked.length} service${checked.length>1?'s':''} selected`:'Select services above to build your estimate';
  const dateVal=document.getElementById('eventDate').value,today=new Date();
  today.setHours(0,0,0,0);
  const min=new Date(today.getTime()+7*24*60*60*1000);
  document.getElementById('submitBtn').disabled=checked.length===0||!dateVal||new Date(dateVal)<min;
}

function closeModal(){document.getElementById('bookingOverlay').classList.remove('open');document.body.style.overflow='';}

function submitBooking(){
  const checked=[...document.querySelectorAll('.svc-cb:checked')];
  const total=checked.reduce((s,c)=>s+parseInt(c.dataset.price),0);
  const{vendor,pkg}=currentBookingData;
  const dateVal=document.getElementById('eventDate').value;
  const timeVal=document.getElementById('eventTime').value;
  const customNote=document.getElementById('customNote').value.trim();
  const reqId='REQ-'+Date.now().toString(36).toUpperCase();
  const newReq={id:reqId,vendorName:vendor.name,packageTitle:pkg.title,vendorBadge:vendor.badge,
    eventDate:dateVal,eventDateDisplay:fmtDate(dateVal),eventTime:timeVal,eventTimeDisplay:fmtTime(timeVal),
    services:checked.map(c=>({label:c.dataset.label,price:parseInt(c.dataset.price)})),total,customNote,
    status:'pending',submittedAt:new Date().toISOString(),category:vendor.eventType};
  myRequests.unshift(newReq);saveRequests();updateReqBadge();
  document.getElementById('successSummary').innerHTML=
    `<div class="sum-row"><span>Request ID</span><span><strong style="color:var(--teal);">${reqId}</strong></span></div>`+
    `<div class="sum-row"><span>Status</span><span><strong style="color:var(--pending);">\u23f3 Pending Review</strong></span></div>`+
    `<div class="sum-row"><span>Vendor</span><span><strong>${vendor.name}</strong></span></div>`+
    `<div class="sum-row"><span>Package</span><span><strong>${pkg.title}</strong></span></div>`+
    `<div class="sum-row"><span><i class="fa-regular fa-calendar" style="color:var(--teal);margin-right:5px;"></i>Event Date</span><span><strong>${fmtDate(dateVal)}</strong></span></div>`+
    `<div class="sum-row"><span><i class="fa-regular fa-clock" style="color:var(--teal);margin-right:5px;"></i>Start Time</span><span><strong>${fmtTime(timeVal)}</strong></span></div>`+
    (customNote?`<div class="sum-row"><span><i class="fa-solid fa-pen-nib" style="color:var(--teal);margin-right:5px;"></i>Custom Note</span><span style="font-style:italic;color:var(--ink3);max-width:200px;text-align:right;">${customNote.substring(0,80)}${customNote.length>80?'\u2026':''}</span></div>`:'')+
    checked.map(c=>`<div class="sum-row"><span>${c.dataset.label.substring(0,40)}${c.dataset.label.length>40?'\u2026':''}</span><span>${fmtMoney(parseInt(c.dataset.price))}</span></div>`).join('')+
    `<div class="sum-row total"><span><strong>Estimated Total</strong></span><span><strong>${fmtMoney(total)}</strong></span></div>`;
  document.getElementById('bookingForm').style.display='none';
  const ss=document.getElementById('successScreen');ss.style.display='flex';ss.style.flexDirection='column';
}

const statusConfig={
  'pending':     {label:'Pending Review',  icon:'fa-clock',         steps:[{active:true,done:false},{done:false},{done:false},{done:false}]},
  'in-progress': {label:'In Progress',     icon:'fa-spinner',       steps:[{done:true},{active:true,done:false},{done:false},{done:false}]},
  'confirmed':   {label:'Confirmed',       icon:'fa-circle-check',  steps:[{done:true},{done:true},{done:true},{done:true}]},
  'rejected':    {label:'Not Available',   icon:'fa-circle-xmark',  steps:[{done:false},{done:false},{done:false},{done:false}]},
};
const stepLabels=['Submitted','Reviewing','Confirmed','Booked'];

function renderRequestsPanel(){
  const body=document.getElementById('rpBody');
  if(!myRequests.length){
    body.innerHTML=`<div class="rp-empty"><i class="fa-solid fa-clipboard-list"></i><p>No requests yet. Browse vendors and send your first customisation request!</p></div>`;return;
  }
  body.innerHTML=myRequests.map(r=>{
    const sc=statusConfig[r.status]||statusConfig['pending'];
    const stepsHtml=stepLabels.map((sl,i)=>{
      const s=sc.steps[i]||{};
      const cls=s.done?(s.active?'active done':'done'):(s.active?'active':'');
      return `<div class="sp-step ${cls}"><div class="sp-dot">${s.done?'<i class="fa-solid fa-check" style="font-size:8px;"></i>':s.active?'<i class="fa-solid fa-circle" style="font-size:6px;"></i>':''}</div><div class="sp-label">${sl}</div></div>`;
    }).join('');
    return `<div class="request-item status-${r.status}">
      <div class="ri-top">
        <div><div class="ri-vendor">${r.vendorName}</div><div class="ri-pkg">${r.packageTitle}</div></div>
        <div class="ri-status status-${r.status}"><i class="fa-solid ${sc.icon}"></i> ${sc.label}</div>
      </div>
      <div class="ri-meta">
        <span><i class="fa-regular fa-calendar"></i> ${r.eventDateDisplay||'Date TBD'}</span>
        <span><i class="fa-regular fa-clock"></i> ${r.eventTimeDisplay||'TBD'}</span>
        <span><i class="fa-solid fa-tag"></i> ${r.id}</span>
      </div>
      ${r.customNote?`<div class="ri-custom-note"><i class="fa-solid fa-pen-nib" style="margin-right:6px;color:var(--teal);"></i>${r.customNote.substring(0,120)}${r.customNote.length>120?'\u2026':''}</div>`:''}
      <div class="status-progress">${stepsHtml}</div>
      <div class="ri-total"><span>${r.services.length} service${r.services.length!==1?'s':''} selected</span><span>${fmtMoney(r.total)}</span></div>
    </div>`;
  }).join('');
}

function openRequestsPanel(){renderRequestsPanel();document.getElementById('requestsOverlay').classList.add('open');document.getElementById('requestsPanel').classList.add('open');document.body.style.overflow='hidden';}
function closeRequestsPanel(){document.getElementById('requestsOverlay').classList.remove('open');document.getElementById('requestsPanel').classList.remove('open');document.body.style.overflow='';}

document.getElementById('backBtn').addEventListener('click',()=>{
  document.getElementById('pkgView').style.display='none';
  document.getElementById('vendorGrid').style.display='block';
});
document.getElementById('indBackBtn').addEventListener('click',()=>{
  document.getElementById('indDetailView').style.display='none';
  document.getElementById('individualView').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
});
document.getElementById('modalCloseBtn').addEventListener('click',closeModal);
document.getElementById('cancelBtn').addEventListener('click',closeModal);
document.getElementById('submitBtn').addEventListener('click',handleSubmit);
document.getElementById('closeSuccessBtn').addEventListener('click',closeModal);
document.getElementById('viewRequestsBtn').addEventListener('click',()=>{closeModal();openRequestsPanel();});
document.getElementById('bookingOverlay').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.getElementById('myRequestsBtn').addEventListener('click',openRequestsPanel);
document.getElementById('rpCloseBtn').addEventListener('click',closeRequestsPanel);
document.getElementById('requestsOverlay').addEventListener('click',closeRequestsPanel);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeRequestsPanel();}});


/* ============================================================
   INDIVIDUAL SERVICES DATA
   ============================================================ */
const serviceTypes=[
  {id:"all",         name:"All Services",    icon:"fa-th-large"},
  {id:"decoration",  name:"Decoration",      icon:"fa-wand-magic-sparkles"},
  {id:"catering",    name:"Catering",        icon:"fa-utensils"},
  {id:"photography", name:"Photography",     icon:"fa-camera"},
  {id:"music",       name:"Music & DJ",      icon:"fa-music"},
  {id:"makeup",      name:"Makeup & Styling",icon:"fa-spa"},
  {id:"mehendi",     name:"Mehendi",         icon:"fa-hand"},
  {id:"lighting",    name:"Lighting",        icon:"fa-lightbulb"},
  {id:"cake",        name:"Cake & Desserts", icon:"fa-cake-candles"},
  {id:"transport",   name:"Transport",       icon:"fa-bus"},
  {id:"anchoring",   name:"Anchoring & MC",  icon:"fa-microphone"},
  {id:"security",    name:"Security",        icon:"fa-shield-halved"},
  {id:"floral",      name:"Floral & Garlands",icon:"fa-seedling"},
  {id:"photobooth",  name:"Photo Booth",     icon:"fa-image"},
  {id:"entertainment",name:"Entertainment",  icon:"fa-masks-theater"},
];

const individualServices=[
  /* ========= DECORATION ========= */
  {id:"d1",name:"Bloom Decor Studio",type:"decoration",eventTags:["wedding","anniversary","engagement"],location:"Banjara Hills, Hyderabad",img:"https://placehold.co/600x300/8b1a2b/ffffff?text=Bloom+Decor+Studio",provider:"Riya Sharma & Team",description:"Luxury floral and fabric mandap setups, stage backdrops and complete venue transformations for weddings and grand events.",rating:"4.9",reviews:312,priceFrom:"\u20b930,000",color:"#8b1a2b",features:["Mandap Setups","Floral Walls","Stage Backdrops","Entrance Decor"],items:[
    {label:"Grand floral mandap with fresh roses and marigold",icon:"fa-archway",price:65000},
    {label:"Bride and groom stage backdrop (10 ft x 8 ft)",icon:"fa-image",price:30000},
    {label:"Entrance gate floral arch",icon:"fa-leaf",price:15000},
    {label:"Table centrepiece arrangements (per table)",icon:"fa-seedling",price:2500},
    {label:"Ceiling floral canopy per sq ft",icon:"fa-star",price:800},
    {label:"Aisle petal and candle decor",icon:"fa-heart",price:12000},
  ]},
  {id:"d2",name:"Festive Frames Decor",type:"decoration",eventTags:["birthday","party","babyshower"],location:"Koramangala, Bengaluru",img:"https://placehold.co/600x300/0a1a6a/80c0ff?text=Festive+Frames+Decor",provider:"Ankit Mehta",description:"Vibrant balloon sculptures, themed backdrops and candy-colour party decor for birthdays, baby showers and festive parties.",rating:"4.7",reviews:221,priceFrom:"\u20b98,000",color:"#0a1a6a",features:["Balloon Arches","Theme Backdrops","Neon Signs","Kids Decor"],items:[
    {label:"Balloon arch (per linear foot)",icon:"fa-star",price:600},
    {label:"Themed photo backdrop (8x6 ft)",icon:"fa-image",price:8000},
    {label:"Ceiling balloon canopy (per 100 sq ft)",icon:"fa-wand-magic-sparkles",price:5000},
    {label:"Neon sign rental (per event)",icon:"fa-lightbulb",price:6000},
    {label:"Table and chair linen hire (per set)",icon:"fa-chair",price:400},
    {label:"Welcome balloon bouquet with personalized banner",icon:"fa-gift",price:3500},
  ]},
  {id:"d3",name:"Royal Touch Decor",type:"decoration",eventTags:["corporate","concert","cultural"],location:"Connaught Place, Delhi",img:"https://placehold.co/600x300/1a1f36/80c0ff?text=Royal+Touch+Decor",provider:"Suresh & Priya Kapoor",description:"Corporate and large-scale event staging, drape and brand decor specialists for galas, conferences and cultural evenings.",rating:"4.6",reviews:154,priceFrom:"\u20b940,000",color:"#1a1f36",features:["Stage Draping","Brand Setups","Red Carpet","AV Backdrop"],items:[
    {label:"Full stage drape and backdrop branding",icon:"fa-flag",price:45000},
    {label:"Red carpet and stanchion setup",icon:"fa-star",price:8000},
    {label:"Floral centrepieces for conference tables (per table)",icon:"fa-seedling",price:1800},
    {label:"Themed photo wall with corporate logo",icon:"fa-image",price:18000},
    {label:"Venue fabric draping (per sq ft)",icon:"fa-archway",price:200},
    {label:"Premium lounge area setup",icon:"fa-couch",price:35000},
  ]},
  {id:"d4",name:"Rustic & Bloom Events",type:"decoration",eventTags:["babyshower","engagement","anniversary"],location:"Bandra West, Mumbai",img:"https://placehold.co/600x300/2a5a2a/c0f0c0?text=Rustic+Bloom+Events",provider:"Neha D'Souza",description:"Boho-chic, rustic and garden-style decor for intimate celebrations — macrame, pampas grass, lanterns and dried floral arrangements.",rating:"4.8",reviews:178,priceFrom:"\u20b912,000",color:"#2a5a2a",features:["Boho Style","Macrame Walls","Dried Florals","Lantern Setups"],items:[
    {label:"Boho macrame wall backdrop (7x5 ft)",icon:"fa-archway",price:12000},
    {label:"Pampas grass and dried floral centrepieces (per table)",icon:"fa-seedling",price:2000},
    {label:"Lantern pathway lighting setup",icon:"fa-lightbulb",price:8000},
    {label:"Balloon garland in earthy tones",icon:"fa-star",price:5000},
    {label:"Wicker and rattan furniture hire (per piece)",icon:"fa-chair",price:600},
    {label:"Wildflower bridal table arrangement",icon:"fa-leaf",price:7000},
  ]},

  /* ========= CATERING ========= */
  {id:"cat1",name:"Spice Route Caterers",type:"catering",eventTags:["wedding","corporate","religious"],location:"Jubilee Hills, Hyderabad",img:"https://placehold.co/600x300/5a2000/ffa060?text=Spice+Route+Caterers",provider:"Chef Rajan Naidu",description:"Premium banquet catering for weddings and corporate events — pan-Indian cuisines including Andhra, North Indian, Mughlai and Continental buffets.",rating:"4.9",reviews:498,priceFrom:"\u20b9350/plate",color:"#5a2000",features:["Buffet Service","Live Counters","Andhra Cuisine","Mughlai Cuisine"],items:[
    {label:"Vegetarian buffet (per plate, min 100 guests)",icon:"fa-utensils",price:350},
    {label:"Non-vegetarian buffet (per plate, min 100 guests)",icon:"fa-utensils",price:450},
    {label:"Live chaat and street food counter",icon:"fa-utensils",price:15000},
    {label:"Live dosa and idli counter",icon:"fa-utensils",price:12000},
    {label:"Dessert and mithai station",icon:"fa-cake-candles",price:18000},
    {label:"Welcome drinks and mocktail bar",icon:"fa-champagne-glasses",price:10000},
  ]},
  {id:"cat2",name:"The Grand Feast",type:"catering",eventTags:["wedding","anniversary","party"],location:"Salt Lake, Kolkata",img:"https://placehold.co/600x300/3a0a00/ff8060?text=The+Grand+Feast",provider:"Bimalendu Roy & Sons",description:"Specialists in sit-down plated dinners, traditional Bengali and North Indian feasts, and multi-cuisine buffet set-ups for up to 1000 guests.",rating:"4.8",reviews:367,priceFrom:"\u20b9400/plate",color:"#3a0a00",features:["Bengali Cuisine","Plated Dinners","Multi-cuisine","Up to 1000 pax"],items:[
    {label:"Bengali traditional menu on banana leaf (per plate)",icon:"fa-utensils",price:400},
    {label:"Continental 3-course plated dinner (per plate)",icon:"fa-utensils",price:700},
    {label:"Biryani live counter (per 100 portions)",icon:"fa-utensils",price:18000},
    {label:"Sweets and mithai table (per 50 guests)",icon:"fa-cake-candles",price:8000},
    {label:"Tea and coffee station (per 4 hours)",icon:"fa-mug-saucer",price:4000},
    {label:"Mocktail and juice bar (per 50 guests)",icon:"fa-champagne-glasses",price:7000},
  ]},
  {id:"cat3",name:"Bite & Delight Catering",type:"catering",eventTags:["birthday","babyshower","party"],location:"Andheri East, Mumbai",img:"https://placehold.co/600x300/0a3a5a/80d0ff?text=Bite+and+Delight",provider:"Meera and Rohan Shah",description:"Boutique catering for intimate events — high teas, finger food spreads, themed party menus and kids birthday catering.",rating:"4.7",reviews:211,priceFrom:"\u20b9250/plate",color:"#0a3a5a",features:["High Tea","Finger Foods","Kids Menus","Theme Catering"],items:[
    {label:"Afternoon high tea spread (per person, min 20)",icon:"fa-mug-saucer",price:450},
    {label:"Finger food party platter (per 20 pieces)",icon:"fa-utensils",price:1200},
    {label:"Kids party menu — pizza, pasta, juice (per child)",icon:"fa-utensils",price:280},
    {label:"Themed cupcake and dessert tower (per 20 pieces)",icon:"fa-cake-candles",price:2400},
    {label:"Mocktail and juice station (per 3 hours)",icon:"fa-champagne-glasses",price:6000},
    {label:"Popcorn and candy bar station",icon:"fa-candy-cane",price:4500},
  ]},
  {id:"cat4",name:"Sattvik Pure Veg Caterers",type:"catering",eventTags:["religious","wedding","cultural"],location:"Vastrapur, Ahmedabad",img:"https://placehold.co/600x300/4a2000/ffd0a0?text=Sattvik+Pure+Veg",provider:"Pankaj Joshi",description:"100% pure vegetarian caterers specialising in Jain, Sattvic, Gujarati and Rajasthani cuisines for religious ceremonies and traditional events.",rating:"4.9",reviews:289,priceFrom:"\u20b9300/plate",color:"#4a2000",features:["Pure Veg","Jain Options","Gujarati Cuisine","No Onion/Garlic"],items:[
    {label:"Gujarati thali — full traditional menu (per plate)",icon:"fa-utensils",price:300},
    {label:"Jain menu (no root vegetables) (per plate)",icon:"fa-utensils",price:350},
    {label:"Dal baati churma live counter",icon:"fa-utensils",price:14000},
    {label:"Puri and sabzi counter",icon:"fa-utensils",price:8000},
    {label:"Prasad distribution package (per 100 guests)",icon:"fa-gift",price:5000},
    {label:"Thandai and sharbat counter",icon:"fa-champagne-glasses",price:4000},
  ]},

  /* ========= PHOTOGRAPHY ========= */
  {id:"ph1",name:"Moments by Arjun",type:"photography",eventTags:["wedding","engagement","anniversary"],location:"Banjara Hills, Hyderabad",img:"https://placehold.co/600x300/1a0a2e/c080ff?text=Moments+by+Arjun",provider:"Arjun Reddy",description:"Cinematic wedding and couple photographer specialising in storytelling-style photography — candid, portrait and lifestyle sessions.",rating:"5.0",reviews:278,priceFrom:"\u20b925,000",color:"#1a0a2e",features:["Cinematic Style","Drone Shots","Same-day Edit","RAW Files"],items:[
    {label:"Full-day wedding photography (10 hours, 2 photographers)",icon:"fa-camera",price:60000},
    {label:"Cinematic wedding film (4-6 min edit)",icon:"fa-video",price:40000},
    {label:"Pre-wedding couple shoot (2 hours, 2 locations)",icon:"fa-camera",price:25000},
    {label:"Drone aerial photography and video",icon:"fa-film",price:20000},
    {label:"Same-day edit video (delivered at reception)",icon:"fa-video",price:15000},
    {label:"Premium photo album (60 pages, lay-flat)",icon:"fa-image",price:18000},
  ]},
  {id:"ph2",name:"SnapJoy Events",type:"photography",eventTags:["birthday","party","corporate"],location:"Koregaon Park, Pune",img:"https://placehold.co/600x300/003060/80c0ff?text=SnapJoy+Events",provider:"Puja and Vivek Nair",description:"High-energy event photographers for parties, corporate events and birthdays — quick turnaround, fun candid style.",rating:"4.7",reviews:193,priceFrom:"\u20b910,000",color:"#003060",features:["Candid Style","Next-day Delivery","Reels","Corporate Events"],items:[
    {label:"Event photography (4 hours, 1 photographer)",icon:"fa-camera",price:10000},
    {label:"Event photography (8 hours, 2 photographers)",icon:"fa-camera",price:18000},
    {label:"Instagram reel creation (30 sec edit)",icon:"fa-video",price:5000},
    {label:"Corporate headshot session (per person)",icon:"fa-camera",price:1500},
    {label:"Printed photo delivery (per 4x6 print)",icon:"fa-image",price:30},
    {label:"Online gallery delivery (within 5 days)",icon:"fa-globe",price:2000},
  ]},
  {id:"ph3",name:"Lens of Light Studios",type:"photography",eventTags:["babyshower","religious","cultural"],location:"Mylapore, Chennai",img:"https://placehold.co/600x300/2a1a00/f0b060?text=Lens+of+Light",provider:"Ramesh Iyer",description:"Specialists in ceremony and ritual photography — capturing authentic moments at puja ceremonies, baby showers, arangetrams and cultural events.",rating:"4.8",reviews:156,priceFrom:"\u20b98,000",color:"#2a1a00",features:["Ceremony Coverage","Traditional Style","Short Film","South Indian Expertise"],items:[
    {label:"Ceremony photography (4 hours)",icon:"fa-camera",price:8000},
    {label:"Short highlight film (2 min edit)",icon:"fa-video",price:6000},
    {label:"Full-day coverage with 2 photographers",icon:"fa-camera",price:18000},
    {label:"Family portrait session (1 hour, studio setup)",icon:"fa-image",price:5000},
    {label:"Printed canvas (20x30 inch)",icon:"fa-image",price:3500},
    {label:"Drone footage of outdoor ceremonies",icon:"fa-film",price:12000},
  ]},

  /* ========= MUSIC & DJ ========= */
  {id:"mu1",name:"Bass Drop Entertainment",type:"music",eventTags:["wedding","party","birthday"],location:"Lower Parel, Mumbai",img:"https://placehold.co/600x300/0a002a/a060ff?text=Bass+Drop+Entertainment",provider:"DJ Karan & Team",description:"Professional DJ services for weddings, parties and corporate events — top 40, Bollywood, EDM and Punjabi mixes with premium sound systems.",rating:"4.8",reviews:345,priceFrom:"\u20b920,000",color:"#0a002a",features:["Bollywood Mixes","EDM Sets","Premium Sound","LED DJ Booth"],items:[
    {label:"DJ set — 4 hours with equipment (up to 200 guests)",icon:"fa-music",price:20000},
    {label:"DJ set — 6 hours with premium sound system",icon:"fa-music",price:30000},
    {label:"LED DJ booth and light show",icon:"fa-lightbulb",price:15000},
    {label:"Fog machine and special effects package",icon:"fa-wand-magic-sparkles",price:8000},
    {label:"Live percussionist alongside DJ (4 hours)",icon:"fa-drum",price:12000},
    {label:"Couple's first dance choreography assist",icon:"fa-heart",price:5000},
  ]},
  {id:"mu2",name:"Strings & Beats Live",type:"music",eventTags:["wedding","anniversary","corporate"],location:"Nungambakkam, Chennai",img:"https://placehold.co/600x300/1a2a00/a0e060?text=Strings+and+Beats+Live",provider:"Ravi Shankar and Ensemble",description:"Live band and orchestra services for weddings, galas and corporate events — Bollywood covers, jazz, ghazals and classical fusion.",rating:"4.9",reviews:201,priceFrom:"\u20b935,000",color:"#1a2a00",features:["Live Band","Jazz Quartet","Ghazal Nights","Bollywood Covers"],items:[
    {label:"5-piece Bollywood live band (3 hours)",icon:"fa-music",price:55000},
    {label:"Jazz quartet for cocktail evening (2 hours)",icon:"fa-guitar",price:35000},
    {label:"Ghazal singer with tabla and harmonium (2 hours)",icon:"fa-microphone",price:28000},
    {label:"Classical sitar and tabla duo (1.5 hours)",icon:"fa-music",price:22000},
    {label:"Acoustic duo for sangeet or reception",icon:"fa-guitar",price:18000},
    {label:"Wedding shehnai player (ceremony, 2 hours)",icon:"fa-music",price:12000},
  ]},
  {id:"mu3",name:"Beat Box DJ Academy",type:"music",eventTags:["birthday","party","sports"],location:"Karol Bagh, Delhi",img:"https://placehold.co/600x300/1a001a/ff80ff?text=Beat+Box+DJ+Academy",provider:"DJ Priya Malhotra",description:"Budget-friendly DJ and sound services for college fests, birthday bashes, house parties and small corporate events across Delhi.",rating:"4.5",reviews:178,priceFrom:"\u20b910,000",color:"#1a001a",features:["Budget Friendly","College Fests","House Parties","Quick Setup"],items:[
    {label:"DJ set (3 hours, basic sound setup)",icon:"fa-music",price:10000},
    {label:"DJ set (5 hours, mid-range sound system)",icon:"fa-music",price:16000},
    {label:"Sound system hire only (PA + mixer, per day)",icon:"fa-music",price:8000},
    {label:"Wireless microphone set (2 mics, per event)",icon:"fa-microphone",price:2500},
    {label:"Party lights package (strobe, LED, mirror ball)",icon:"fa-lightbulb",price:5000},
  ]},
  {id:"mu4",name:"Dhol Dynasty",type:"music",eventTags:["wedding","party","religious"],location:"Rajouri Garden, Delhi",img:"https://placehold.co/600x300/4a0000/ff8080?text=Dhol+Dynasty",provider:"Gurpreet Singh & Boys",description:"Professional dhol, tasha and folk music groups for baraats, Holi, Baisakhi and all festive occasions — full dhol tasha groups available.",rating:"4.9",reviews:412,priceFrom:"\u20b98,000",color:"#4a0000",features:["Baraat Dhol","Tasha Groups","Folk Music","Holi Events"],items:[
    {label:"Single dhol player (2 hours)",icon:"fa-drum",price:8000},
    {label:"Dhol tasha group — 4 players (2 hours)",icon:"fa-drum",price:22000},
    {label:"Full baraat dhol party — 6 players + nagin (3 hours)",icon:"fa-drum",price:35000},
    {label:"Bhangra performance troupe (4 dancers + dhol, 1 hour)",icon:"fa-masks-theater",price:25000},
    {label:"Punjabi folk music set for sangeet (2 hours)",icon:"fa-music",price:20000},
  ]},

  /* ========= MAKEUP & STYLING ========= */
  {id:"mk1",name:"Glow Studio by Nisha",type:"makeup",eventTags:["wedding","engagement","anniversary"],location:"Jubilee Hills, Hyderabad",img:"https://placehold.co/600x300/5a003a/ff90d0?text=Glow+Studio+by+Nisha",provider:"Nisha Reddy",description:"Award-winning bridal makeup artist specialising in airbrush, HD and traditional bridal looks for Telugu, Tamil and North Indian brides.",rating:"5.0",reviews:389,priceFrom:"\u20b915,000",color:"#5a003a",features:["Airbrush Makeup","HD Bridal","Trial Session","Saree Draping"],items:[
    {label:"Bridal makeup — airbrush HD (full face + neck)",icon:"fa-spa",price:25000},
    {label:"Bridesmaid makeup (per person)",icon:"fa-spa",price:4000},
    {label:"Makeup trial session (1 week before event)",icon:"fa-spa",price:5000},
    {label:"Nauvari or silk saree draping",icon:"fa-star",price:3000},
    {label:"Floral bun and bridal hair styling",icon:"fa-spa",price:6000},
    {label:"Pre-bridal skincare session (facial + cleanup)",icon:"fa-spa",price:4500},
  ]},
  {id:"mk2",name:"The Style Lounge",type:"makeup",eventTags:["birthday","party","corporate"],location:"Indiranagar, Bengaluru",img:"https://placehold.co/600x300/2a0040/e0a0ff?text=The+Style+Lounge",provider:"Kavitha and Shreya",description:"Party-ready glam makeup and styling for birthdays, corporate events, photoshoots and special occasions — including group packages.",rating:"4.7",reviews:222,priceFrom:"\u20b93,500",color:"#2a0040",features:["Party Glam","Group Packages","On-location","Quick Turnaround"],items:[
    {label:"Party makeup (eyes + face, 1 person)",icon:"fa-spa",price:3500},
    {label:"Group party makeup (per person, min 5 people)",icon:"fa-spa",price:2800},
    {label:"Hair styling — blowdry and waves (1 person)",icon:"fa-spa",price:2000},
    {label:"Full glam package — makeup + hair (1 person)",icon:"fa-spa",price:5500},
    {label:"Photoshoot styling — 2 looks per person",icon:"fa-camera",price:6000},
    {label:"Corporate grooming (men's styling, per person)",icon:"fa-user",price:1500},
  ]},
  {id:"mk3",name:"Bridal Bliss Artistry",type:"makeup",eventTags:["wedding","babyshower","anniversary"],location:"Andheri West, Mumbai",img:"https://placehold.co/600x300/3a0010/ffc0d0?text=Bridal+Bliss+Artistry",provider:"Deepika Joshi",description:"Celebrity-trained bridal makeup artist offering luxury bridal packages with on-site team, destination weddings and minimalist bridal looks.",rating:"4.9",reviews:167,priceFrom:"\u20b920,000",color:"#3a0010",features:["Celebrity Trained","Destination Weddings","Minimalist Bridal","Full Team"],items:[
    {label:"Luxury bridal makeup (airbrush, full team)",icon:"fa-spa",price:35000},
    {label:"Minimalist bridal look (dewy skin + subtle)",icon:"fa-spa",price:20000},
    {label:"Mother of the bride/groom makeup",icon:"fa-spa",price:5000},
    {label:"Mehendi or sangeet makeup (1 person)",icon:"fa-spa",price:7000},
    {label:"Destination wedding travel package (per day + travel)",icon:"fa-plane",price:15000},
  ]},

  /* ========= MEHENDI ========= */
  {id:"meh1",name:"Henna Canvas Artists",type:"mehendi",eventTags:["wedding","engagement","party"],location:"Koramangala, Bengaluru",img:"https://placehold.co/600x300/5a3000/ffd080?text=Henna+Canvas+Artists",provider:"Sunita Mehendi Team",description:"Professional mehendi artists for bridal and party mehendi — Rajasthani, Arabic and Indo-Arabic designs with natural organic henna.",rating:"4.9",reviews:445,priceFrom:"\u20b91,500",color:"#5a3000",features:["Bridal Mehendi","Arabic Designs","Organic Henna","Group Bookings"],items:[
    {label:"Bridal full hands and feet (complex Rajasthani design)",icon:"fa-hand",price:8000},
    {label:"Bridal simple design (both hands)",icon:"fa-hand",price:4000},
    {label:"Bridesmaid mehendi (both hands, per person)",icon:"fa-hand",price:1500},
    {label:"Party guest mehendi (1 hand, per person)",icon:"fa-hand",price:600},
    {label:"Groom mehendi initials on hand",icon:"fa-hand",price:1000},
    {label:"Full mehendi artist team (4 artists, 4 hours)",icon:"fa-people-group",price:20000},
  ]},
  {id:"meh2",name:"The Mehendi Studio",type:"mehendi",eventTags:["wedding","birthday","cultural"],location:"Lajpat Nagar, Delhi",img:"https://placehold.co/600x300/3a1000/ff9040?text=The+Mehendi+Studio",provider:"Riya and Anjali",description:"Trending mehendi designs including geometric, minimalist and fusion styles alongside classic Mughal and Rajasthani patterns.",rating:"4.8",reviews:312,priceFrom:"\u20b9700",color:"#3a1000",features:["Geometric Designs","Minimalist","Fusion Style","Quick Apply"],items:[
    {label:"Minimalist bridal mehendi (both hands)",icon:"fa-hand",price:5000},
    {label:"Geometric party mehendi (1 hand)",icon:"fa-hand",price:700},
    {label:"Full bridal — hands and feet (detailed)",icon:"fa-hand",price:10000},
    {label:"Group party mehendi (per 10 guests)",icon:"fa-people-group",price:8000},
    {label:"Mehendi + hair flower arrangement combo",icon:"fa-hand",price:6000},
  ]},

  /* ========= LIGHTING ========= */
  {id:"li1",name:"Lumina Event Lighting",type:"lighting",eventTags:["wedding","corporate","concert"],location:"Whitefield, Bengaluru",img:"https://placehold.co/600x300/0a0a2a/8080ff?text=Lumina+Event+Lighting",provider:"Arun Lighting Co.",description:"Professional architectural and event lighting design — LED uplighting, moving heads, spotlights, stage lighting and mood lighting packages.",rating:"4.8",reviews:198,priceFrom:"\u20b920,000",color:"#0a0a2a",features:["LED Uplighting","Moving Heads","Stage Lighting","Mood Lighting"],items:[
    {label:"LED uplighting (per 10 fixtures, full event)",icon:"fa-lightbulb",price:10000},
    {label:"Moving head lights — 8 units with operator",icon:"fa-lightbulb",price:25000},
    {label:"Fairy light draping (per 100 sq ft of ceiling)",icon:"fa-star",price:3000},
    {label:"Spotlights for mandap or stage (4 units)",icon:"fa-lightbulb",price:8000},
    {label:"Outdoor garden string lights (per 50 ft run)",icon:"fa-star",price:1500},
    {label:"Laser show package (concert or party)",icon:"fa-wand-magic-sparkles",price:35000},
  ]},
  {id:"li2",name:"Diwali Lights Studio",type:"lighting",eventTags:["religious","cultural","party"],location:"Vastrapur, Ahmedabad",img:"https://placehold.co/600x300/3a2000/ffc060?text=Diwali+Lights+Studio",provider:"Suresh Patel",description:"Specialists in traditional diyas, lanterns, Diwali and festival lighting for homes, societies and pandals with all-India delivery.",rating:"4.7",reviews:234,priceFrom:"\u20b95,000",color:"#3a2000",features:["Diya Setups","Lanterns","Pandal Lighting","Festival Themes"],items:[
    {label:"Clay diya arrangement (per 100 diyas, lit)",icon:"fa-fire",price:2500},
    {label:"Hanging lantern canopy (per 20 lanterns)",icon:"fa-lightbulb",price:3000},
    {label:"Rangoli LED pathway lighting (per 20 ft)",icon:"fa-star",price:2000},
    {label:"Pandal string light decoration (per 500 sq ft)",icon:"fa-lightbulb",price:12000},
    {label:"Akash kandil (Diwali lantern, large, per unit)",icon:"fa-lightbulb",price:800},
    {label:"Flower pot (fireworks display, 10 units)",icon:"fa-wand-magic-sparkles",price:5000},
  ]},
  {id:"li3",name:"Neon Dreams Events",type:"lighting",eventTags:["birthday","party","concert"],location:"Bandra West, Mumbai",img:"https://placehold.co/600x300/0a001a/ff40ff?text=Neon+Dreams+Events",provider:"Kabir Shah",description:"Neon, UV and glow-in-the-dark lighting for parties and concerts — neon sign rentals, UV body paint stations and blacklight setups.",rating:"4.6",reviews:143,priceFrom:"\u20b98,000",color:"#0a001a",features:["Neon Signs","UV Lighting","Blacklight","Glow Parties"],items:[
    {label:"Custom neon sign rental (per event, standard sizes)",icon:"fa-lightbulb",price:6000},
    {label:"UV blacklight fixtures (per 8 units, full event)",icon:"fa-lightbulb",price:8000},
    {label:"UV body paint station (with artist, 3 hours)",icon:"fa-wand-magic-sparkles",price:12000},
    {label:"Glow party kit (glow sticks, glasses, accessories, per 50)",icon:"fa-star",price:4000},
    {label:"Disco mirror ball with motor and spotlight",icon:"fa-star",price:3500},
  ]},

  /* ========= CAKE & DESSERTS ========= */
  {id:"ck1",name:"Sugar Atelier",type:"cake",eventTags:["wedding","birthday","anniversary"],location:"Koramangala, Bengaluru",img:"https://placehold.co/600x300/3a0030/ff80c0?text=Sugar+Atelier",provider:"Priya Menon",description:"Bespoke wedding and celebration cakes, dessert tables and cake jars — handcrafted with premium Belgian chocolate and fresh seasonal ingredients.",rating:"5.0",reviews:312,priceFrom:"\u20b93,500",color:"#3a0030",features:["Bespoke Designs","Belgian Chocolate","Fondant Cakes","Dessert Tables"],items:[
    {label:"2-tier wedding cake (fondant, custom design)",icon:"fa-cake-candles",price:8000},
    {label:"3-tier wedding cake (premium fondant or buttercream)",icon:"fa-cake-candles",price:15000},
    {label:"Floral fresh cream birthday cake (1 kg)",icon:"fa-cake-candles",price:3500},
    {label:"Dessert table — 6 items for 50 guests",icon:"fa-utensils",price:18000},
    {label:"Cupcake tower (per 24 cupcakes, custom flavour)",icon:"fa-cake-candles",price:2800},
    {label:"Photo cake (edible print, 1 kg)",icon:"fa-cake-candles",price:2500},
  ]},
  {id:"ck2",name:"Mithai & More",type:"cake",eventTags:["wedding","religious","cultural"],location:"Karol Bagh, Delhi",img:"https://placehold.co/600x300/4a2000/ffc080?text=Mithai+and+More",provider:"Rajan Halwai",description:"Traditional Indian mithai and sweets for weddings, puja ceremonies and festivals — handmade laddoos, barfis, halwa and customised mithai boxes.",rating:"4.8",reviews:278,priceFrom:"\u20b9250/kg",color:"#4a2000",features:["Handmade Mithai","Custom Boxes","Bulk Orders","Delivery Pan-India"],items:[
    {label:"Mixed mithai box (500g, premium quality)",icon:"fa-gift",price:350},
    {label:"Custom branded mithai box (wedding favour, per 50 boxes)",icon:"fa-gift",price:12000},
    {label:"Motichoor laddoo (per kg)",icon:"fa-cake-candles",price:400},
    {label:"Kaju katli (per kg, premium)",icon:"fa-cake-candles",price:700},
    {label:"Besan barfi assortment (per kg)",icon:"fa-cake-candles",price:350},
    {label:"Halwa puri catering counter (per 100 portions)",icon:"fa-utensils",price:8000},
  ]},
  {id:"ck3",name:"The Gelato Garden",type:"cake",eventTags:["birthday","party","babyshower"],location:"Indiranagar, Bengaluru",img:"https://placehold.co/600x300/0a3a5a/80e0ff?text=The+Gelato+Garden",provider:"Lorenzo and Anita",description:"Artisanal gelato and dessert cart hire for outdoor events — 12 rotating flavours, vegan options, and custom cup printing.",rating:"4.7",reviews:167,priceFrom:"\u20b915,000",color:"#0a3a5a",features:["Gelato Cart Hire","12 Flavours","Vegan Options","Custom Cups"],items:[
    {label:"Gelato cart hire — 3 hours (4 flavours, 50 guests)",icon:"fa-ice-cream",price:15000},
    {label:"Gelato cart hire — 5 hours (8 flavours, 100 guests)",icon:"fa-ice-cream",price:22000},
    {label:"Custom printed gelato cups (per 50 cups)",icon:"fa-image",price:1500},
    {label:"Waffle cone station add-on",icon:"fa-utensils",price:5000},
    {label:"Vegan gelato selection (4 flavours)",icon:"fa-leaf",price:8000},
  ]},

  /* ========= TRANSPORT ========= */
  {id:"tr1",name:"Royal Rides Event Transport",type:"transport",eventTags:["wedding","corporate","engagement"],location:"Banjara Hills, Hyderabad",img:"https://placehold.co/600x300/1a1a00/f0e060?text=Royal+Rides+Event",provider:"Srinivas Reddy",description:"Luxury and vintage car rentals for weddings and events — white Mercedes, vintage Rolls-Royce replicas, Jaguar and SUV fleet for guests.",rating:"4.8",reviews:201,priceFrom:"\u20b98,000/day",color:"#1a1a00",features:["Luxury Cars","Vintage Cars","Decorated Fleet","Chauffeur Driven"],items:[
    {label:"Decorated white Mercedes for bride and groom (full day)",icon:"fa-car",price:18000},
    {label:"Vintage Rolls-Royce replica (4 hours, with chauffeur)",icon:"fa-car",price:25000},
    {label:"Guest shuttle — luxury coach (per day, 40 seats)",icon:"fa-bus",price:12000},
    {label:"Airport transfers for outstation guests (per car)",icon:"fa-plane",price:3000},
    {label:"Baraat horse and buggy (2 hours)",icon:"fa-horse",price:20000},
    {label:"Flower-decorated car for couple (non-AC vintage jeep)",icon:"fa-car",price:8000},
  ]},
  {id:"tr2",name:"EventBus Transport Co.",type:"transport",eventTags:["corporate","sports","concert"],location:"Powai, Mumbai",img:"https://placehold.co/600x300/0a2a1a/60f0a0?text=EventBus+Transport",provider:"Manoj Logistics",description:"Group event transport specialists — corporate shuttle services, marathon buses, venue transfers and chartered coaches for events.",rating:"4.5",reviews:134,priceFrom:"\u20b96,000/coach",color:"#0a2a1a",features:["Group Transport","AC Coaches","Real-time Tracking","Pan-India"],items:[
    {label:"AC luxury coach 45 seats (per day, within city)",icon:"fa-bus",price:12000},
    {label:"Mini bus 20 seats (per day)",icon:"fa-bus",price:7000},
    {label:"Marathon runner shuttle (per 50-km route)",icon:"fa-bus",price:8000},
    {label:"Airport charter bus (per trip, 45 seats)",icon:"fa-plane",price:9000},
    {label:"On-site valet parking management (per day, 100 cars)",icon:"fa-car",price:15000},
  ]},

  /* ========= ANCHORING & MC ========= */
  {id:"an1",name:"Voice of the Event",type:"anchoring",eventTags:["wedding","corporate","cultural"],location:"Andheri West, Mumbai",img:"https://placehold.co/600x300/1a003a/c080ff?text=Voice+of+the+Event",provider:"Rohit and Priyanka Sood",description:"Professional bilingual anchors and MCs for weddings, corporate galas and cultural programmes — Hindi, English, Marathi and Punjabi.",rating:"4.9",reviews:256,priceFrom:"\u20b915,000",color:"#1a003a",features:["Bilingual MC","Wedding Hosting","Corporate Events","Audience Engagement"],items:[
    {label:"Wedding anchor — full day (Hindi/English)",icon:"fa-microphone",price:25000},
    {label:"Corporate gala host (4 hours)",icon:"fa-microphone",price:20000},
    {label:"Sangeet and mehendi anchor (3 hours)",icon:"fa-microphone",price:15000},
    {label:"Awards night host with teleprompter",icon:"fa-microphone",price:22000},
    {label:"Cultural programme MC (regional language)",icon:"fa-microphone",price:12000},
  ]},
  {id:"an2ev",name:"StageKing Anchors",type:"anchoring",eventTags:["birthday","party","sports"],location:"Salt Lake, Kolkata",img:"https://placehold.co/600x300/003030/60f0e0?text=StageKing+Anchors",provider:"Debraj Mukherjee",description:"Energetic event anchors for birthday parties, sports tournaments, fun events and school/college programmes.",rating:"4.7",reviews:143,priceFrom:"\u20b98,000",color:"#003030",features:["Party Hosting","Games Facilitation","Sports Commentary","Youth Events"],items:[
    {label:"Birthday party host with interactive games (3 hours)",icon:"fa-microphone",price:8000},
    {label:"Sports day commentary and hosting (full day)",icon:"fa-microphone",price:15000},
    {label:"School or college event anchor (4 hours)",icon:"fa-microphone",price:10000},
    {label:"Trivia and quiz host for corporate fun events",icon:"fa-microphone",price:12000},
    {label:"Bilingual party anchor (Bengali/English)",icon:"fa-microphone",price:9000},
  ]},

  /* ========= SECURITY ========= */
  {id:"sec1",name:"Sentinel Event Security",type:"security",eventTags:["concert","corporate","wedding"],location:"Cyber City, Gurugram",img:"https://placehold.co/600x300/0a0a0a/80c0ff?text=Sentinel+Event+Security",provider:"Col. (Retd.) Arvind Singh",description:"Professional event security services with trained guards, crowd management experts and CCTV surveillance for large-scale events.",rating:"4.7",reviews:112,priceFrom:"\u20b98,000",color:"#0a0a0a",features:["Trained Guards","Crowd Management","CCTV","VIP Security"],items:[
    {label:"Security guard (per guard, per 8-hour shift)",icon:"fa-shield-halved",price:2500},
    {label:"Crowd management team (5 members, full day)",icon:"fa-people-group",price:15000},
    {label:"CCTV surveillance setup (per 4 cameras, per day)",icon:"fa-video",price:8000},
    {label:"VIP security escort (per person, per day)",icon:"fa-shield-halved",price:8000},
    {label:"Entry management with guest list verification",icon:"fa-id-badge",price:10000},
    {label:"Medical first aid team (2 paramedics, per day)",icon:"fa-kit-medical",price:12000},
  ]},

  /* ========= FLORAL & GARLANDS ========= */
  {id:"fl1",name:"Pushpa Floral Creations",type:"floral",eventTags:["wedding","religious","cultural"],location:"Mylapore, Chennai",img:"https://placehold.co/600x300/2a5a00/b0e060?text=Pushpa+Floral+Creations",provider:"Kamala Devi",description:"Fresh flower garlands, torans, floral jewellery and wholesale flower supply for weddings, puja ceremonies and cultural events.",rating:"4.9",reviews:389,priceFrom:"\u20b91,000",color:"#2a5a00",features:["Fresh Garlands","Flower Jewellery","Torans","Wholesale Flowers"],items:[
    {label:"Jasmine veni garland (bride, per metre)",icon:"fa-seedling",price:200},
    {label:"Rose and marigold wedding garland (per pair)",icon:"fa-seedling",price:1500},
    {label:"Marigold toran door decoration (per door)",icon:"fa-leaf",price:800},
    {label:"Floral jewellery set — necklace, earrings, maang tikka",icon:"fa-star",price:4000},
    {label:"Flower petal path decoration (per 20 ft)",icon:"fa-heart",price:1200},
    {label:"Wholesale fresh flowers — mixed season (per 100 stems)",icon:"fa-seedling",price:1800},
  ]},
  {id:"fl2",name:"Garden City Flowers",type:"floral",eventTags:["birthday","anniversary","babyshower"],location:"Indiranagar, Bengaluru",img:"https://placehold.co/600x300/1a4a00/a0f060?text=Garden+City+Flowers",provider:"Rahul and Shobha Nair",description:"Designer bouquets, flower walls, balloon and flower combos and event flower delivery across Bengaluru — same day delivery available.",rating:"4.7",reviews:234,priceFrom:"\u20b9800",color:"#1a4a00",features:["Designer Bouquets","Flower Walls","Same Day Delivery","Custom Arrangements"],items:[
    {label:"Designer flower bouquet (mixed seasonal, per arrangement)",icon:"fa-seedling",price:1500},
    {label:"Flower wall backdrop (4x4 ft, fresh or artificial)",icon:"fa-image",price:8000},
    {label:"Rose petal and candle romantic setup (per room)",icon:"fa-heart",price:5000},
    {label:"Flower centrepiece for dining table",icon:"fa-seedling",price:1200},
    {label:"Bridal bouquet (roses and peonies)",icon:"fa-heart",price:3000},
    {label:"Welcome wreath (door, fresh flowers)",icon:"fa-leaf",price:1800},
  ]},

  /* ========= PHOTO BOOTH ========= */
  {id:"pb1",name:"Click & Snap Photo Booth",type:"photobooth",eventTags:["wedding","birthday","corporate"],location:"Koramangala, Bengaluru",img:"https://placehold.co/600x300/003060/80d0ff?text=Click+and+Snap+Photo+Booth",provider:"Rohan Click Co.",description:"360-degree video booths, GIF photo booths and retro print booths for weddings, corporate events and parties — unlimited prints included.",rating:"4.8",reviews:278,priceFrom:"\u20b915,000",color:"#003060",features:["360 Video Booth","GIF Booth","Instant Prints","Custom Overlays"],items:[
    {label:"360-degree slow-motion video booth (4 hours, unlimited)",icon:"fa-video",price:25000},
    {label:"GIF photo booth (4 hours, unlimited sessions)",icon:"fa-camera",price:15000},
    {label:"Retro instant print booth (4 hours, 200 prints)",icon:"fa-image",price:18000},
    {label:"Magic mirror selfie booth (4 hours)",icon:"fa-image",price:20000},
    {label:"Custom photo overlay with couple/brand name",icon:"fa-image",price:2000},
    {label:"Themed prop box (per event)",icon:"fa-gift",price:3000},
  ]},
  {id:"pb2",name:"Polaroid Moments",type:"photobooth",eventTags:["birthday","babyshower","anniversary"],location:"Bandra West, Mumbai",img:"https://placehold.co/600x300/2a001a/ff90d0?text=Polaroid+Moments",provider:"Jia and Karan Patel",description:"Vintage Polaroid and photo strip booth hire for intimate events — printed memories you can take home instantly.",rating:"4.7",reviews:156,priceFrom:"\u20b910,000",color:"#2a001a",features:["Polaroid Prints","Photo Strips","Vintage Style","Guest Guestbook"],items:[
    {label:"Polaroid photo booth (3 hours, 100 prints)",icon:"fa-camera",price:10000},
    {label:"Photo strip booth (4 hours, 150 strips)",icon:"fa-image",price:12000},
    {label:"Guestbook album — guests stick polaroids and write notes",icon:"fa-book",price:3000},
    {label:"Extra print packs (per 50 photos)",icon:"fa-image",price:1500},
    {label:"Digital copy add-on (all booth images)",icon:"fa-globe",price:2500},
  ]},

  /* ========= ENTERTAINMENT ========= */
  {id:"en1svc",name:"Magic Circle Entertainers",type:"entertainment",eventTags:["birthday","babyshower","party"],location:"Andheri East, Mumbai",img:"https://placehold.co/600x300/0a2a3a/60d0f0?text=Magic+Circle+Entertainers",provider:"The Magic Circle Team",description:"Professional entertainers for kids and adult events — magicians, clowns, puppeteers, balloon artists and caricature artists.",rating:"4.9",reviews:412,priceFrom:"\u20b96,000",color:"#0a2a3a",features:["Magicians","Clowns","Balloon Artists","Caricature Artists"],items:[
    {label:"Magician show (45 minutes, up to 50 kids)",icon:"fa-wand-magic-sparkles",price:8000},
    {label:"Clown with face painting and balloon twisting (2 hours)",icon:"fa-masks-theater",price:6000},
    {label:"Caricature artist (per hour, per artist)",icon:"fa-pen-nib",price:5000},
    {label:"Balloon sculpting artist (2 hours, unlimited balloons)",icon:"fa-star",price:7000},
    {label:"Puppet show (30 mins, custom character)",icon:"fa-masks-theater",price:9000},
    {label:"Fire dancer (outdoor events only, 30 min show)",icon:"fa-fire",price:15000},
  ]},
  {id:"en2svc",name:"Laughter Factory",type:"entertainment",eventTags:["corporate","party","concert"],location:"Connaught Place, Delhi",img:"https://placehold.co/600x300/1a1a3a/8080ff?text=Laughter+Factory",provider:"Laughter Factory Productions",description:"Stand-up comedians, improv troupes and corporate comedy for events — line-ups from 5-minute sets to 90-minute headline shows.",rating:"4.8",reviews:198,priceFrom:"\u20b920,000",color:"#1a1a3a",features:["Stand-up Comedy","Improv Shows","Corporate Safe","Celebrity Acts"],items:[
    {label:"Stand-up comedian (30-minute set)",icon:"fa-microphone",price:20000},
    {label:"Stand-up comedian (60-minute headline set)",icon:"fa-microphone",price:40000},
    {label:"Improv troupe show (45 minutes, 4 performers)",icon:"fa-masks-theater",price:30000},
    {label:"Corporate roast/satire segment (customised, 20 mins)",icon:"fa-microphone",price:25000},
    {label:"Mentalist/mind reader act (45 minutes)",icon:"fa-eye",price:35000},
  ]},
  {id:"en3svc",name:"Dance India Dance Shows",type:"entertainment",eventTags:["wedding","cultural","party"],location:"Salt Lake, Kolkata",img:"https://placehold.co/600x300/3a0a2a/ff80e0?text=Dance+India+Dance+Shows",provider:"Mithun Dance Academy",description:"Professional Bollywood, folk and fusion dance troupes for wedding receptions, corporate events and cultural shows.",rating:"4.7",reviews:167,priceFrom:"\u20b920,000",color:"#3a0a2a",features:["Bollywood Dance","Folk Troupes","Fusion Shows","Custom Choreography"],items:[
    {label:"Bollywood dance troupe — 4 dancers (20-min show)",icon:"fa-masks-theater",price:20000},
    {label:"Rajasthani folk dance — 6 dancers (30-min show)",icon:"fa-masks-theater",price:28000},
    {label:"Fusion Bollywood-Bhangra show (45 mins, 8 dancers)",icon:"fa-masks-theater",price:40000},
    {label:"Custom choreography for couple's first dance",icon:"fa-heart",price:15000},
    {label:"Flash mob surprise performance (10 dancers, 5 mins)",icon:"fa-wand-magic-sparkles",price:25000},
  ]},
];

let activeServiceType="all";
let currentMode="packages";

function switchMode(mode){
  currentMode=mode;
  document.getElementById('modePackages').classList.toggle('active',mode==='packages');
  document.getElementById('modeIndividual').classList.toggle('active',mode==='individual');
  if(mode==='packages'){
    document.getElementById('individualView').style.display='none';
    document.getElementById('indDetailView').style.display='none';
    document.getElementById('vendorGrid').style.display='block';
    document.getElementById('pkgView').style.display='none';
    renderCats();renderVendors();
  } else {
    document.getElementById('individualView').style.display='block';
    document.getElementById('indDetailView').style.display='none';
    document.getElementById('vendorGrid').style.display='none';
    document.getElementById('pkgView').style.display='none';
    activeServiceType='all';
    renderIndividualCats();renderIndividualCards();
  }
}

function getIndByType(type){
  if(type==='all')return individualServices;
  return individualServices.filter(s=>s.type===type);
}

function getIndByCategory(eventCat,type){
  let list=individualServices;
  if(eventCat!=='all') list=list.filter(s=>s.eventTags.includes(eventCat));
  if(type&&type!=='all') list=list.filter(s=>s.type===type);
  return list;
}

function renderIndividualCats(){
  const cat=eventCategories.find(c=>c.id===activeCat);
  const allForCat=getIndByCategory(activeCat,'all');
  document.getElementById('indHeading').innerHTML=
    `<i class="fa-solid ${cat.icon}" style="color:var(--teal);margin-right:10px;font-size:22px;"></i>${cat.name} <span style="color:var(--teal);">Individual Services</span>`;
  document.getElementById('indMeta').textContent=
    `${allForCat.length} independent service provider${allForCat.length!==1?'s':''} \u00b7 Click any card to view services`;
  const availableTypes=serviceTypes.map(t=>{
    const count=t.id==='all'?allForCat.length:getIndByCategory(activeCat,t.id).length;
    return {...t,count};
  }).filter(t=>t.count>0);
  const bar=document.getElementById('svcTypeBar');
  bar.innerHTML=availableTypes.map(t=>`
    <button class="svc-type-pill${t.id===activeServiceType?' active':''}" data-type="${t.id}">
      <i class="fa-solid ${t.icon}"></i> ${t.name}<span class="pill-count">${t.count}</span>
    </button>`).join('');
  bar.querySelectorAll('.svc-type-pill').forEach(b=>b.addEventListener('click',()=>{
    activeServiceType=b.dataset.type;
    renderIndividualCats();
    renderIndividualCards();
  }));
}

function renderIndividualCards(){
  const list=getIndByCategory(activeCat,activeServiceType);
  const container=document.getElementById('indCards');
  if(!list.length){
    container.innerHTML=`<div class="empty" style="grid-column:1/-1;"><div class="empty-icon"><i class="fa-solid fa-puzzle-piece"></i></div><h3>No providers found</h3><p>Try a different filter or category.</p></div>`;
    return;
  }
  container.innerHTML=list.map((s,i)=>{
    const typeName=serviceTypes.find(t=>t.id===s.type)?.name||s.type;
    const typeIcon=serviceTypes.find(t=>t.id===s.type)?.icon||'fa-star';
    return `<div class="prov-card" data-svcid="${s.id}" style="animation-delay:${i*50}ms;">
      <div class="prov-img-wrap">
        <img src="${s.img}" alt="${s.name}" loading="lazy"/>
        <div class="prov-type-badge" style="background:${s.color||'var(--teal)'};">
          <i class="fa-solid ${typeIcon}" style="margin-right:5px;"></i>${typeName}
        </div>
        <div class="prov-item-count"><i class="fa-solid fa-list" style="font-size:10px;margin-right:4px;"></i>${s.items.length} service${s.items.length!==1?'s':''}</div>
      </div>
      <div class="prov-body">
        <div class="prov-type-label">${typeName}</div>
        <div class="prov-name">${s.name}</div>
        <div class="prov-by"><i class="fa-solid fa-user-tie"></i>${s.provider}</div>
        <div class="prov-desc">${s.description}</div>
        <div class="prov-rating"><span class="stars">${fmtStars(s.rating)}</span><span class="rating-num">${s.rating}</span><span style="color:var(--ink3);font-size:12px;">(${s.reviews} reviews)</span></div>
        <div class="prov-location"><i class="fa-solid fa-location-dot"></i>${s.location}</div>
        <div class="prov-footer">
          <div class="prov-price">From <strong>${s.priceFrom}</strong></div>
          <div class="prov-cta">View services <i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>
    </div>`;
  }).join('');
  container.querySelectorAll('.prov-card').forEach(c=>c.addEventListener('click',()=>openIndProvider(c.dataset.svcid)));
}

function openIndProvider(svcId){
  const svc=individualServices.find(s=>s.id===svcId);
  if(!svc)return;
  const typeName=serviceTypes.find(t=>t.id===svc.type)?.name||svc.type;
  const typeIcon=serviceTypes.find(t=>t.id===svc.type)?.icon||'fa-star';
  document.getElementById('indProviderName').textContent=svc.name;
  document.getElementById('indProviderMeta').innerHTML=
    `<i class="fa-solid ${typeIcon}" style="color:var(--teal);margin-right:6px;"></i><strong>${typeName}</strong>`+
    ` &bull; <i class="fa-solid fa-user-tie" style="color:var(--teal);margin:0 4px 0 10px;"></i>${svc.provider}`+
    ` &bull; <i class="fa-solid fa-star" style="color:#d4a017;margin:0 3px 0 10px;"></i>${svc.rating} (${svc.reviews} reviews)`;
  document.getElementById('indProviderLoc').innerHTML=
    `<i class="fa-solid fa-location-dot"></i><span>${svc.location}</span>`;
  const iconColors=['#2d9da8','#8b1a2b','#c9952a','#2d6a9a','#6a2d8b','#2d8b4a','#8b6a2d','#4a2d8b'];
  document.getElementById('indTableBody').innerHTML=svc.items.map((item,i)=>{
    const bgColor=iconColors[i%iconColors.length];
    const allFeats=[...svc.features];
    return `<tr>
      <td class="td-ind-svc">
        <div class="ind-svc-icon-wrap" style="background:${bgColor}18;border:1.5px solid ${bgColor}35;">
          <i class="fa-solid ${item.icon}" style="color:${bgColor};font-size:22px;"></i>
        </div>
        <div class="ind-svc-title">${item.label}</div>
        <div class="ind-svc-price">${fmtMoney(item.price)}</div>
        <div class="ind-svc-price-note">per booking / unit</div>
      </td>
      <td class="ind-svc-features">
        <ul>
          <li><i class="fa-solid fa-store"></i>${svc.name}</li>
          <li><i class="fa-solid fa-user-tie"></i>${svc.provider}</li>
          ${allFeats.map(f=>`<li><i class="fa-solid fa-check"></i>${f}</li>`).join('')}
          <li><i class="fa-solid fa-location-dot"></i>${svc.location}</li>
          <li><i class="fa-solid fa-star" style="color:#d4a017;"></i>Rated ${svc.rating} &middot; ${svc.reviews} reviews</li>
        </ul>
      </td>
      <td class="td-ind-book">
        <div class="rev-stars-row">${fmtStars(svc.rating)}</div>
        <div class="rev-score">${svc.rating}</div>
        <div class="rev-count"><i class="fa-regular fa-comment-dots" style="margin-right:4px;color:var(--ink3);"></i>${svc.reviews} reviews</div>
        <button class="ind-book-now-btn" onclick="openSingleItemModal('${svc.id}',${i},false)">
          <i class="fa-solid fa-calendar-check"></i> Book Now
        </button>
        <button class="ind-custom-now-btn" onclick="openSingleItemModal('${svc.id}',${i},true)">
          <i class="fa-solid fa-pen-nib"></i> Customise
        </button>
      </td>
    </tr>`;
  }).join('');
  document.getElementById('individualView').style.display='none';
  document.getElementById('indDetailView').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}

function openSingleItemModal(svcId,itemIdx,customiseOnly){
  const svc=individualServices.find(s=>s.id===svcId);
  if(!svc)return;
  const item=svc.items[itemIdx];
  const typeName=serviceTypes.find(t=>t.id===svc.type)?.name||svc.type;
  currentIndData={svc,itemIdx,isIndividual:true};
  currentBookingData=null;
  document.getElementById('bookingForm').style.display='block';
  document.getElementById('successScreen').style.display='none';
  document.getElementById('bLabel').textContent=typeName+' \u2014 Individual Service';
  document.getElementById('bName').textContent=item.label;
  document.getElementById('bSub').textContent=svc.name+' \u00b7 '+svc.provider+(customiseOnly?' \u00b7 Describe your requirements below':'');
  const today=new Date(),minDate=new Date(today.getTime()+7*24*60*60*1000);
  const dateEl=document.getElementById('eventDate');
  dateEl.value='';dateEl.min=minDate.toISOString().split('T')[0];dateEl.classList.remove('error');
  document.getElementById('dateErrMsg').style.display='none';
  document.getElementById('dateHint').style.display='flex';
  document.getElementById('eventTime').value='';
  document.getElementById('customNote').value='';
  document.getElementById('customNote').placeholder=customiseOnly
    ?'Describe your customisation \u2014 colours, quantity, timing, special requirements...'
    :'Any special requirements or additional notes (optional)...';
  // Pre-check this item; show all items from same provider so user can add more
  document.getElementById('svcTableBody').innerHTML=svc.items.map((it,i)=>`
    <tr><td><label class="svc-row-label" for="scb_${i}">
      <input type="checkbox" class="svc-cb" id="scb_${i}" data-price="${it.price}" data-label="${it.label}"${i===itemIdx?' checked':''}/>
      <i class="fa-solid ${it.icon} svc-icon"></i>${it.label}
    </label></td><td>${fmtMoney(it.price)}</td></tr>`).join('');
  document.querySelectorAll('.svc-cb').forEach(cb=>cb.addEventListener('change',updateEstimate));
  if(customiseOnly) setTimeout(()=>document.getElementById('customNote').focus(),400);
  updateEstimate();
  document.getElementById('bookingOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

let currentIndData=null;

function openIndModal(svcId, customiseOnly){
  const svc=individualServices.find(s=>s.id===svcId);
  if(!svc)return;
  currentIndData={svc,isIndividual:true};
  // reuse existing booking modal
  document.getElementById('bookingForm').style.display='block';
  document.getElementById('successScreen').style.display='none';
  document.getElementById('bLabel').textContent=serviceTypes.find(t=>t.id===svc.type)?.name||svc.type;
  document.getElementById('bName').textContent=svc.name;
  document.getElementById('bSub').textContent=svc.provider+' \u00b7 '+svc.location+(customiseOnly?' \u00b7 Describe your custom requirements below':'');
  const today=new Date(),minDate=new Date(today.getTime()+7*24*60*60*1000);
  const dateEl=document.getElementById('eventDate');
  dateEl.value='';dateEl.min=minDate.toISOString().split('T')[0];dateEl.classList.remove('error');
  document.getElementById('dateErrMsg').style.display='none';
  document.getElementById('dateHint').style.display='flex';
  document.getElementById('eventTime').value='';
  document.getElementById('customNote').value='';
  document.getElementById('svcTableBody').innerHTML=svc.items.map((item,i)=>`
    <tr><td><label class="svc-row-label" for="icb_${i}"><input type="checkbox" class="svc-cb" id="icb_${i}" data-price="${item.price}" data-label="${item.label}"/><i class="fa-solid ${item.icon} svc-icon"></i>${item.label}</label></td><td>${fmtMoney(item.price)}</td></tr>`).join('');
  if(customiseOnly){
    document.getElementById('customNote').placeholder='Describe your customisation — e.g. specific colours, quantity, timing, special requests, preferences...';
    document.getElementById('customNote').focus();
  } else {
    document.getElementById('customNote').placeholder="Add any special requirements or customisations (optional)...";
  }
  document.querySelectorAll('.svc-cb').forEach(cb=>cb.addEventListener('change',updateEstimate));
  updateEstimate();
  document.getElementById('bookingOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function handleSubmit(){
  if(currentIndData&&currentIndData.isIndividual){
    const checked=[...document.querySelectorAll('.svc-cb:checked')];
    const total=checked.reduce((s,c)=>s+parseInt(c.dataset.price),0);
    const svc=currentIndData.svc;
    const dateVal=document.getElementById('eventDate').value;
    const timeVal=document.getElementById('eventTime').value;
    const customNote=document.getElementById('customNote').value.trim();
    const reqId='REQ-'+Date.now().toString(36).toUpperCase();
    const typeName=serviceTypes.find(t=>t.id===svc.type)?.name||svc.type;
    const newReq={id:reqId,vendorName:svc.name,packageTitle:typeName+' — '+svc.provider,vendorBadge:'Individual Service',
      eventDate:dateVal,eventDateDisplay:fmtDate(dateVal),eventTime:timeVal,eventTimeDisplay:fmtTime(timeVal),
      services:checked.map(c=>({label:c.dataset.label,price:parseInt(c.dataset.price)})),total,customNote,
      status:'pending',submittedAt:new Date().toISOString(),category:'individual_'+svc.type};
    myRequests.unshift(newReq);saveRequests();updateReqBadge();
    document.getElementById('successSummary').innerHTML=
      `<div class="sum-row"><span>Request ID</span><span><strong style="color:var(--teal);">${reqId}</strong></span></div>`+
      `<div class="sum-row"><span>Status</span><span><strong style="color:var(--pending);">\u23f3 Pending Review</strong></span></div>`+
      `<div class="sum-row"><span>Service Provider</span><span><strong>${svc.name}</strong></span></div>`+
      `<div class="sum-row"><span>Service Type</span><span><strong>${typeName}</strong></span></div>`+
      `<div class="sum-row"><span><i class="fa-regular fa-calendar" style="color:var(--teal);margin-right:5px;"></i>Event Date</span><span><strong>${fmtDate(dateVal)}</strong></span></div>`+
      `<div class="sum-row"><span><i class="fa-regular fa-clock" style="color:var(--teal);margin-right:5px;"></i>Start Time</span><span><strong>${fmtTime(timeVal)}</strong></span></div>`+
      (customNote?`<div class="sum-row"><span><i class="fa-solid fa-pen-nib" style="color:var(--teal);margin-right:5px;"></i>Custom Note</span><span style="font-style:italic;color:var(--ink3);max-width:200px;text-align:right;">${customNote.substring(0,80)}${customNote.length>80?'\u2026':''}</span></div>`:'')+
      checked.map(c=>`<div class="sum-row"><span>${c.dataset.label.substring(0,40)}${c.dataset.label.length>40?'\u2026':''}</span><span>${fmtMoney(parseInt(c.dataset.price))}</span></div>`).join('')+
      `<div class="sum-row total"><span><strong>Estimated Total</strong></span><span><strong>${fmtMoney(total)}</strong></span></div>`;
    document.getElementById('bookingForm').style.display='none';
    const ss=document.getElementById('successScreen');ss.style.display='flex';ss.style.flexDirection='column';
    currentIndData=null;
    currentBookingData=null;
  } else {
    submitBooking();
  }
}

renderServicesGrid();renderCats();renderVendors();updateReqBadge();



// --------------user menu and dropdown logic--------------//

function toggleDropdown(id) {
  closeAll();
  let el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function toggleUserMenu() {
  closeAll();
  let menu = document.getElementById("userDropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectOption(el) {
  let btn = el.parentElement.previousElementSibling;
  btn.innerText = el.innerText + " ⌄";
  el.parentElement.style.display = "none";
}

function logout() {
  const userConfirmed = confirm("Are you sure you want to log out?");
  if (userConfirmed) {
    sessionStorage.removeItem('currentUser');
    alert("You have successfully logged out!");
    window.location.href = "../index.html";
  }
}

function changePassword() {
  alert("Change Password feature coming soon!\n\nYou will be able to change your password by:\n1. Verifying your current password\n2. Setting a new password\n3. Confirming the new password");
}

/* Close all dropdowns */
function closeAll() {
  document.querySelectorAll(".dropdown-content, .user-dropdown")
    .forEach(d => d.style.display = "none");
}

window.onclick = function(e) {
  if (!e.target.closest('.dropdown') && !e.target.closest('.user-menu')) {
    closeAll();
  }
}
