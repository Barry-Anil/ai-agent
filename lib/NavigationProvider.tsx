'use client';

import {createContext, useState} from 'react'

interface NavigationContextType {
    isMobileNavOpen: boolean;
    setIsMobileNavOpen: (open: boolean) => void;
    closeMobileView: () => void;
}

export const NavigationContext = createContext<NavigationContextType>({
    isMobileNavOpen: false,
    setIsMobileNavOpen: () => {},
    closeMobileView: () => {}, 
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const closeMobileView = () => setIsMobileNavOpen(false)

  return (
    <NavigationContext
      value={{ isMobileNavOpen, setIsMobileNavOpen, closeMobileView }}
    >
        {children}
    </NavigationContext>
  )
}

