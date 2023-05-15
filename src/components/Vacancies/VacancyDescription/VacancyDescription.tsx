import {FC} from "react";

import styles from './VacancyDescription.module.scss';

import {ListDescription} from "../ListDescription/ListDescription";




export const VacancyDescription: FC = () => {
    return (
        <div className={styles.vacancyDescription}>
            <ListDescription title='Обязанности:'/>
            <ListDescription title='Требования:'/>
            <ListDescription title='Условия:'/>
        </div>
    )
}