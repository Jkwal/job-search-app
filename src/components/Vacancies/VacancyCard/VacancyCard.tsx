import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {IVacancy} from "types";
import {VacancyDescription, VacancyHeader} from "components";



interface VacancyCardProps {
  dataElem: string,
  vacancy: IVacancy,
  isFavorite1: boolean,
}


export const VacancyCard: FC<VacancyCardProps> = ({
                                                    vacancy,
                                                    dataElem,
                                                    isFavorite1,
                                                  }) => {
  return (
    <div className={styles.vacancyCard}>

      <VacancyHeader
        vacancy={vacancy}
        dataElem={dataElem}
        useOtherStyles={true}
        isFavorite1={isFavorite1}
      />

      <VacancyDescription
        vacancy={vacancy}
      />

    </div>
  )
}