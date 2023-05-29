import {createContext, FC, ReactNode, useState} from "react";

import {IAppContext, ICatalogues, IFilters, IVacancies, IVacancy} from "types";
import {getFavoritesToLocalStorage} from "utils";


interface AppProviderProps {
  children: ReactNode,
}

export const appContext = createContext<IAppContext | null>(null);


export const AppProvider: FC<AppProviderProps> = ({children}) => {
  const [isInit, setIsInit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [activePage, setPage] = useState(1);

  const [catalogues, setCatalogues] = useState<ICatalogues[]>([]);
  const [vacancies, setVacancies] = useState<IVacancies>({objects: null});
  const [favoriteVacancies, setFavoriteVacancies] = useState<IVacancy[]>(getFavoritesToLocalStorage());

  const [filters, setFilters] = useState<IFilters>({
    keyword: '',
    paymentTo: '',
    paymentFrom: '',
    selectedCatalogue: '',
  });

  return (
    <appContext.Provider value={{
      isInit,
      filters,
      isLoading,
      activePage,
      vacancies,
      catalogues,
      favoriteVacancies,
      setPage,
      setIsInit,
      setFilters,
      setIsLoading,
      setVacancies,
      setCatalogues,
      setFavoriteVacancies
    }}>
      {children}
    </appContext.Provider>
  );
}

