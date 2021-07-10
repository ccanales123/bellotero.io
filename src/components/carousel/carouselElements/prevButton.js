import React from "react";
import { CarouselConsumer } from "../../../context/carousel";

const PrevButton = ({ onClick, ...props }) => (
  <CarouselConsumer>
    {({ goToPrev }) => (
      <div className="Rectangle-Prev"
        {...props}
        onClick={(e) => {
          goToPrev();
          onClick && onClick(e);
        }}
      />
    )}
  </CarouselConsumer>
);

export default PrevButton;
