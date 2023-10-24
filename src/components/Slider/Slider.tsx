import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider, { Settings } from "react-slick";
import { ReactNode, useRef, useState } from "react";
import { MdOutlineKeyboardArrowRight as ArrowNext, MdOutlineKeyboardArrowLeft as ArrowPrev } from "react-icons/md";

import { Container, IconBox } from "./Slider.styled";

type SliderProps = {
  children: ReactNode;
  settings: Settings;
  gap?: string;
};

export const Slider = ({ settings, children, gap }: SliderProps) => {
  const [sliderRef, setSliderRef] = useState<SlickSlider | null>(null);
  const clickableRef = useRef(true);

  function handleClick(e: MouseEvent) {
    if (!clickableRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }

    clickableRef.current = true;
  }

  function swipeEvent() {
    if (sliderRef?.innerSlider?.list) {
      sliderRef.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  }

  return (
    <Container gap={gap}>
      {settings.arrows && (
        <div className="slider-controls">
          <button onClick={sliderRef?.slickPrev} aria-label="Previous slide">
            <IconBox>
              <ArrowPrev />
            </IconBox>
          </button>
          <button onClick={sliderRef?.slickNext} aria-label="Next slide">
            <IconBox>
              <ArrowNext />
            </IconBox>
          </button>
        </div>
      )}

      <SlickSlider ref={setSliderRef} {...settings} arrows={false} swipeEvent={swipeEvent}>
        {children}
      </SlickSlider>
    </Container>
  );
};
