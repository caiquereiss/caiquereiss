import { useState } from "react";
import { useTheme } from "../../../app/context/ThemeContext";


export function useHeaderController() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return { handleToggleMenu, isMenuOpen, theme, toggleTheme }
}
