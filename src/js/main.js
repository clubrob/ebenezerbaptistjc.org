$('a[href^="#"]').on('click', function scrolly(event) {
  const target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top,
    }, 800);
  }
});
