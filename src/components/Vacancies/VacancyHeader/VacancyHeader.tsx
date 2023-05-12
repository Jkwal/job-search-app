import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from './VacancyHeader.module.scss';

import {FavoritesButton} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";


export const VacancyHeader: FC = () => {
    return (
        <div className={styles.vacancyHeader}>

            <NavLink to={'/'} className={styles.about}>
                <h2 className={styles.title}>Менеджер-дизайнер</h2>

                <div className={styles.info}>
                    <p className={styles.salary}>з/п от 70000 rub</p>
                    <IconDot/>
                    <p className={styles.rate}>Полный рабочий день</p>
                </div>

                <div className={styles.location}>
                    <IconLocation/>
                    <p className={styles.address}>Новый Уренгой</p>
                </div>
            </NavLink>

            <FavoritesButton/>

        </div>
    )
}