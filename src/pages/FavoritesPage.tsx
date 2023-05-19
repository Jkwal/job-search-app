import { FC } from "react";

import { IVacancy } from "types";
import { VacancyHeader } from "components/Vacancies/VacancyHeader/VacancyHeader";

interface FavoritesPageProps {
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}

export const FavoritesPage: FC<FavoritesPageProps> = ({
                                                        favoriteVacancies,
                                                        removeFavoriteVacancy,
                                                        addFavoriteVacancy,
                                                      }) => {
  return (
    <>
      <div>
        {favoriteVacancies.map((vacancy) => (
          <VacancyHeader
            isFavorite1={true}
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