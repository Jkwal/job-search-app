import {FC, useContext} from "react";

import styles from './VacancyDescription.module.scss';

import {Loader} from "common";
import {IVacancy} from "types";
import {appContext} from "context/AppContext";


interface VacancyDescriptionProps {
  vacancy: IVacancy,
}


export const VacancyDescription: FC<VacancyDescriptionProps> = ({vacancy}) => {
  const {isLoading} = useContext(appContext);

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