import {ICatalogues, IFilters, IVacancies, IVacancy, TypeSetState} from "types";

export interface IAppContext {
	isInit: boolean,
	filters: IFilters,
	isLoading: boolean,
	activePage: number,
	vacancies: IVacancies,
	catalogues: ICatalogues[],
	favoriteVacancies: IVacancy[],
	setPage: TypeSetState<number>,
	setIsInit: TypeSetState<boolean>,
	setFilters: TypeSetState<IFilters>,
	setIsLoading: TypeSetState<boolean>,
	setVacancies: TypeSetState<IVacancies>,
	setCatalogues: TypeSetState<ICatalogues[]>,
	setFavoriteVacancies: TypeSetState<IVacancy[]>,
}

export interface IThemeContext {
	isDark: boolean,
	setIsDark?: TypeSetState<boolean>,
}