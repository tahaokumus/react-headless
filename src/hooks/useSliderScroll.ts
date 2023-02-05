import { useEffect, useState, useRef, CSSProperties, useCallback } from "react";

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

export default function useSliderScroll(slideCount: number) {
  const sliderRef = useRef<HTMLElement>(null);
  const [slideState, setSlideState] = useState({
    currentSlideIndex: 0,
    isFixed: false,
    sliderPos: 0,
  });

  const { currentSlideIndex, isFixed, sliderPos } = slideState;

  const wrapperStyle: CSSProperties = isFixed
    ? { position: "fixed", top: "0" }
    : { position: "absolute", top: `${sliderPos}px` };

  const setCurrentSlideIndex = (index: number) => {
    setSlideState((prev) => ({ ...prev, currentSlideIndex: index }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(() => {
    if (sliderRef.current === null) return;

    const { scrollTop } = document.documentElement;
    const { offsetTop } = sliderRef.current;
    const index = Math.floor((scrollTop - offsetTop) / window.innerHeight);
    // console.log("index", index);
    // console.log("scrollTop", scrollTop, "offsetTop", offsetTop);

    if (index < 0) {
      setSlideState((prev) => ({ ...prev, sliderPos: 0 }));
    }

    if (index >= 0 && index < slideCount) {
      setSlideState((prev) => ({ ...prev, currentSlideIndex: index }));
    }

    if (index >= 0 && index < slideCount - 1) {
      setSlideState((prev) => ({
        ...prev,
        isFixed: true,
        sliderPos: Math.max(0, scrollTop - offsetTop),
      }));
    } else {
      setSlideState((prev) => ({
        ...prev,
        isFixed: false,
      }));
    }
  }, [slideCount, sliderRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    });

    if (sliderRef.current) {
      observer.observe(sliderRef.current as HTMLElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wrapperStyle, sliderRef, currentSlideIndex, setCurrentSlideIndex };
}
