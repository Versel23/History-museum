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