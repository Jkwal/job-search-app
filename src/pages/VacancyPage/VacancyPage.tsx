import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import styles from './VacancyPage.module.scss';

import {getVacancy} from "api";
import {IVacancy} from "types";
import {VacancyCard} from "components";


interface VacancyPageProps {
  favoriteVacancies: IVacancy[],
  addFavoriteVacancy: (vacancy: IVacancy) => void,
  removeFavoriteVacancy: (vacancy: IVacancy) => void,
}


export const VacancyPage: FC<VacancyPageProps> = ({

                                                    favoriteVacancies,
                                                    addFavoriteVacancy,
                                                    removeFavoriteVacancy
                                                  }) => {


  const {id} = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy);

  const isFavorite = favoriteVacancies.some((fav) => fav.id === vacancy.id);

  useEffect(() => {
    setIsLoading(true)

    getVacancy(id!).then(data => setVacancy(data))

      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (

    <section className={styles.vacancyPage}>

      <VacancyCard
        dataElem={`vacancy-${id}`}
        vacancy={vacancy}
        isLoading={isLoading}
        isFavorite1={isFavorite}
        addFavoriteVacancy={addFavoriteVacancy}
        removeFavoriteVacancy={removeFavoriteVacancy}
      />

    </section>
  )
}

