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
        // Bruker .then() for å forsikre at overlay kun skjules ved vellykket avspilling
        video
          .play()
          .then(hideOverlay)
          .catch((error) => {});
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

  // 2. Fokus funksjonalitet (Uendret logikk)
  const articles = document.querySelectorAll("main article");

  // Setter fokuspunktet til 350 piksler fra toppen
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

  // 3. SCROLL REVEAL / FLY INN FUNKSJONALITET (Nytt)
  const mainArticles = document.querySelectorAll(".main-content article");
  // Setter terskelen for når elementet skal fly inn (150px fra bunnen av viewport)
  const revealThreshold = window.innerHeight - 150;

  const checkScrollReveal = () => {
    mainArticles.forEach((article) => {
      const rect = article.getBoundingClientRect();

      // Legger til "is-visible" klassen når elementet er innenfor revealThreshold
      // Det sjekkes også om elementet allerede har klassen, for å unngå unødvendige operasjoner
      if (
        rect.top <= revealThreshold &&
        !article.classList.contains("is-visible")
      ) {
        article.classList.add("is-visible");
      }
      // Valgfritt: Hvis du vil at de skal forsvinne når de scroller ut av syne (for å kunne vises igjen)
      // if (rect.bottom < 0 || rect.top > window.innerHeight) {
      //     article.classList.remove("is-visible");
      // }
    });
  };

  // Kombinerer funksjonene for scroll og resize events
  const handleScrollAndResize = () => {
    checkArticleFocus();
    checkScrollReveal();
  };

  window.addEventListener("scroll", handleScrollAndResize);
  window.addEventListener("resize", handleScrollAndResize);

  // Kjører funksjonene én gang ved oppstart for å sette initial state
  handleScrollAndResize();
});
