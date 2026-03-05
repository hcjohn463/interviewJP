// ===== COMPANY TAB SWITCHING =====
const companyBtns = document.querySelectorAll('.company-btn');
const companyContents = document.querySelectorAll('.company-content');
const navGroups = document.querySelectorAll('.nav-group');

companyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.company;

        // Update active tab button
        companyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide content panels
        companyContents.forEach(c => {
            c.classList.toggle('hidden', c.dataset.content !== target);
            c.classList.toggle('active', c.dataset.content === target);
        });

        // Show/hide nav groups
        navGroups.forEach(g => {
            g.classList.toggle('hidden', g.dataset.for !== target);
        });

        // Update nav button hover accent color
        updateNavAccent(target);

        // Scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function updateNavAccent(company) {
    const navBtns = document.querySelectorAll('.nav-btn');
    if (company === 'steel') {
        navBtns.forEach(btn => {
            btn.style.setProperty('--hover-color', 'var(--accent-steel)');
        });
        document.documentElement.style.setProperty('--current-accent', 'var(--accent-steel)');
        document.querySelector('.back-to-top').style.background =
            'linear-gradient(135deg, #e87c35, #c45a18)';
    } else {
        navBtns.forEach(btn => {
            btn.style.removeProperty('--hover-color');
        });
        document.documentElement.style.setProperty('--current-accent', 'var(--accent-it)');
        document.querySelector('.back-to-top').style.background =
            'linear-gradient(135deg, #5b8dee, #7c4dff)';
    }
}

// ===== SECTION NAV: SCROLL TO SECTION =====
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;
        const el = document.getElementById(targetId);
        if (el) {
            // Remove highlight from all sections
            document.querySelectorAll('.script-section').forEach(s => s.classList.remove('highlighted'));
            // Add highlight to target section
            el.classList.add('highlighted');
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    // Scroll to section-nav (top of nav buttons area)
    const sectionNav = document.getElementById('section-nav');
    if (sectionNav) {
        sectionNav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
