import { useEffect, useRef, useCallback } from "react";

// const throttle = (func: () => void, delay: number) => {
//   let prev = 0;

//   return () => {
//     const now = new Date().getTime();
//     if (now - prev > delay) {
//       prev = now;
//       return func();
//     }

//     return null;
//   };
// };

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export default function useHomepageHeroAnimation() {
  const handImageRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    if (handImageRef.current === null) return;

    const { scrollTop } = document.documentElement;
    const { offsetTop, clientHeight } = handImageRef.current;
    const { clientHeight: parentHeight } = handImageRef.current.parentElement as HTMLElement;

    if (scrollTop > offsetTop && scrollTop + clientHeight < parentHeight) {
      handImageRef.current.style.setProperty(
        "--translate-y",
        `${clamp(0, scrollTop - offsetTop, parentHeight - clientHeight - 100)}px`,
      );
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    });

    if (handImageRef.current) {
      observer.observe(handImageRef.current as HTMLElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { handImageRef };
}
