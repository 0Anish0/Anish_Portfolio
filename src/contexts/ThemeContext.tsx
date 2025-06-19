import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on client side only
  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (!saved) {
        setIsDark(false);
        return;
      }
      
      try {
        // Try to parse as JSON first
        const parsedTheme = JSON.parse(saved);
        setIsDark(parsedTheme);
      } catch (error) {
        // If parsing fails, clean up localStorage and handle string values
        console.warn('Invalid theme data in localStorage, cleaning up...');
        localStorage.removeItem('theme');
        
        if (saved === 'dark' || saved === 'true') {
          setIsDark(true);
        } else if (saved === 'light' || saved === 'false') {
          setIsDark(false);
        } else {
          // Default fallback
          setIsDark(false);
        }
      }
    }
  }, []);

  // Save theme and apply to document
  useEffect(() => {
    if (!mounted) return;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(isDark));
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark, mounted]);

  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 