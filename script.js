  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY; 
    const maxScroll = 8000;     
    const opacity = Math.max(0, Math.min(1, 1 - scrollPosition / maxScroll)); 
    header.style.backgroundColor = `rgba(34, 34, 34, ${opacity})`; 
  });
