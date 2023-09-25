import { useState } from "react";

export function usePortfolioController() {

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  return { sliderState, setSliderState }
}
