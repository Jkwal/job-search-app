import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";
import {VacancyDescription} from "../VacancyDescription/VacancyDescription";

interface VacancyCardProps {
  vacancy: IVacancy;
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
  isFavorite1: boolean;
}

export const VacancyCard: FC<VacancyCardProps> = ({isFavorite1,removeFavoriteVacancy,vacancy,addFavoriteVacancy}) => {
  return (
    <div className={styles.vacancyCard}>
      <VacancyHeader   isFavorite1={isFavorite1} removeFavoriteVacancy={removeFavoriteVacancy} vacancy={vacancy} useOtherStyles={true} addFavoriteVacancy={addFavoriteVacancy}/>
      <VacancyDescription vacancy={vacancy}/>
    </div>
  )
}