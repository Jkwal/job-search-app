import {FC} from "react";

import {IVacancy} from "types";
import {VacancyHeader} from "components/Vacancies/VacancyHeader/VacancyHeader";


interface FavoritesPageProps {
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}


export const FavoritesPage: FC<FavoritesPageProps> = ({
                                                        favoriteVacancies,
                                                        addFavoriteVacancy,
                                                        removeFavoriteVacancy
                                                      }) => {
  return (
    <>
      <div>

        {
          favoriteVacancies.map((vacancy) => (
            <VacancyHeader
              key={vacancy.id}
              vacancy={vacancy}
              isFavorite1={true}
              addFavoriteVacancy={addFavoriteVacancy}
              removeFavoriteVacancy={removeFavoriteVacancy}
            />
          ))
        }

      </div>
    </>
  );
};