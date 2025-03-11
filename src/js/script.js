document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".experiencias, .experiencias1, .card");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.2 });
    
    animatedElements.forEach(el => observer.observe(el));
  });