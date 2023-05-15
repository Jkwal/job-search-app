import {FC} from "react";

import styles from './ListJob.module.scss';

import {VacancyHeader} from "../VacancyHeader/VacancyHeader";

export const ListJob: FC = () => {
    return (
        <div className={styles.listJob}>
            <VacancyHeader/>
            <VacancyHeader/>
            <VacancyHeader/>
            <VacancyHeader/>
        </div>
    )
}