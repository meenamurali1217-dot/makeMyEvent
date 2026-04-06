// Search bar functionality (Simple alert for demo)
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert('Searching for: ' + this.value);
    }
});



/* =========================================
   LOGOUT FUNCTIONALITY
   ========================================= */
function confirmLogout() {
    // 1. Show Confirmation Dialog
    const userConfirmed = confirm("Do you want to log out?");

    // 2. If User clicks "Yes" (OK)
    if (userConfirmed) {
        // Show Success Message
        alert("You logged out of the website.");

        // NAVBAR: Hide User Name, Show Login/Register Buttons
        document.getElementById('nav-logged-in').style.display = 'none';
        document.getElementById('nav-logged-out').style.display = 'flex';

        // SIDEBAR: Hide Logout Link, Show Login/Register Links
        document.getElementById('sidebar-logged-in').style.display = 'none';
        document.getElementById('sidebar-logged-out').style.display = 'block';

        // SIDEBAR HEADER: Update Name to Guest
        const sidebarUser = document.getElementById('sidebar-username');
        if(sidebarUser) {
            sidebarUser.innerText = "Guest User";
        }
    }
}


// Select all card links
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page jump
    console.log(`Clicked: ${this.textContent}`);
    alert(`You clicked: "${this.textContent}"`);
  });
});




// CARD SLIDER FUNCTIONALITY

const container = document.getElementById("cardContainer");

document.querySelector(".next").addEventListener("click", () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelector(".prev").addEventListener("click", () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
});

