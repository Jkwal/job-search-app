import React, {FC} from "react";

import styles from './FavoritesPage.module.scss';

import {IVacancy} from "types";
import {VacancyHeader} from "components/Vacancies/VacancyHeader/VacancyHeader";
import {Pagination} from "../../common";


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
      <section className={styles.favoritesPage}>

        <ul className={styles.list}>
          {
            favoriteVacancies.map((vacancy) => (
              <li key={vacancy.id}>
                <VacancyHeader
                  dataElem={`vacancy-${vacancy.id}`}
                  vacancy={vacancy}
                  isFavorite1={true}
                  addFavoriteVacancy={addFavoriteVacancy}
                  removeFavoriteVacancy={removeFavoriteVacancy}
                />
              </li>
            ))
          }
        </ul>

        <div className={styles.pagination}>
          {
            favoriteVacancies.length > 3 && <Pagination
                  total={3}
                  value={1}
                  onChange={() => {
                  }}
              />
          }
        </div>

      </section>
    </>
  );
};