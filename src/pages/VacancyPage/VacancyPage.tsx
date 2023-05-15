import {FC} from "react";

import styles from './VacancyPage.module.scss';

import {VacancyCard} from "components";


export const VacancyPage: FC = () => {
    return (
        <section className={styles.vacancyPage}>
            <VacancyCard/>
        </section>
    )
}

