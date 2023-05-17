import {FC, useEffect, useState} from "react";

import styles from './VacancyPage.module.scss';

import {IVacancy} from "types";
import {getVacancy} from "utils";
import {VacancyCard} from "components";
import {useParams} from "react-router-dom";


export const VacancyPage: FC = () => {

  const {id} = useParams();
  const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy)

  useEffect(() => {

    getVacancy(id!).then(data => setVacancy(data))

  }, [id])

  return (

    <section className={styles.vacancyPage}>
      <VacancyCard vacancy={vacancy}/>
    </section>
  )
}

