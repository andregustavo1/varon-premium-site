
export const setupAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1
  });

  const elementsToAnimate = document.querySelectorAll('.reveal-animation');
  elementsToAnimate.forEach((el) => observer.observe(el));

  return () => {
    elementsToAnimate.forEach((el) => observer.unobserve(el));
  };
};
