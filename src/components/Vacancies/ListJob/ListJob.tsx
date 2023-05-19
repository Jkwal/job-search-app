import {FC} from "react";

import styles from "./ListJob.module.scss";

import {IVacancies, IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


interface ListJobProps {
  vacancies: IVacancies;
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}


export const ListJob: FC<ListJobProps> = ({
                                            vacancies,
                                            favoriteVacancies,
                                            addFavoriteVacancy,
                                            removeFavoriteVacancy,
                                          }) => {

  const favoriteVacancyIds = favoriteVacancies.map((fav) => fav.id);

  return (
    <div className={styles.listJob}>
      {
        vacancies.objects.map((item) => (
          <VacancyHeader
            key={item.id}
            vacancy={{...item}}
            addFavoriteVacancy={addFavoriteVacancy}
            removeFavoriteVacancy={removeFavoriteVacancy}
            isFavorite1={favoriteVacancyIds.includes(item.id)}
          />
        ))
      }
    </div>
  );
};