import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAboutController() {
  const windowWidth = useWindowWidth();
  const [selectedTab, setSelectedTab] = useState<'education' | 'work'>('education');
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  return {
    windowWidth,
    selectedTab,
    setSelectedTab,
    sliderState,
    setSliderState
  }
}
