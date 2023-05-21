import {FC} from "react";

import styles from './VacancyDescription.module.scss';

import {Loader} from "common";
import {IVacancy} from "types";


interface VacancyDescriptionProps {
  isLoading: boolean,
  vacancy: IVacancy,
}


export const VacancyDescription: FC<VacancyDescriptionProps> = ({isLoading, vacancy}) => {

  const {vacancyRichText} = vacancy;
  const parsedMarkup = vacancyRichText ? vacancyRichText.replace(/<br\s*\/?>/gi, "") : '';

  return (
    <div className={styles.vacancyDescription}>
      {
        isLoading
          ? <Loader/>
          : <div
            className={styles.vacancyRichText}
            dangerouslySetInnerHTML={{__html: parsedMarkup}}>
          </div>
      }
    </div>
  )
}