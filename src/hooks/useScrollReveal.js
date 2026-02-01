import { useEffect } from "react";

export function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}
