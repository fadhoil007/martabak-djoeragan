import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    // Observe initial elements
    const observeAll = () => {
      const elements = document.querySelectorAll(".reveal:not(.visible)");
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observe
    observeAll();

    // Re-observe after a short delay to catch any late-rendered elements
    const timer = setTimeout(observeAll, 200);

    // MutationObserver to handle dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
