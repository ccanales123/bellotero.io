import React, { Component } from "react";
import CarouselContext from "./CarouselContext";

class CarouselProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 0,
      totalItems: 0
    };

    this.goTo = this.goTo.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.setTotalItems = this.setTotalItems.bind(this);
  }

  render() {
    const { state, goTo, goToNext, goToPrev, setTotalItems } = this;
    const { children } = this.props;
    const exposedMethods = {
      ...state,
      goTo,
      goToNext,
      goToPrev,
      setTotalItems
    };

    return (
      <CarouselContext.Provider value={exposedMethods}>
        {children}
      </CarouselContext.Provider>
    );
  }

  goTo(newIndex) {
    this.setState({
      activeItem: newIndex
    });
  }

  goToNext() {
    const { activeItem, totalItems } = this.state;
    const newIndex = activeItem + 1;

    if (newIndex >= totalItems) {
      return null;
    }

    this.goTo(newIndex);
  }

  goToPrev() {
    const { activeItem } = this.state;
    const newIndex = activeItem - 1;

    if (newIndex < 0) {
      return null;
    }

    this.goTo(newIndex);
  }

  setTotalItems(newTotal) {
    if (newTotal === this.state.totalItems) {
      return null;
    }

    this.setState({
      totalItems: newTotal
    });
  }
}

export default CarouselProvider;