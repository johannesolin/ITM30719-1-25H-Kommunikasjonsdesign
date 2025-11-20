document.addEventListener("DOMContentLoaded", () => {
  // 1. Hover-to-Play video funksjonalitet (Uendret)
  const video = document.getElementById("hoverVideo");
  const overlay = document.querySelector(".video-overlay");

  const hideOverlay = () => {
    if (overlay) {
      overlay.classList.add("is-hidden");
    }
  };

  const showOverlay = () => {
    if (overlay) {
      overlay.classList.remove("is-hidden");
    }
  };

  if (video) {
    const startVideo = () => {
      if (video.paused) {
        video.play().then(hideOverlay).catch((error) => {});
      } else {
        hideOverlay();
      }
    };

    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
      showOverlay();
    };

    video.addEventListener("mouseenter", startVideo);
    video.addEventListener("mouseleave", stopVideo);
    video.addEventListener("play", hideOverlay);
    video.addEventListener("pause", showOverlay);
    video.addEventListener("ended", showOverlay);
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
