const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    // gjør synlig-området veldig lite nederst
    rootMargin: '0px 0px -85% 0px', // du kan prøve -90% også
    threshold: 0
  }
);

boxes.forEach((box) => observer.observe(box));
