import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";
import {VacancyDescription} from "../VacancyDescription/VacancyDescription";

interface VacancyCardProps {
  vacancy: IVacancy
}

export const VacancyCard: FC<VacancyCardProps> = ({vacancy}) => {
  return (
    <div className={styles.vacancyCard}>
      <VacancyHeader vacancy={vacancy} useOtherStyles={true}/>
      <VacancyDescription vacancy={vacancy}/>
    </div>
  )
}