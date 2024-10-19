import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalStateContextProps {
  isRequestOpen: boolean;
  setIsRequestOpen: (value: boolean) => void;
  isProductOpen: boolean;
  setIsProductOpen: (value: boolean) => void;
  loading: boolean; 
  setLoading: (value: boolean) => void; 
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isRequestOpen, setIsRequestOpen, isProductOpen, setIsProductOpen, loading, setLoading }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
