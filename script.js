// ===== 1. HAMBURGERMENY =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-bar ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // ✅ الرابط يعمل من أول مرة
    document.querySelectorAll('.nav-bar ul li a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                navMenu.classList.remove('open');
            }, 100);
        });
    });
}

// ===== 2. LIGHTBOX (الصفحة الرئيسية) =====
const openBtn = document.getElementById('openGalleryBtn');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('closeLightbox');

if (openBtn && lightbox && closeBtn) {
    openBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// ===== 3. BOKA-KNAPPAR – 404 OVERLAY =====
const errorOverlay = document.getElementById('errorOverlay');
const bookBtns = document.querySelectorAll('.book-room-btn');

if (errorOverlay) {
    bookBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            errorOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            setTimeout(() => {
                errorOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }, 2000);
        });
    });

    errorOverlay.addEventListener('click', () => {
        errorOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}