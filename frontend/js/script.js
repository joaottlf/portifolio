document.addEventListener('DOMContentLoaded', () => {

/*  ==========================================================================
    Animação de Introdução
    ========================================================================== */
    const intro_overlay = document.querySelector('.intro-overlay');
    const left_panel = document.querySelector('.intro-panel.left');
    const right_panel = document.querySelector('.intro-panel.right');

    setTimeout(() => {
        left_panel.classList.add('animate-out');
        right_panel.classList.add('animate-out');
    }, 500);

    left_panel.addEventListener('transitionend', () => {
        intro_overlay.remove();
    });

/*  ==========================================================================
    Navegação do menu
    ========================================================================== */    
    const links = document.querySelectorAll('.nav_item');
    const pages = document.querySelectorAll('.page');

    links.forEach( link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targed_id = link.getAttribute('href');

            pages.forEach(page => {
                page.classList.remove('active');
            });

            const targed_page = document.querySelector(targed_id);
            if(targed_page) {
                targed_page.classList.add('active');
            }
        })
    })
});