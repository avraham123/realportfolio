let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active'); 
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function isElementInViewport(el, offset) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  var aboutSection = document.querySelector('.about');
  
  if (isElementInViewport(aboutSection, window.innerHeight * 0.3)) {
      aboutSection.classList.add('fade-in');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // To handle initial page load



$(document).ready(function() {
  var header = $(".header");
  var headerHeight = header.height();
  var windowHeight = $(window).height();

  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > header.offset().top - windowHeight + headerHeight) {
          header.addClass("active");
      } else {
          header.removeClass("active");
      }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");
  const options = {
      rootMargin: "-50px", // Adjust as needed
      threshold: 0.2 // Adjust as needed
  };

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
          }
      });
  }, options);

  boxes.forEach(box => {
      observer.observe(box);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box, .box1"); // Add .box1 here
  const options = {
      rootMargin: "-50px", // Adjust as needed
      threshold: 0.2 // Adjust as needed
  };

  const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
          }
      });
  }, options);

  boxes.forEach(box => {
      observer.observe(box);
  });
});