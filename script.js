import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

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


// ─── DATA ─────────────────────────────────────────────────────────────────────
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
        price: 499,
        duration: '45-60 min'
      },
      {
        id: 2,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>',

        name: 'Fan Repair & Servicing',
        desc: 'Fix slow fans, noise issues, capacitor replacement, and regulator problems.',
        price: 299,
        duration: '30-45 min'
      },
      {
        id: 3,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fan-icon lucide-fan"><path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"/><path d="M12 12v.01"/></svg>',

        name: 'Exhaust Fan Installation',
        desc: 'Install bathroom/kitchen exhaust fans with proper ventilation wiring',
        price: 399,
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
        id: 4,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>',

        name: 'AC Wiring & Power Point',
        desc: 'Dedicated power line and wiring installation for air conditioners and heavy appliances.',
        price: 899,
        duration: '1-2 hrs'
      },
      {
        id: 5,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent-icon lucide-air-vent"><path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12"/><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M6.6 15.572A2 2 0 1 0 10 17v-5"/></svg>',

        name: 'AC Installation Support',
        desc: 'Electrical support for AC mounting, earthing, and dedicated circuit setup.',
        price: 699,
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
        id: 6,

        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',

        name: 'Light Fixture Installation',
        desc: 'Install ceiling lights, chandeliers, LEDs, or any light fixture safely and professionally.',
        price: 799,
        duration: '1-2 hrs'
      },
      {
        id: 7,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
        name: 'Outdoor & Garden Lighting',
        desc: 'Weatherproof outdoor light installation, pathway lights, and garden setups.',
        price: 999,
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
        name: 'Outlet & Socket Repair',
        desc: 'Fix or replace faulty power outlets, USB ports, and electrical sockets in your home.',
        price: 499,
        duration: '30-60 min'
      },
      {
        id: 9,
        icon: '⚡',
        name: 'Electrical Panel Upgrade',
        desc: 'Upgrade your main electrical panel for higher capacity, safety, and modern appliances.',
        price: 2999,
        duration: '3-5 hrs'
      },
      {
        id: 10,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench-icon lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>',
        name: 'Wiring & Rewiring',
        desc: 'Full or partial home rewiring for new construction or older homes needing upgrades.',
        price: 1899,
        duration: '3-4 hrs'
      },
      {
        id: 11,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
        name: 'Safety Inspection',
        desc: 'Complete electrical safety audit, hazard detection, and compliance certification.',
        price: 699,
        duration: '1-2 hrs'
      },
    ]
  },
  {
    id: 'power',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
    name: 'Power Backup & Solar',
    services: [
      {
        id: 12,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-battery-charging-icon lucide-battery-charging"><path d="m11 7-3 5h4l-3 5"/><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/><path d="M22 14v-4"/><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/></svg>',
        name: 'Inverter & Battery Setup',
        desc: 'Professional installation of home inverters, UPS systems, and battery backups.',
        price: 1199,
        duration: '2-3 hrs'
      },
      {
        id: 13,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-solar-panel-icon lucide-solar-panel"><path d="M11 2h2"/><path d="m14.28 14-4.56 8"/><path d="m21 22-1.558-4H4.558"/><path d="M3 10v2"/><path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z"/><path d="M7 2a4 4 0 0 1-4 4"/><path d="m8.66 7.66 1.41 1.41"/></svg>',
        name: 'Solar Panel Wiring',
        desc: 'Complete solar panel electrical wiring, connection, and system integration services.',
        price: 3499,
        duration: '4-6 hrs'
      },
    ]
  },
  {
    id: 'security',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cctv-icon lucide-cctv"><path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"/><path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/><path d="M2 21v-4"/><path d="M7 9h.01"/></svg>',
    name: 'Security & CCTV',
    services: [
      {
        id: 14,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cctv-icon lucide-cctv"><path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"/><path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"/><path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"/><path d="M2 21v-4"/><path d="M7 9h.01"/></svg>',
        name: 'CCTV Electrical Setup',
        desc: 'Power connections, cable management, and electrical work for CCTV / security camera systems.',
        price: 1099,
        duration: '2-3 hrs'
      },
    ]
  },
];




function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}





// Flat list for search
const ALL_SERVICES = CATEGORIES.flatMap(cat =>
  cat.services.map(s => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
);

let cart = [];

// ─── PAGE NAVIGATION ──────────────────────────────────────────────────────────
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

// ─── RENDER CATEGORIES ────────────────────────────────────────────────────────
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

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function handleSearch(query) {
  const q = query.trim().toLowerCase();
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
    resultsBox.innerHTML = `<div class="search-no-result">😕 No services found for "<strong>${query}</strong>"</div>`;
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

    existingItem.qty += 1;

    // qty update
    document.getElementById(`qty-${serviceId}`).innerText =
      existingItem.qty;

    // price update
    document.getElementById(`price-${serviceId}`).innerText =
      `₹${(existingItem.price * existingItem.qty).toLocaleString()}`;

    // updateTotal();

    showToast('⚡ Quantity Updated!');
    return;
  }

  // new item
  cart.push({
    ...service,
    qty: 1
  });

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
                <div class="empty-icon">🛒</div>
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

// ─── BOOK NOW  ───────────────────────────────────────
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
    .map(s => `• ${s.name} - ₹${s.price}`)
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

  // ── 2. NOTIFY HANDLER ─────────────────────────────────────────────────────
  // if (ENABLE_NOTIFY) {
  //     try {
  //         const serviceList = cart.map(s => `• ${s.name} (₹${s.price})`).join('\n');
  //         const message = `🔔 *New SparkPro Booking!*\n\n` +
  //             `📋 *ID:* ${bookingId}\n` +
  //             `👤 *Customer:* ${name}\n` +
  //             `📞 *Phone:* ${phone}\n` +
  //             `📍 *Address:* ${address}\n` +
  //             `📅 *Date:* ${date}\n\n` +
  //             `🔧 *Services:*\n${serviceList}\n\n` +
  //             `💰 *Total:* ₹${total.toLocaleString()}\n\n` +
  //             `Please confirm appointment with the customer.`;

  //         await fetch(BACKEND_NOTIFY_URL, {
  //             method: 'POST',
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify({
  //                 to: HANDLER_PHONE,
  //                 message,
  //                 bookingId
  //             })
  //         });
  //     } catch (err) {
  //         console.error('Notify failed:', err);
  //         // Non-critical — booking still confirmed
  //     }
  // }

  // ── 3. SHOW CONFIRMATION MODAL ────────────────────────────────────────────
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

window.handleSearch = handleSearch;
window.clearSearch = clearSearch;
window.bookNow = bookNow;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.showPage = showPage;
window.goToService = goToService;
window.closeModal = closeModal;