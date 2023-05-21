import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";
import {VacancyDescription} from "../VacancyDescription/VacancyDescription";


interface VacancyCardProps {
  vacancy: IVacancy,
  isLoading:boolean,
  isFavorite1: boolean,
  addFavoriteVacancy: (vacancy: IVacancy) => void,
  removeFavoriteVacancy: (vacancy: IVacancy) => void,
}


export const VacancyCard: FC<VacancyCardProps> = ({
                                                    vacancy,
                                                    isLoading,
                                                    isFavorite1,
                                                    addFavoriteVacancy,
                                                    removeFavoriteVacancy
                                                  }) => {
  return (
    <div className={styles.vacancyCard}>

      <VacancyHeader
        vacancy={vacancy}
        isLoading={isLoading}
        useOtherStyles={true}
        isFavorite1={isFavorite1}
        removeFavoriteVacancy={removeFavoriteVacancy}
        addFavoriteVacancy={addFavoriteVacancy}
      />

      <VacancyDescription
        vacancy={vacancy}
        isLoading={isLoading}
      />

    </div>
  )
}