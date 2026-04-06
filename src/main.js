document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Modal Logic
    const saleModal = document.getElementById('sale-modal');
    const saleButtons = document.querySelectorAll('.sale-button');
    const closeModal = document.getElementById('close-modal');

    if (saleModal && saleButtons.length > 0) {
        saleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                saleModal.classList.remove('hidden');
                saleModal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', () => {
                saleModal.classList.add('hidden');
                saleModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            });
        }

        // Close on outside click
        saleModal.addEventListener('click', (e) => {
            if (e.target === saleModal) {
                saleModal.classList.add('hidden');
                saleModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });
    }
});
