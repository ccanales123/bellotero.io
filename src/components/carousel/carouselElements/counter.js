import React from "react";
import { CarouselConsumer } from "../../../context/carousel";

const Counter = ({ onClick, ...props }) => (
  <CarouselConsumer>
     
    {({ activeItem, totalItems }) => (
       <div className="Rectangle-Counter">
        <p className="Counter-Text">{activeItem + 1} of {totalItems}</p>
        </div>
    )} 
  </CarouselConsumer>
);

export default Counter;
