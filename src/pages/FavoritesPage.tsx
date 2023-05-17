import { FC } from "react";

import { IVacancy } from "types";
import { VacancyHeader } from "components/Vacancies/VacancyHeader/VacancyHeader";

interface FavoritesPageProps {
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
  isFavorite1: boolean;
}

export const FavoritesPage: FC<FavoritesPageProps> = ({isFavorite1,
                                                        favoriteVacancies,
                                                        removeFavoriteVacancy,
                                                        addFavoriteVacancy,
                                                      }) => {
  return (
    <>
      <div>
        {favoriteVacancies.map((vacancy) => (
          <VacancyHeader
            isFavorite1={isFavorite1}
            key={vacancy.id}
            vacancy={vacancy}
            addFavoriteVacancy={addFavoriteVacancy}
            removeFavoriteVacancy={removeFavoriteVacancy}
          />
        ))}
      </div>
    </>
  );
};