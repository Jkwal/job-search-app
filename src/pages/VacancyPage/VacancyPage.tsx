import {FC, useEffect, useState} from "react";

import styles from './VacancyPage.module.scss';

import {IVacancy} from "types";
import {getVacancy} from "utils";
import {VacancyCard} from "components";
import {useParams} from "react-router-dom";

interface VacancyPageProps {
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
  favoriteVacancies: IVacancy[];
}

export const VacancyPage: FC<VacancyPageProps> = ({favoriteVacancies,removeFavoriteVacancy,addFavoriteVacancy}) => {

  const {id} = useParams();
  const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy)
  const isFavorite = favoriteVacancies.some((fav) => fav.id === vacancy.id);

  useEffect(() => {

    getVacancy(id!).then(data => setVacancy(data))

  }, [id])

  return (

    <section className={styles.vacancyPage}>
      <VacancyCard isFavorite1={isFavorite} removeFavoriteVacancy={removeFavoriteVacancy} addFavoriteVacancy={addFavoriteVacancy} vacancy={vacancy}/>
    </section>
  )
}