/* NAVBAR SHOW/HIDE */
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }

  lastScroll = currentScroll;
});


 /* ─── DATA ──────────────────────────────────────────────────── */
    const services = [
      {
        id: "photography",
        title: "Photography",
        subtitle: "Top Booked Photographers",
        label: "PHOTOGRAPHY",
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=560&q=80",
        vendors: [
          { name: "Lens & Light", sub: "Wedding · Portrait", price: "₹18,000", rating: "★★★★★", initials: "LL" },
          { name: "Click Studio", sub: "Events · Corporate", price: "₹12,500", rating: "★★★★☆", initials: "CS" },
          { name: "Frame Works", sub: "Fashion · Product", price: "₹9,000", rating: "★★★★★", initials: "FW" },
          { name: "Golden Hour", sub: "Outdoor · Travel", price: "₹15,000", rating: "★★★★☆", initials: "GH" },
          { name: "Pixel Pro", sub: "Corporate · Events", price: "₹8,500", rating: "★★★★★", initials: "PP" },
          { name: "Shutter Co.", sub: "Wedding · Portrait", price: "₹21,000", rating: "★★★★★", initials: "SC" },
          { name: "VisionCraft", sub: "Product · Fashion", price: "₹11,000", rating: "★★★★☆", initials: "VC" },
        ]
      },
      {
        id: "catering",
        title: "Catering",
        subtitle: "Most Opted Caterers",
        label: "CATERING",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=560&q=80",
        vendors: [
          { name: "Spice Route", sub: "Multi-cuisine", price: "₹650/plate", rating: "★★★★★", initials: "SR" },
          { name: "Flavour Nest", sub: "Continental", price: "₹800/plate", rating: "★★★★☆", initials: "FN" },
          { name: "Royal Feast", sub: "Indian · Mughal", price: "₹950/plate", rating: "★★★★★", initials: "RF" },
          { name: "Taste Buds", sub: "Street · Fusion", price: "₹450/plate", rating: "★★★★☆", initials: "TB" },
          { name: "Chef's Table", sub: "Fine Dining", price: "₹1,200/plate", rating: "★★★★★", initials: "CT" },
          { name: "Zest Kitchen", sub: "Vegan · Healthy", price: "₹550/plate", rating: "★★★★★", initials: "ZK" },
        ]
      },
      {
        id: "decor",
        title: "Decor & Florals",
        subtitle: "Featured Decorators",
        label: "DÉCOR",
        badge: "New",
        image: "https://images.unsplash.com/photo-1478146059778-26028b07d8af?w=560&q=80",
        vendors: [
          { name: "Bloom Studio", sub: "Floral · Bohemian", price: "₹35,000", rating: "★★★★★", initials: "BS" },
          { name: "Eden Decor", sub: "Luxury · Weddings", price: "₹60,000", rating: "★★★★☆", initials: "ED" },
          { name: "Petal & Pine", sub: "Garden · Outdoor", price: "₹28,000", rating: "★★★★★", initials: "PP" },
          { name: "Luxe Drapes", sub: "Fabric · Canopy", price: "₹45,000", rating: "★★★★☆", initials: "LD" },
          { name: "ColorWave", sub: "Balloons · Theme", price: "₹18,000", rating: "★★★★★", initials: "CW" },
          { name: "The Arch Co.", sub: "Arch · Floral", price: "₹22,000", rating: "★★★★★", initials: "AC" },
          { name: "Greenery Lab", sub: "Plants · Earthy", price: "₹30,000", rating: "★★★★☆", initials: "GL" },
        ]
      }
    ];

    /* ─── RENDER ────────────────────────────────────────────────── */
    const container = document.getElementById('sections-container');

    services.forEach(svc => {
      const section = document.createElement('section');
      section.className = 'service-section';
      section.dataset.id = svc.id;

      const cardsHTML = svc.vendors.map(v => `
        <div class="vendor-card" onclick="handleBook('${svc.id}','${v.name}')">
          <div class="vendor-avatar-placeholder">${v.initials}</div>
          <div class="vendor-arrow">
            <div class="arrow-line"><span></span><span></span><span></span></div>
            <div class="arrow-head"></div>
          </div>
          <div class="vendor-name">${v.name}</div>
          <div class="vendor-sub">${v.sub}</div>
          <div class="vendor-price-label">Starting @</div>
          <div class="vendor-price">${v.price}*</div>
          <div class="vendor-rating">${v.rating}</div>
          <button class="btn-book">Book Now</button>
        </div>
      `).join('');

      section.innerHTML = `
        <div class="service-image">
          <img src="${svc.image}" alt="${svc.title}" loading="lazy"/>
          <div class="label-overlay"><h2>${svc.label}</h2></div>
          <div class="badge">${svc.badge}</div>
        </div>
        <div class="service-right">
          <div class="section-title">${svc.subtitle}</div>
          <div class="section-sub">Scroll to explore more vendors →</div>
          <div class="scroll-track-wrap">
            <div class="scroll-track" id="track-${svc.id}">${cardsHTML}</div>
          </div>
          <div class="scroll-arrows">
            <button class="arrow-btn" onclick="scrollTrack('${svc.id}',-1)" title="Scroll left">&#8592;</button>
            <button class="arrow-btn" onclick="scrollTrack('${svc.id}', 1)" title="Scroll right">&#8594;</button>
          </div>
        </div>
      `;

      container.appendChild(section);
    });

    /* ─── SCROLL FUNCTION ───────────────────────────────────────── */
    function scrollTrack(id, dir) {
      const track = document.getElementById('track-' + id);
      track.scrollBy({ left: dir * 220, behavior: 'smooth' });
    }

    /* ─── BOOK HANDLER ──────────────────────────────────────────── */
    function handleBook(service, vendor) {
      // Replace with your real booking logic
      const toast = document.createElement('div');
      toast.textContent = `✓ Enquiry sent to ${vendor}!`;
      Object.assign(toast.style, {
        position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%) translateY(16px)',
        background: '#1a1208', color: '#e8b84b', padding: '12px 28px',
        borderRadius: '100px', fontFamily: "'DM Sans',sans-serif", fontSize: '.9rem',
        fontWeight: '600', boxShadow: '0 8px 32px rgba(0,0,0,.25)', zIndex: 9999,
        opacity: 0, transition: 'opacity .3s, transform .3s'
      });
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = 1; toast.style.transform = 'translateX(-50%) translateY(0)';
      });
      setTimeout(() => {
        toast.style.opacity = 0;
        setTimeout(() => toast.remove(), 400);
      }, 2500);
    }

    /* ─── INTERSECTION OBSERVER (entrance animation) ───────────── */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-section').forEach(s => observer.observe(s));
  