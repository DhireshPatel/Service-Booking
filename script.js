import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const menutoggle = document.getElementById("menutoggle")

const firebaseConfig = {
  apiKey: "AIzaSyAHbCJ62yireBJyMyYihpT_YzSnRb9ohSk",
  authDomain: "service-booking-01.firebaseapp.com",
  projectId: "service-booking-01",
  storageBucket: "service-booking-01.firebasestorage.app",
  messagingSenderId: "572071349111",
  appId: "1:572071349111:web:5cce26e3f8957cabd72f72"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// DATA 
const CATEGORIES = [
  {
    id: 'fan',

    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>',

    name: 'Fan Services',
    services: [
      {
        id: 1,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>',

        name: 'Ceiling Fan Installation',
        desc: 'Install new ceiling fans with full wiring, mounting, and safety checks.',
        price: 199,
        duration: '45-60 min'
      },
      {
        id: 2,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>',

        name: 'Exhaust Fan Installation',
        desc: 'Install bathroom/kitchen exhaust fans with proper ventilation wiring',
        price: 199,
        duration: '30-60 min'
      },
    ]
  },
  {
    id: 'ac',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>',
    name: 'AC & Cooling',
    services: [
      {
        id: 3,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>',

        name: 'AC Washing and Cleaning ',
        desc: 'Dedicated power line and wiring installation for air conditioners and heavy appliances.',
        price: 899,
        duration: '1-2 hrs'
      },
      {
        id: 4,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>',

        name: 'AC Installation ',
        desc: 'Electrical support for AC mounting, earthing, and dedicated circuit setup.',
        price: 799,
        duration: '1-2 hrs'
      },
    ]
  },
  {
    id: 'lighting',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    name: 'Lighting',
    services: [
      {
        id: 5,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',

        name: 'Bulb holder installation',
        desc: 'Install ceiling lights, chandeliers, LEDs, or any light fixture safely and professionally.',
        price: 69,
        duration: '1-2 hrs'
      },
      {
        id: 6,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
        name: 'LED Tube light installation',
        desc: 'Weatherproof outdoor light installation, pathway lights, and garden setups.',
        price: 69,
        duration: '1-2 hrs'
      },
      {
        id: 7,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>',
        name: 'Decorative lights installation (per 5m)',
        desc: 'Weatherproof outdoor light installation, pathway lights, and garden setups.',
        price: 99,
        duration: '1-2 hrs'
      },
    ]
  },
  {
    id: 'wiring',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable-icon lucide-cable"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"/><path d="M17 21v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"/><path d="M21 21v-2"/><path d="M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"/><path d="M7 5V3"/></svg>',
    name: 'Wiring & Electrical',
    services: [
      {
        id: 8,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug-icon lucide-plug"><path d="M12 22v-5"/><path d="M15 8V2"/><path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z"/><path d="M9 8V2"/></svg>',
        name: 'Switch Board installation',
        desc: 'Fix or replace faulty power outlets, USB ports, and electrical sockets in your home.',
        price: 139,
        duration: '30-60 min'
      },
      {
        id: 9,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plug-zap-icon lucide-plug-zap"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg>',
        name: 'New Home Wiring installation (per 5m)',
        desc: 'Upgrade your main electrical panel for higher capacity, safety, and modern appliances.',
        price: `149`,
        duration: '3-5 hrs'
      },
      {
        id: 10,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-construction-icon lucide-construction"><rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M17 3v3"/><path d="M7 3v3"/><path d="M10 14 2.3 6.3"/><path d="m14 6 7.7 7.7"/><path d="m8 6 8 8"/></svg>',
        name: 'Earthing installation',
        desc: 'Full or partial home rewiring for new construction or older homes needing upgrades.',
        price: 1899,
        duration: '3-4 hrs'
      },
    ]
  },
  {
    id: 'power',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
    name: 'RO - Water Purifier ',
    services: [
      {
        id: 11,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
        name: 'RO Water Purifier Installation',
        desc: 'Professional installation of home inverters, UPS systems, and battery backups.',
        price: 399,
        duration: '2-3 hrs'
      },
      {
        id: 12,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>',
        name: 'Compelte RO service',
        desc: 'Complete solar panel electrical wiring, connection, and system integration services.',
        price: 1499,
        duration: '4-6 hrs'
      },
    ]
  },
  {
    id: 'TV',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal-icon lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>',
    name: 'TV SERVICES',
    services: [
      {
        id: 13,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal-icon lucide-tv-minimal"><path d="M7 21h10"/><rect width="20" height="14" x="2" y="3" rx="2"/></svg>',
        name: 'TV installation',
        desc: 'Power connections, cable management, and electrical work for CCTV / security camera systems.',
        price: 1099,
        duration: '2-3 hrs'
      },
    ]
  },
  {
    id: 'Geyser',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"><path d="M12 2v2"/><path d="M12 8a4 4 0 0 0-1.645 7.647"/><path d="M2 12h2"/><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4.93 4.93 1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/></svg>',
    name: 'Geyser',
    services: [
      {
        id: 14,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-sun-icon lucide-thermometer-sun"><path d="M12 2v2"/><path d="M12 8a4 4 0 0 0-1.645 7.647"/><path d="M2 12h2"/><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/><path d="m4.93 4.93 1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/></svg>',
        name: 'Geyser installation',
        desc: 'Power connections, cable management, and electrical work for CCTV / security camera systems.',
        price: 399,
        duration: '2-3 hrs'
      },
    ]
  },
];


menutoggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
})



