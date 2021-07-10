import React from "react";
import { CarouselProvider } from "../../../context/carousel";


const Carousel = ({ children }) => (
  <CarouselProvider>
    <div className={"carousel"}>{children}</div>
  </CarouselProvider>
);

export default Carousel;
