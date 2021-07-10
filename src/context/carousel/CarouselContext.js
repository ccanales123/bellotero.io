import { createContext } from "react";

export default createContext({
  activeItem: 0,
  totalItems: 0,
  goTo: () => null,
  goToNext: () => null,
  goToPrev: () => null,
  setTotalItems: () => null
});
