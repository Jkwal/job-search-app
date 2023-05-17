import {FC} from "react";

import styles from './ListJob.module.scss';

import {IVacancies} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


interface ListJobProps {
    vacancies: IVacancies;
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