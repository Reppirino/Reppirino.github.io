// Smooth Scroll
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        window.location.hash = hash;
      });
    } 
  });
});


// Scroll Reveal
// Home
window.sr = ScrollReveal();
sr.reveal('.logo', {
  duration: 2000,
});

sr.reveal('.branding', {
  delay: 200,
  duration: 2000
});

// General Heading
sr.reveal('.main-heading', {
  duration: 1000
});

// About
sr.reveal('.headshot', {
  delay: 200,
  duration: 2000
});

sr.reveal('.info', {
  delay: 250,

  duration: 2000
});

sr.reveal('.myinterests', {
  delay: 250,
  duration: 2000
});

sr.reveal('.interests', {
  delay: 250,
  duration: 2000
});

// Work
sr.reveal('#work-1', {
  delay: 200,
  duration: 2000
});

sr.reveal('#work-2', {
  delay: 400,
  duration: 2000
});

sr.reveal('#work-3', {
  delay: 600,
  duration: 1000
});

// Education
sr.reveal('.education-showcase', {
  delay: 300,
  duration: 2000
});

// Skills
sr.reveal('.skills-showcase', {
  delay: 400,
  duration: 2000
});

// Footer
sr.reveal('.social-links', {
  duration: 2000
});