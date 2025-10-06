document.addEventListener('DOMContentLoaded', () => {

/*  ==========================================================================
    Animação de Introdução
    ========================================================================== */
    const introOverlay = document.querySelector('.intro-overlay');
    const leftPanel = document.querySelector('.intro-panel.left');
    const rightPanel = document.querySelector('.intro-panel.right');

    setTimeout(() => {
        leftPanel.classList.add('animate-out');
        rightPanel.classList.add('animate-out');
    }, 500);

    leftPanel.addEventListener('transitionend', () => {
        introOverlay.remove();
    });

});