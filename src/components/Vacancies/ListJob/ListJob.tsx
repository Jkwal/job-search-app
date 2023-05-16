import {FC} from "react";

import styles from './ListJob.module.scss';

import {Vacancies} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


interface ListJobProps {
    vacancies: Vacancies;
}


export const ListJob: FC<ListJobProps> = ({vacancies}) => {

    return (
        <div className={styles.listJob}>
            {
                vacancies.objects.map((item) => (
                    <VacancyHeader key={item.id} vacancy={{...item}}/>
                ))
            }
        </div>
    )
}