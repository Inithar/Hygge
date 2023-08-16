import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactNode, useRef, useState } from "react";
import SlickSlider, { Settings } from "react-slick";

import { Icon } from "../Icon/Icon";
import { Container } from "./Slider.styled";

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
            <Icon src="/icons/arrow-prev.svg" paddingSize="md" variation="fill" />
          </button>
          <button onClick={sliderRef?.slickNext} aria-label="Next slide">
            <Icon src="/icons/arrow-next.svg" paddingSize="md" variation="fill" />
          </button>
        </div>
      )}

      <SlickSlider ref={setSliderRef} {...settings} arrows={false} swipeEvent={swipeEvent}>
        {children}
      </SlickSlider>
    </Container>
  );
};