// Flat list for search
const ALL_SERVICES = CATEGORIES.flatMap(cat =>
  cat.services.map(s => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
);

let cart = [];



window.addEventListener('DOMContentLoaded', () => {

  const savedCart = localStorage.getItem('cart');

  if (savedCart) {
    cart = JSON.parse(savedCart);
  }

  renderCart();
  updateCartBadge();

});








// PAGE NAVIGATION 
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  if (page === 'home') {
    document.getElementById('homePage').classList.add('active');
    document.querySelectorAll('.nav-link')[0].classList.add('active');
    clearSearch();
  } else if (page === 'cart') {
    document.getElementById('cartPage').classList.add('active');
    document.querySelectorAll('.nav-link')[1].classList.add('active');
    renderCart();
  } else if (page === 'about') {
    document.getElementById('aboutPage').classList.add('active');
    document.querySelectorAll('.nav-link')[1].classList.add('active');
    renderCart();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// RENDER CATEGORIES 
function renderCategories() {
  const section = document.getElementById('servicesSection');
  section.innerHTML = `
        <div class="section-header">
            <div class="section-title">Our Services</div>
            <div class="section-line"></div>
        </div>
        ${CATEGORIES.map(cat => `
            <div class="category-block" id="cat-${cat.id}">
                <div class="category-header">
                    <span class="category-icon">${cat.icon}</span>
                    <span class="category-name">${cat.name}</span>
                    <span class="category-count">${cat.services.length} service${cat.services.length > 1 ? 's' : ''}</span>
                </div>
                <div class="services-grid" id="grid-${cat.id}">
                    ${cat.services.map(s => renderServiceCard(s)).join('')}
                </div>
            </div>
        `).join('')}
    `;
}

function renderServiceCard(s) {
  const inCart = cart.find(c => c.id === s.id);
  return `
        <div class="service-card" id="card-${s.id}">
            <span class="service-icon">${s.icon}</span>
            <div class="service-name">${s.name}</div>
            <div class="service-desc">${s.desc}</div>
            <div class="service-footer">
                <div class="service-price">₹${s.price.toLocaleString()} <span>/ service</span></div>
                <button class="add-cart-btn ${inCart ? 'added' : ''}" onclick="addToCart(${s.id})" id="btn-${s.id}">
                    ${inCart ? '✓ Added' : '+ Add'}
                </button>
            </div>
        </div>
    `;
}

// SEARCH 
function handleSearch(query) {
  const q = (query || "").trim().toLowerCase();
  const clearBtn = document.getElementById('searchClear');
  const resultsBox = document.getElementById('searchResults');

  clearBtn.classList.toggle('visible', q.length > 0);

  if (!q) {
    resultsBox.classList.remove('show');
    resultsBox.innerHTML = '';
    return;
  }

  const matches = ALL_SERVICES.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.desc.toLowerCase().includes(q) ||
    s.categoryName.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    resultsBox.innerHTML = `<div class="search-no-result">
     No services found for "<strong>${query}</strong>"</div>`;
    resultsBox.classList.add('show');
    return;
  }

  resultsBox.innerHTML = matches.map(s => {
    // Highlight matched text in name
    const regex = new RegExp(`(${escapeRegex(q)})`, 'gi');
    const highlighted = s.name.replace(regex, '<mark>$1</mark>');
    return `
            <div class="search-result-item" onclick="goToService(${s.id})">
                <span class="sri-icon">${s.icon}</span>
                <div class="sri-info">
                    <div class="sri-name">${highlighted}</div>
                    <div class="sri-cat">${s.categoryName} · ${s.duration}</div>
                </div>
                <span class="sri-price">₹${s.price.toLocaleString()}</span>
            </div>
        `;
  }).join('');

  resultsBox.classList.add('show');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function goToService(serviceId) {
  // Close search
  clearSearch();

  // Scroll to card on home page
  const card = document.getElementById(`card-${serviceId}`);
  if (!card) return;

  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Highlight card briefly
  setTimeout(() => {
    card.classList.add('highlight');
    setTimeout(() => card.classList.remove('highlight'), 2000);
  }, 400);
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClear');
  const resultsBox = document.getElementById('searchResults');
  if (input) input.value = '';
  clearBtn.classList.remove('visible');
  resultsBox.classList.remove('show');
  resultsBox.innerHTML = '';
}

// Close search on outside click
document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.search-wrapper');
  const results = document.getElementById('searchResults');
  if (wrapper && !wrapper.contains(e.target) && results && !results.contains(e.target)) {
    results.classList.remove('show');
  }
});

