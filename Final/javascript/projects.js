window.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".project article");

  articles.forEach((article, index) => {
    article.classList.remove("left");
    article.classList.remove("right");

    if (index % 2 === 0) {
      article.classList.add("left");
    } else {
      article.classList.add("right");
    }
  });

  gsap.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    TextPlugin,
    RoughEase,
    CustomEase
  );

  const projects = document.querySelectorAll(".project");

  projects.forEach((project, i) => {
    gsap.from(project, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
