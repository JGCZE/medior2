'use client';
import { ReactNode, createContext, useContext, useState, FC } from 'react';

type GlobalContextType = {
  userId: number | null;
  setId: (id: number | null) => void;
  userName: string;
  setUserName: (userName: string) => void;
};

type GlobalProviderProps = {
  children: ReactNode;
};

/*
  Pro lepší čitelnost to skládej podle abecedy a funkce až na konec.
  Prázdnými řádky odděluj funkční kusy kódů.
*/
const defaultGlobalContextValue: GlobalContextType = {
  userId: null,
  setId: () => {},
  userName: '',
  setUserName: () => {},
};

const GlobalContext = createContext<GlobalContextType>(defaultGlobalContextValue);

const GlobalContextProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [userId, setId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string>('');

  return (
    <GlobalContext.Provider value={{ userId, setId, userName, setUserName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  /*
    Třeba tady bych dal před return context; prázdný řádek
  */
  return context;
};

export { GlobalContextProvider };
