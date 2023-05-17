import React, {FC, useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "./pages/NotFoundPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage";

import { ROUTES } from "./utils";
import { IVacancy } from "./types";

export const AppRoutes: FC = () => {
  const [favoriteVacancies, setFavoriteVacancies] = useState<IVacancy[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteVacancies");
    if (storedFavorites) {
      setFavoriteVacancies(JSON.parse(storedFavorites));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("favoriteVacancies", JSON.stringify(favoriteVacancies));
  }, [favoriteVacancies]);

  const addFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (!isFavorite) {
      setFavoriteVacancies((prevVacancies) => [...prevVacancies, vacancy]);
    }
  };

  const removeFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (isFavorite) {
      setFavoriteVacancies((prevVacancies) =>
        prevVacancies.filter((item) => item.id !== vacancy.id)
      );
    }
  };

  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <HomePage
            isFavorite1={false}
            removeFavoriteVacancy={removeFavoriteVacancy}
            addFavoriteVacancy={addFavoriteVacancy}
          />
        }
      />
      <Route
        path={ROUTES.VACANCY}
        element={
          <VacancyPage
            isFavorite1={false}
            removeFavoriteVacancy={removeFavoriteVacancy}
            addFavoriteVacancy={addFavoriteVacancy}
          />
        }
      />
      <Route
        path={ROUTES.FAVORITES}
        element={
          <FavoritesPage
            isFavorite1={true}
            favoriteVacancies={favoriteVacancies}
            addFavoriteVacancy={addFavoriteVacancy}
            removeFavoriteVacancy={removeFavoriteVacancy}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};