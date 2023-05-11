import {FC} from "react";

import styles from './JobList.module.scss';

import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


export const JobList: FC = () => {
    return (
        <div className={styles.jobList}>
            <VacancyHeader/>
            <VacancyHeader/>
            <VacancyHeader/>
            <VacancyHeader/>
        </div>
    )
}