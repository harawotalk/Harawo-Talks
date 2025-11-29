// 1. INITIALIZE ICONS
// This activates the Lucide icons used throughout the site
lucide.createIcons();

// Set current year in footer
document.getElementById('year').innerText = new Date().getFullYear();

// 2. BOOK DATA 
// Edit this list to add or remove books from your portfolio.
// All images should be in the "images" folder next to index.html.
const books = [
    {
        title: "The Language of Silence: The Untold Stories of What We Don't Say",
        category: "Psychology • Culture • Communication",
        desc: "An exploration of how silence is interpreted across communities and how it works as a psychological and communicative language.",
        image: "images/language-of-silence.jpg",
        link: "https://www.amazon.com/dp/B0DR8SR5WN"
    },
    {
        title: "Reflections of a Changing World",
        category: "Poetry",
        desc: "Poems on love, life, and transformation in a changing world.",
        image: "images/reflections-of-a-changing-world.jpg",
        link: "https://www.amazon.com/dp/B0DDXLFBVH"
    },
    {
        title: "Echoes of the Horn",
        category: "Fiction / Cultural",
        desc: "Powerful stories rooted in the Horn of Africa and the diaspora.",
        image: "images/echoes-of-the-horn.jpg",
        link: "https://www.amazon.com/dp/B0DRP2BCLP"
    },
    {
        title: "The Echoes of Tomorrow",
        category: "Mystery / Thriller",
        desc: "Shadows of memory and whispers of fate colliding in the future.",
        image: "images/the-echoes-of-tomorrow.jpg",
        link: "https://www.amazon.com/dp/B0DDSXD66C"
    },
    {
        title: "The Lost Melody of the Desert Wind",
        category: "Fiction",
        desc: "Book 2 of The Echoes Chronicles, set across desert winds and memories.",
        image: "images/the-lost-melody-of-the-desert-wind.jpg",
        link: "https://www.amazon.com/dp/B0DDXJ44VC"
    },
    {
        title: "From Dreams to Darkness: Grace's Journey",
        category: "Fiction",
        desc: "A gripping story of a young girl navigating struggle, identity, and hope.",
        image: "images/from-dreams-to-darkness-graces-journey.jpg",
        link: "https://www.amazon.com/dp/B0DHGRGMHM"
    },
    {
        title: "The Court Interpreter’s Guidebook",
        category: "Professional / Legal",
        desc: "A comprehensive resource for aspiring and practicing court interpreters.",
        image: "images/the-court-interpreters-guidebook.jpg",
        link: "https://www.amazon.com/dp/B0DF63D5GQ"
    },
    {
        title: "Personal Finance & Wealth Building",
        category: "Finance / Wealth",
        desc: "Practical steps for financial independence and building generational wealth.",
        image: "images/personal-finance-wealth-building.jpg",
        link: "https://www.amazon.com/dp/B0DFQGF7MK"
    }
];

// 3. RENDER BOOKS DYNAMICALLY
// This loop creates the HTML for each book card automatically
const bookGrid = document.getElementById('book-grid');

books.forEach((book, index) => {
    const delay = index * 100; // Stagger animation for visual effect
    const card = document.createElement('div');
    card.className = `book-card bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full reveal`;
    card.style.transitionDelay = `${delay}ms`;
    
    // Generate HTML for card
    card.innerHTML = `
        <div class="relative overflow-hidden rounded-xl bg-gray-200 mb-4 aspect-[2/3]">
            <img src="${book.image}" alt="${book.title}" class="w-full h-full object-cover">
            ${book.isNew ? '<span class="absolute top-2 right-2 bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded">NEW</span>' : ''}
        </div>
        <div class="flex flex-col flex-grow">
            <span class="text-xs font-bold text-brand-blue uppercase tracking-wide mb-1">${book.category}</span>
            <h3 class="font-serif text-xl font-bold text-gray-900 mb-2 leading-tight">${book.title}</h3>
            <p class="text-gray-600 text-sm mb-4 flex-grow">${book.desc}</p>
            
            <div class="mt-auto space-y-2">
                <a href="${book.link}" class="block w-full text-center bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold hover:bg-brand-gold transition-colors" target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                </a>
                <a href="#" class="block w-full text-center text-gray-500 hover:text-gray-900 text-sm">Read Sample</a>
            </div>
        </div>
    `;
    bookGrid.appendChild(card);
});

// 4. MOBILE MENU TOGGLE
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Toggle menu on button click
if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 5. SCROLL ANIMATION (Intersection Observer)
// This handles the "fade in" effect as you scroll down
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target all elements with .reveal class
// We use a small timeout to ensure DOM is fully ready
setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}, 100);