// ─── CART LOGIC ───────────────────────────────────────────────────────────────
function addToCart(serviceId) {

  const service = ALL_SERVICES.find(s => s.id === serviceId);

  if (!service) return;

  const existingItem = cart.find(c => c.id === serviceId);

  // already exists
  if (existingItem) {

    localStorage.setItem('cart', JSON.stringify(cart));

    showToast(`✓ This service is already in your cart`);
    return;
  }

  // new item
  cart.push({
    ...service,
    qty: 1
  });

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartBadge();

  // Update button
  const btn = document.getElementById(`btn-${serviceId}`);

  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓ Added';
  }

  showToast(`✓ ${service.name} added to cart!`);
}

function changeQty(id, change) {

  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.qty += change;

  localStorage.setItem('cart', JSON.stringify(cart));

  // remove item if qty becomes 0
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }

  // full cart rerender
  renderCart();
}

function removeFromCart(serviceId) {
  cart = cart.filter(c => c.id !== serviceId);

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartBadge();
  renderCart();

  // Update button on home page if visible
  const btn = document.getElementById(`btn-${serviceId}`);
  if (btn) {
    btn.classList.remove('added');
    btn.textContent = '+ Add';
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.textContent = cart.length;
  badge.classList.toggle('show', cart.length > 0);
}

// ─── RENDER CART ──────────────────────────────────────────────────────────────
function renderCart() {
  const container = document.getElementById('cartContent');

  if (cart.length === 0) {
    container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                </div>
                <div class="empty-title">Your Cart is Empty</div>
                <div class="empty-desc">Browse our services and add them to your cart.</div>
                <button class="btn-primary" style="max-width:200px;margin:0 auto" onclick="showPage('home')">Browse Services</button>
            </div>
        `;
    return;
  }

  const subtotal = cart.reduce((sum, s) => {
    return sum + (s.price * s.qty);
  }, 0);
  const visitingFee = 99;
  const discount = cart.length >= 3 ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + visitingFee - discount;

  container.innerHTML = `
        <div class="cart-layout">
            <div>
                <div class="cart-items">
                    ${cart.map(s => `
                        <div class="cart-item" id="cart-item-${s.id}">
                            <div class="cart-item-icon">${s.icon}</div>
                            <div class="cart-item-info">
                                <div class="cart-item-name">${s.name}</div>
                                <div class="cart-item-desc">${s.duration} · Certified Pro</div>
                            </div>
                            <div class="qty-box">
                              <button onclick="changeQty(${s.id}, -1)">−</button>
                              <span id="qty-${s.id}">
                                  ${s.qty || 1}
                              </span>
                              <button onclick="changeQty(${s.id}, 1)">+</button>
                            </div>

                            <div class="cart-item-price" id="price-${s.id}">
                              ₹${(s.price * (s.qty || 1)).toLocaleString()}
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${s.id})" title="Remove">✕</button>
                        </div>
                    `).join('')}
                </div>
                ${discount > 0 ? `<div style="margin-top:1rem;padding:0.8rem 1rem;background:rgba(45,212,167,0.08);border:1px solid rgba(45,212,167,0.25);border-radius:10px;font-size:0.85rem;color:var(--success)">🎉 10% discount applied for booking 3+ services!</div>` : ''}
            </div>

            <div class="order-summary">
                <div class="summary-title">Order Summary</div>

                ${cart.map(s => `
                    <div class="summary-row">
                        <span>${s.icon} ${s.name}</span>
                        <span>
                          ₹${(s.price * s.qty).toLocaleString()}
                        </span>
                    </div>
                `).join('')}

                <div class="summary-row">
                    <span>Visiting Fee</span>
                    <span>₹${visitingFee}</span>
                </div>

                ${discount > 0 ? `
                    <div class="summary-row" style="color:var(--success)">
                        <span>Discount (10%)</span>
                        <span>-₹${discount.toLocaleString()}</span>
                    </div>
                ` : ''}

                <div class="summary-row total">
                    <span>Total</span>
                    <span class="price">₹${total.toLocaleString()}</span>
                </div>

                <div class="booking-form">
                    <div class="form-group">
                        <label class="form-label">Your Name</label>
                        <input class="form-input" type="text" id="bookingName" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone Number</label>
                        <input class="form-input" type="tel" id="bookingPhone" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div class="form-group">
                        <label class="form-label">Address</label>
                        <input class="form-input" type="text" id="bookingAddress" placeholder="Enter your address" />
                        <button type="button" class="location-btn" onclick="getCurrentLocation()">
                        Use current Location
                        </button>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Preferred Date</label>
                        <input class="form-input" type="date" id="bookingDate" min="${new Date().toISOString().split('T')[0]}" />
                    </div>
                </div>

                <div id="bookingStatusBox"></div>

                <button class="btn-primary" id="bookNowBtn" onclick="bookNow(${total})">
                    ⚡ Book Now — ₹${total.toLocaleString()}
                </button>
                <div style="text-align:center;margin-top:0.8rem;font-size:0.75rem;color:var(--muted)">🔒 Secure booking · No advance payment</div>
            </div>
        </div>
    `;
}

// Current Location:-

async function getCurrentLocation() {

  const addressInput = document.getElementById("bookingAddress");

  if (!navigator.geolocation) {
    showToast("Geolocation is not supported", "warning");
    return;
  }

  addressInput.value = "Fetching location...";

  navigator.geolocation.getCurrentPosition(

    async (position) => {

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {

        // Reverse Geocoding API
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );

        const data = await res.json();

        const address = data.display_name;

        addressInput.value = address;

        showToast("📍 Location detected!");

      } catch (err) {

        console.log(err);

        addressInput.value = "";

        showToast("Failed to fetch address", "warning");
      }
    },

    (error) => {

      console.log(error);

      addressInput.value = "";

      showToast("Location permission denied", "warning");
    }

  );
}





// BOOK NOW :-  
async function bookNow(total) {
  const name = document.getElementById('bookingName')?.value?.trim();
  const phone = document.getElementById('bookingPhone')?.value?.trim();
  const address = document.getElementById('bookingAddress')?.value?.trim();
  const date = document.getElementById('bookingDate')?.value;

  if (!name || !phone || !address || !date) {
    showToast('⚠️ Please fill in all details!', 'warning');
    return;
  }

  const btn = document.getElementById('bookNowBtn');
  const statusBox = document.getElementById('bookingStatusBox');

  // Disable button and show saving state
  btn.disabled = true;
  btn.textContent = '⏳ Booking...';
  setStatus(statusBox, 'saving', 'Saving your booking...');

  const bookingId = 'SPK-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  const bookingData = {
    booking_id: bookingId,
    customer_name: name,
    customer_phone: phone,
    customer_address: address,
    preferred_date: date,
    services: cart.map(s => ({ id: s.id, name: s.name, price: s.price, qty: s.qty })),
    total_amount: total,
    created_at: new Date().toISOString(),
    status: 'pending'
  };


  try {

    await addDoc(collection(db, "bookings"), bookingData);

    setStatus(statusBox, 'saved', '✓ Booking saved successfully!');

  } catch (error) {

    console.log(error);

    setStatus(statusBox, 'error', '⚠ Failed to save booking');

  }


  const serviceList = cart
    .map(s => `• ${s.name} x${s.qty} (${s.price}/each) - ₹${(s.price * s.qty).toLocaleString()}`)
    .join('\n');

  const telegramMessage =
    `🔔 NEW BOOKING

👤 Name: ${name}

📞 Phone: ${phone}

📍 Address:
${address}

📅 Date: ${date}

🔧 Services:
${serviceList}

💰 Total: ₹${total}`;

  try {

    const telegramRes = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: telegramMessage
      })
    });

    const telegramData = await telegramRes.json();

    console.log("Telegram:", telegramData);

  } catch (err) {

    console.log("Telegram Error:", err);

  }

  // 3. SHOW CONFIRMATION MODAL :-
  document.getElementById('bookingId').textContent = `BOOKING ID: #${bookingId}`;

  const bookedList = document.getElementById('bookedServicesList');
  bookedList.innerHTML = cart.map(s => `
        <div class="booked-service-item">
            <span class="check">✓</span>
            <span>${s.icon} ${s.name}</span>
            <span style="margin-left:auto;color:var(--accent)">₹${(s.price * s.qty).toLocaleString()}</span>
        </div>
    `).join('') + `
        <div class="booked-service-item" style="font-weight:600;color:var(--text)">
            <span></span><span>Total</span>
            <span style="margin-left:auto;color:var(--accent);font-family:'Bebas Neue',cursive;font-size:1.2rem">₹${total.toLocaleString()}</span>
        </div>
    `;

  document.getElementById('modalOverlay').classList.add('show');
  btn.disabled = false;
  btn.textContent = `⚡ Book Now — ₹${total.toLocaleString()}`;
}

function setStatus(box, type, msg) {
  if (!box) return;
  box.innerHTML = `
        <div class="booking-status ${type}">
            ${type === 'saving' ? '<div class="spinner"></div>' : ''}
            <span>${msg}</span>
        </div>
    `;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
  cart = [];
  localStorage.removeItem('cart');
  updateCartBadge();
  renderCategories(); // re-render to reset all add buttons
  showPage('home');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.borderColor = type === 'warning' ? 'var(--accent)' : 'var(--success)';
  toast.style.color = type === 'warning' ? 'var(--accent)' : 'var(--success)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
renderCategories();

window.toggleMenu = handleSearch;
window.handleSearch = handleSearch;
window.clearSearch = clearSearch;
window.getCurrentLocation = getCurrentLocation;
window.bookNow = bookNow;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.showPage = showPage;
window.goToService = goToService;
window.closeModal = closeModal;