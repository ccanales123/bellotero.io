import React from "react";
import { CarouselConsumer } from "../../../context/carousel";
import Slider from "./Slider.js";

const ConnectedSlider = props => (
  <CarouselConsumer>
    {({ setTotalItems, activeItem }) => (
      <Slider
        {...props}
        setTotalItems={setTotalItems}
        activeItem={activeItem}
      />
    )}
  </CarouselConsumer>
);

export default ConnectedSlider;
