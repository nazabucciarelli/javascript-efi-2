import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState();
  const toggleDarkMode = () => { setDarkMode(!darkMode); };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
