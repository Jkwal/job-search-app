import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";

import {NotFoundPage} from "./pages/NotFoundPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {FavoritesPage} from "./pages/FavoritesPage";
import {VacancyPage} from "./pages/VacancyPage/VacancyPage";

import {ROUTES} from "./utils";
import {IVacancy} from "./types";
import {EmptyPage} from "./pages/EmptyPage/EmptyPage";

interface AppRoutesProps {
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}

export const AppRoutes: FC<AppRoutesProps> = ({
                                                favoriteVacancies,
                                                addFavoriteVacancy,
                                                removeFavoriteVacancy,
                                              }) => {

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <HomePage
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