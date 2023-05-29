import React from "react";
import {ICatalogues, IFilters, IVacancies, IVacancy} from "types";

export interface IAppContext {
  isInit: boolean,
  filters: IFilters,
  isLoading: boolean,
  activePage: number,
  vacancies: IVacancies,
  catalogues: ICatalogues[],
  favoriteVacancies: IVacancy[],
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setIsInit: React.Dispatch<React.SetStateAction<boolean>>,
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setVacancies: React.Dispatch<React.SetStateAction<IVacancies>>,
  setCatalogues: React.Dispatch<React.SetStateAction<ICatalogues[]>>,
  setFavoriteVacancies: React.Dispatch<React.SetStateAction<IVacancy[]>>,
}