import React, { Children, cloneElement } from "react";
import memoize from "memoize-one";

const addSliderClassToElement = memoize(element => {
  return cloneElement(element, {
    className: "slide"
  });
});

const Slider = ({ children, setTotalItems, activeItem }) => {
  const totalItems = Children.count(children);
  setTotalItems(totalItems);

  return (
    <div
      className={"slider"}
      style={{
        transform: `translate3d(-${activeItem * 100}%,0,0)`
      }}
    >
      {children.map(children => addSliderClassToElement(children))}
    </div>
  );
};

export default Slider;