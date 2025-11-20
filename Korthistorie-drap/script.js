document.addEventListener("DOMContentLoaded", () => {
  // 1. Hover-to-Play video funksjonalitet (Uendret)
  const video = document.getElementById("hoverVideo");

  if (video) {
    const startVideo = () => {
      if (video.paused) {
        video.play().catch((error) => {});
      }
    };

    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("mouseenter", startVideo);
    video.addEventListener("mouseleave", stopVideo);
  }

  // Fokus funksjonalitet
  const articles = document.querySelectorAll("main article");

  // Setter fokuspunktet til 50 piksler fra toppen for maksimal følsomhet
  const focusThreshold = 350;

  const checkArticleFocus = () => {
    articles.forEach((article) => article.classList.remove("is-focused"));

    let targetArticle = articles[0];

    // Looper gjennom alle artikler
    for (let i = 0; i < articles.length; i++) {
      const currentArticle = articles[i];
      const rect = currentArticle.getBoundingClientRect();

      // Når toppen av artikkelen har passerer fokuslinjen (350px fra toppen)
      if (rect.top <= focusThreshold) {
        targetArticle = currentArticle;
      } else {
        // Stopper loopen
        break;
      }
    }

    // Gir fokus til den funnede artikkelen
    if (targetArticle) {
      targetArticle.classList.add("is-focused");
    }
  };

  window.addEventListener("scroll", checkArticleFocus);
  window.addEventListener("resize", checkArticleFocus);

  checkArticleFocus();
});
