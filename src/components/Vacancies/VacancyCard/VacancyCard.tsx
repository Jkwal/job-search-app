import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {VacancyHeader} from "../VacancyHeader/VacancyHeader";
import {VacancyDescription} from "../VacancyDescription/VacancyDescription";


export const VacancyCard: FC = () => {
    return (
        <div className={styles.vacancyCard}>
            <VacancyHeader useOtherStyles={true}/>
            <VacancyDescription/>
        </div>
    )
}