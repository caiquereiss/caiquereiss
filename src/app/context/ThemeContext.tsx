import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Defina o tipo do tema
type Theme = 'light' | 'dark';

// Crie um contexto para o tema
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const initialTheme: Theme = localStorage.getItem('theme') as Theme || 'light';

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const rootElement = document.documentElement;
  if (theme === 'dark') {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
