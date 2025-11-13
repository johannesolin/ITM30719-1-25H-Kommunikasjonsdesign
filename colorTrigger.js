// her er samtalen med ai som er brukt for å lage colorTrigger.js ChatGPT: https://chatgpt.com/share/6915bfd2-e1d8-8003-a2e1-271096d2ae8e

document.addEventListener("DOMContentLoaded", () => {
    const erikArticle = document.querySelector("#erik-article");
    if (!erikArticle) return;

    const body = document.body;
    body.style.transition = "background-color 0.8s ease";

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    // Scroller NED inn i Erik → RØDT
                    body.style.backgroundColor = "#4b0000";
                } else {
                    // Scroller OPP over starten av Erik → tilbake til original
                    const bounding = entry.boundingClientRect;

                    // Når toppen av Erik-artikkelen går UNDER toppen av skjermen
                    // betyr det at du har scrollet OPP igjen
                    if (bounding.top > 0) {
                        body.style.backgroundColor = "#002c50"; // originalfarge
                    }
                }

            });
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(erikArticle);
});
