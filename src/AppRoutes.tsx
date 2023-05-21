import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {NotFoundPage} from "./pages/NotFoundPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {VacancyPage} from "./pages/VacancyPage/VacancyPage";

import {ROUTES} from "./utils";
import {ICatalogues, IVacancies, IVacancy} from "./types";
import {EmptyPage} from "./pages/EmptyPage/EmptyPage";


interface AppRoutesProps {
  activePage: number,
  isLoading: boolean,
  vacancies: IVacancies,
  catalogues: ICatalogues[],
  favoriteVacancies: IVacancy[],
  handleSearch: (searchValue: string) => void,
  addFavoriteVacancy: (vacancy: IVacancy) => void,
  removeFavoriteVacancy: (vacancy: IVacancy) => void,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  handleFilters: (paymentFrom: string, paymentTo: string, selectedCatalogue: string) => void,
}


export const AppRoutes: FC<AppRoutesProps> = ({
                                                setPage,
                                                isLoading,
                                                vacancies,
                                                activePage,
                                                catalogues,
                                                handleSearch,
                                                handleFilters,
                                                favoriteVacancies,
                                                addFavoriteVacancy,
                                                removeFavoriteVacancy
                                              }) => {

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <HomePage
            isLoading={isLoading}

            vacancies={vacancies}
            catalogues={catalogues}

            setPage={setPage}
            activePage={activePage}

            handleSearch={handleSearch}
            handleFilters={handleFilters}

            favoriteVacancies={favoriteVacancies}
            addFavoriteVacancy={addFavoriteVacancy}
            removeFavoriteVacancy={removeFavoriteVacancy}
          />
        }
      />
      <Route
        path={ROUTES.VACANCY}
        element={
          <VacancyPage
            favoriteVacancies={favoriteVacancies}
            addFavoriteVacancy={addFavoriteVacancy}
            removeFavoriteVacancy={removeFavoriteVacancy}
          />
        }
      />
      <Route
        path={ROUTES.FAVORITES}
        element={
          favoriteVacancies.length === 0
            ? <EmptyPage/>
            : <FavoritesPage
              favoriteVacancies={favoriteVacancies}
              addFavoriteVacancy={addFavoriteVacancy}
              removeFavoriteVacancy={removeFavoriteVacancy}
            />
        }
      />
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
};