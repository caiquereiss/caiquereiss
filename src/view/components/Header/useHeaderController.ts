import { useState } from "react";


export function useHeaderController() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { handleToggleMenu, isMenuOpen }
}
