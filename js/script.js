// Konfigurasi utama website
        const CONFIG = {
            // Nomor WA gunakan kode negara (contoh: 62 untuk Indonesia), tanpa tanda + atau 0 di depan.
            whatsappNumber: "6285934865713",
            email: "yunusshoot1@gmail.com",
            instagram: "https://www.instagram.com/yunus_shoot1",
            facebook: "https://www.facebook.com/yunusshoot",
            tiktok: "https://www.tiktok.com/@yunus_shoot"
        };

        const packageCategories = [
            { id: 'engagement', label: 'Engagement', service: 'Engagement' },
            { id: 'prewedding', label: 'Pre-Wedding', service: 'Pre-Wedding' },
            { id: 'wedding', label: 'Wedding', service: 'Wedding' },
        ];

        const packagesData = [
            { category: 'engagement', name: 'Basic', price: 300000, features: ['Full acara', '40 foto full edit', 'Sisa foto dikirim via Drive tanpa edit'] },
            { category: 'engagement', name: 'Standar', price: 350000, features: ['Full season', 'Foto 10R + figura', '40 foto full edit', 'Sisa foto dikirim via Drive tanpa edit'] },
            { category: 'engagement', name: 'Premium', price: 400000, features: ['Full season', 'Album standar 4R', 'Foto 10R + figura', '40 foto full edit', 'Sisa foto dikirim secara digital'] },
            { category: 'prewedding', name: 'Basic', price: 250000, features: ['Durasi 1 jam++', 'Foto sepuasnya', '20 foto full edit', 'Sisa foto dikirim via Drive tanpa edit'] },
            { category: 'prewedding', name: 'Standar', price: 300000, features: ['Durasi 1,5 jam++', 'Gratis 1 foto 10R + figura', '30 foto full edit', 'Sisa foto dikirim via Drive tanpa edit'] },
            { category: 'prewedding', name: 'Premium', price: 400000, features: ['Durasi 2 jam++', 'Gratis X-banner', '30 foto full edit', 'Sisa foto dikirim secara digital'] },
            { category: 'wedding', name: 'Basic', price: 400000, features: ['Full season', 'Album Basic 4R', 'Foto 10R + figura', '40 foto full edit', 'Sisa foto dikirim secara digital'] },
            { category: 'wedding', name: 'Standar', price: 500000, features: ['Full season', 'Album magnetic standar', 'Foto 10R + figura', '40 foto full edit', 'Sisa foto dikirim secara digital'] },
            { category: 'wedding', name: 'Premium', price: 550000, features: ['Full season', 'Album magnetic premium', 'Foto 10R + figura', '40 foto full edit', 'Sisa foto dikirim secara digital'] },
        ];

        // Data galeri. Tambahkan foto baru ke dalam array ini.
        const galleryData = [
            {
                id: 1,
                src: 'YUNUS SHOOT-312.jpg',
                
                category: 'wedding',
                year: '2026',
                desc: 'Potret pernikahan klasik yang elegan.'
            },
            {
                id: 2,
                src: 'YUNUS SHOOT-338.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 3,
                src: 'YUNUS SHOOT-340.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 4,
                src: 'indah2.jpeg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 5,
                src: 'indah3.jpeg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 6,
                src: 'indah1.jpeg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 7,
                src: 'YUNUS SHOOT-87.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 8,
                src: 'YUNUS SHOOT-92.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 9,
                src: 'a1.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 10,
                src: 'a2.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 11,
                src: 'a3.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 12,
                src: 'a4.jpg',
                
                category: 'wedding',
                year: '2026'
            },
            {
                id: 13,
                src: 'a5.jpg',
                title: 'Memegang Bunga',
                category: 'wedding',
                year: '2026'
            },
            {
                id: 14,
                src: 'a6.jpg',
                category: 'wedding',
                year: '2026'
            },
            {
                id: 15,
                src: 'a7.jpg',
                category: 'engagement',
                year: '2026'
            },
            {
                id: 16,
                src: 'a8.jpg',
                category: 'engagement',
                year: '2026'
            },
            {
                id: 17,
                src: 'a9.jpg',
                category: 'engagement',
                year: '2026'
            },
            {
                id: 18,
                src: 'a10.jpg',
                category: 'engagement',
                year: '2026'
            }

            // Tambahkan foto lain di sini...
        ];


        // Logika UI dan interaksi
        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Update Copyright Year Automatically
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // 2. Navbar Scroll Effect & Back to Top Button
            const navbar = document.getElementById('navbar');
            const backToTopBtn = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg');
                    navbar.classList.remove('py-4');
                    navbar.classList.add('py-2');
                } else {
                    navbar.classList.remove('bg-brand-black/95', 'backdrop-blur-md', 'shadow-lg');
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-2');
                }

                // Show/Hide Back to top
                if (window.scrollY > 500) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
                    backToTopBtn.classList.add('opacity-100', 'translate-y-0');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
                    backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
                }
            });

            // Back to top click
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // 3. Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            const body = document.body;

            function toggleMobileMenu() {
                const isOpen = mobileMenu.classList.contains('opacity-100');
                if (isOpen) {
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    mobileBtn.innerHTML = '<i class="ph ph-list text-3xl"></i>';
                    body.classList.remove('no-scroll');
                } else {
                    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileBtn.innerHTML = '<i class="ph ph-x text-3xl"></i>';
                    body.classList.add('no-scroll');
                }
            }

            mobileBtn.addEventListener('click', toggleMobileMenu);
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMobileMenu);
            });

            // 4. Scroll Reveal Animations (Intersection Observer)
            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Hanya animasi sekali
                    }
                });
            }, {
                root: null,
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });

            revealElements.forEach(el => revealObserver.observe(el));

            // 5. Render package prices
            const packageCategoryButtons = document.getElementById('package-category-buttons');
            const packageGrid = document.getElementById('package-grid');
            const formatPrice = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            });

            let selectedPackageCategory = 'engagement';

            function renderPackageCategories() {
                packageCategoryButtons.innerHTML = packageCategories.map(category => `
                    <button type="button"
                        class="package-category-btn px-5 py-2 border border-gray-700 text-sm tracking-widest uppercase text-gray-400 transition hover:border-amber-200 hover:text-amber-100${category.id === selectedPackageCategory ? ' active' : ''}"
                        data-category="${category.id}"
                        aria-pressed="${category.id === selectedPackageCategory}">
                        ${category.label}
                    </button>
                `).join('');
            }

            function renderPackages() {
                const category = packageCategories.find(item => item.id === selectedPackageCategory);
                const visiblePackages = packagesData.filter(item => item.category === selectedPackageCategory);

                packageGrid.innerHTML = visiblePackages.map(item => `
                    <article class="package-card flex flex-col border border-gray-800 bg-[#111] p-7 transition duration-300 hover:border-amber-200/70">
                        <div class="mb-6">
                            <p class="text-xs tracking-[0.25em] uppercase text-amber-200">${category.label} · 1 Roll</p>
                            <h4 class="mt-2 font-serif text-2xl">${item.name}</h4>
                        </div>
                        <ul class="mb-8 flex-1 space-y-3 text-sm font-light text-gray-300">
                            ${item.features.map(feature => `<li class="flex gap-3"><span class="text-amber-200" aria-hidden="true">•</span><span>${feature}</span></li>`).join('')}
                        </ul>
                        <p class="mb-5 border-t border-gray-800 pt-5 text-2xl font-semibold text-amber-100">${formatPrice.format(item.price)}</p>
                        <button type="button"
                            class="package-select-btn w-full border border-amber-100/70 px-5 py-3 text-xs tracking-widest uppercase text-amber-100 transition hover:bg-amber-100 hover:text-black"
                            data-category="${item.category}"
                            data-package="${item.name}"
                            data-price="${item.price}">
                            Pilih paket ini
                        </button>
                    </article>
                `).join('');
            }

            packageCategoryButtons.addEventListener('click', (event) => {
                const button = event.target.closest('[data-category]');
                if (!button) return;

                selectedPackageCategory = button.dataset.category;
                renderPackageCategories();
                renderPackages();
            });

            packageGrid.addEventListener('click', (event) => {
                const button = event.target.closest('.package-select-btn');
                if (!button) return;

                const category = packageCategories.find(item => item.id === button.dataset.category);
                const packageMessage = `Saya tertarik dengan paket ${category.label} ${button.dataset.package} (${formatPrice.format(Number(button.dataset.price))}).`;
                const messageField = document.getElementById('message');
                const existingMessage = messageField.value.trim();

                document.getElementById('service').value = category.service;
                if (!existingMessage.includes(packageMessage)) {
                    messageField.value = [existingMessage, packageMessage].filter(Boolean).join('\n\n');
                }
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            });

            renderPackageCategories();
            renderPackages();

            // 6. Gallery & Lightbox Logic
            const galleryGrid = document.getElementById('gallery-grid');
            const filterBtns = document.querySelectorAll('.filter-btn');
            const emptyState = document.getElementById('empty-state');
            
            // Lightbox Elements
            const lightbox = document.getElementById('lightbox');
            const lbImg = document.getElementById('lightbox-img');
            const lbCategory = document.getElementById('lightbox-category');
            const lbClose = document.getElementById('lightbox-close');
            const lbPrev = document.getElementById('lightbox-prev');
            const lbNext = document.getElementById('lightbox-next');
            
            let currentFilteredData = [];
            let currentLightboxIndex = 0;

            // Render Gallery Function
            function renderGallery(filter = 'all') {
                galleryGrid.innerHTML = ''; // Clear current
                
                // Filter data
                if (filter === 'all') {
                    currentFilteredData = galleryData;
                } else {
                    currentFilteredData = galleryData.filter(item => item.category === filter);
                }

                // Show empty state if no photos
                if (currentFilteredData.length === 0) {
                    emptyState.classList.remove('hidden');
                    galleryGrid.classList.add('hidden');
                    return;
                } else {
                    emptyState.classList.add('hidden');
                    galleryGrid.classList.remove('hidden');
                }

                // Inject HTML
                currentFilteredData.forEach((item, index) => {
                    const imgHTML = `
                        <div class="masonry-item" data-index="${index}">
                            <img src="${item.src}" alt="Foto ${item.category}" class="w-full h-auto object-cover lazyload bg-gray-900" loading="lazy">
                            <div class="gallery-overlay absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                                <p class="text-sm leading-5 text-white tracking-widest uppercase">${item.category}</p>
                            </div>
                        </div>
                    `;
                    galleryGrid.insertAdjacentHTML('beforeend', imgHTML);
                });

                // Re-attach click events to new items
                document.querySelectorAll('.masonry-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const index = parseInt(this.getAttribute('data-index'));
                        openLightbox(index);
                    });
                });
            }

            // Filter Click Events
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active class
                    filterBtns.forEach(b => b.classList.remove('active', 'text-white'));
                    filterBtns.forEach(b => b.classList.add('text-gray-400'));
                    
                    this.classList.add('active', 'text-white');
                    this.classList.remove('text-gray-400');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Simple fade out/in effect for visual transition
                    galleryGrid.style.opacity = 0;
                    setTimeout(() => {
                        renderGallery(filterValue);
                        galleryGrid.style.opacity = 1;
                    }, 300);
                });
            });

            // Initial render
            renderGallery('all');

            // --- Lightbox Functions ---
            function openLightbox(index) {
                currentLightboxIndex = index;
                updateLightboxContent();
                
                lightbox.classList.remove('opacity-0', 'pointer-events-none');
                lightbox.classList.add('opacity-100', 'pointer-events-auto');
                body.classList.add('no-scroll');
                
                // Re-trigger animation
                lbImg.style.animation = 'none';
                lbImg.offsetHeight; /* trigger reflow */
                lbImg.style.animation = null;
            }

            function closeLightbox() {
                lightbox.classList.remove('opacity-100', 'pointer-events-auto');
                lightbox.classList.add('opacity-0', 'pointer-events-none');
                body.classList.remove('no-scroll');
                // clear src to prevent showing old image briefly on next open
                setTimeout(() => { lbImg.src = ''; }, 300);
            }

            function updateLightboxContent() {
                const item = currentFilteredData[currentLightboxIndex];
                lbImg.src = item.src;
                lbCategory.textContent = `${item.category} ${item.year ? '• '+item.year : ''}`;
            }

            function nextImage() {
                currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredData.length;
                updateLightboxContent();
            }

            function prevImage() {
                currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredData.length) % currentFilteredData.length;
                updateLightboxContent();
            }

            // Lightbox Event Listeners
            lbClose.addEventListener('click', closeLightbox);
            lbNext.addEventListener('click', nextImage);
            lbPrev.addEventListener('click', prevImage);
            
            // Close on background click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            // Keyboard navigation for lightbox
            document.addEventListener('keydown', (e) => {
                if (lightbox.classList.contains('opacity-100')) {
                    if (e.key === 'Escape') closeLightbox();
                    if (e.key === 'ArrowRight') nextImage();
                    if (e.key === 'ArrowLeft') prevImage();
                }
            });

            // 7. Booking Form to WhatsApp
            const bookingForm = document.getElementById('booking-form');
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const service = document.getElementById('service').value;
                const date = document.getElementById('date').value;
                const location = document.getElementById('location').value;
                const message = document.getElementById('message').value;

                // Format pesan WhatsApp
                const text = `Halo Yunus Shoot, saya ingin menanyakan layanan fotografi.\n\n*Nama:* ${name}\n*Layanan:* ${service}\n*Tanggal:* ${date || 'Belum ditentukan'}\n*Lokasi:* ${location || '-'}\n*Pesan / Detail:* ${message || '-'}\n\nCatatan: Untuk lokasi yang jauh, mungkin ada biaya tambahan. Mohon informasikan besarannya berdasarkan lokasi saya.\n\nMohon informasi lebih lanjut mengenai harga dan ketersediaan. Terima kasih.`;

                // Redirect to WA
                const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
                window.open(waUrl, '_blank');
            });
        });
