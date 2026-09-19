document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-a');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-a').style.maxHeight = null;
        });
        if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
window.addEventListener('load', () => {
    document.querySelectorAll('.faq-item.open .faq-a').forEach(a => a.style.maxHeight = a.scrollHeight + 'px');
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    const isShown = navLinks.style.display === 'flex';
    navLinks.style.display = isShown ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '32px';
    navLinks.style.background = '#0c0c0c';
    navLinks.style.border = '1px solid rgba(217,217,217,0.15)';
    navLinks.style.padding = '16px 24px';
    navLinks.style.borderRadius = '8px';
});