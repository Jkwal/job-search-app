import {createContext, FC, ReactNode, useMemo, useState} from "react";

import {getFavoritesToLocalStorage} from "utils";
import {IAppContext, ICatalogues, IFilters, IVacancies, IVacancy} from "types";


interface AppProviderProps {
	children: ReactNode,
}

export const AppContext = createContext<IAppContext | null>(null);


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

	const value = useMemo(() => (
		{
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
		}
	), [
		isInit,
		filters,
		isLoading,
		activePage,
		vacancies,
		catalogues,
		favoriteVacancies
	])

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
}

