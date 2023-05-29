import {FC, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import styles from './VacancyPage.module.scss';

import {getVacancy} from "api";
import {IVacancy} from "types";
import {VacancyCard} from "components";
import {appContext} from "context/AppContext";


export const VacancyPage: FC = () => {
  const {favoriteVacancies, setIsLoading} = useContext(appContext);


  const {id} = useParams();

  const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy);

  const isFavorite = favoriteVacancies.some((fav) => fav.id === vacancy.id);

  useEffect(() => {
    setIsLoading(true)

    getVacancy(id!).then(data => setVacancy(data))

      .finally(() => {
        setIsLoading(false);
      });
  }, [id, setIsLoading]);

  return (

    <section className={styles.vacancyPage}>

      <VacancyCard
        dataElem={`vacancy-${id}`}
        vacancy={vacancy}
        isFavorite1={isFavorite}
      />

    </section>
  )
}

