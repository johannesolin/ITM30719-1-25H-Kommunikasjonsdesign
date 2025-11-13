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
    rootMargin: '0px 0px -15% 0px', 
    threshold: 0
  }
);

boxes.forEach((box) => observer.observe(box));
