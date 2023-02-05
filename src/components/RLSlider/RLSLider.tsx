import React from "react";
import ComponentData from "@/types/ComponentData";
import useComponents from "@/hooks/useComponents";
import AsyncRenderer from "@/components/_AsyncRenderer";
import useSliderScroll from "@/hooks/useSliderScroll";
import "./RLSlider.scss";

interface SlideProps {
  image: string;
  alt: string;
  children: Array<ComponentData>;
}

interface RLSliderProps {
  slides: Array<SlideProps>;
}

function Slide({ image, alt, children }: SlideProps) {
  const components = useComponents(children);

  return (
    <div className="slide container">
      <div className="slide-content bg-dark">
        <AsyncRenderer components={components} />
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}

export default function RLSlider({ slides }: RLSliderProps) {
  const { wrapperStyle, sliderRef, currentSlideIndex } = useSliderScroll(slides.length);
  const currentSlide = slides[currentSlideIndex];

  return (
    <section
      className="rl-slider bg-black"
      style={{ height: `${slides.length * 100}vh`, marginTop: "100vh", marginBottom: "250vh" }}
      ref={sliderRef}
    >
      <div className="wrapper" style={wrapperStyle}>
        <Slide image={currentSlide.image} alt={currentSlide.alt}>
          {currentSlide.children}
        </Slide>

        <div className="container">
          <div className="slide-thumbs">
            {slides.map((_, index) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                role="presentation"
                className={`thumb ${currentSlideIndex === index ? "active" : ""}`}
                // onClick={() => setCurrentSlideIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
