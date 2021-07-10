import React from "react";
import { CarouselConsumer } from "../../../context/carousel";

const NextButton = ({ onClick, ...props }) => (
  <CarouselConsumer>
    {({ goToNext }) => (
      <div className="Rectangle-Next"
        {...props}
        onClick={(e) => {
          goToNext();
          onClick && onClick(e);
        }}
      />
    )}
  </CarouselConsumer>
);

export default NextButton;