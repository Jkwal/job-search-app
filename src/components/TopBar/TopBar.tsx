import {FC} from "react";

import styles from './TopBar.module.scss';

import {ROUTES} from "utils";
import {IVacancy} from "types";
import {Burger, Indicator, Link, Logo} from "common";


interface TopBarProps {
    favoriteVacancies: IVacancy[],
}


export const TopBar: FC<TopBarProps> = ({favoriteVacancies}) => {
    return (
        <div className={styles.topBar}>

            <Logo path={ROUTES.HOME} name='Jobored'/>


            <ul className={styles.links}>
                <Link path={ROUTES.HOME} name='Поиск Вакансий'/>

                <Indicator disabled={favoriteVacancies.length === 0}>
                    <Link path={ROUTES.FAVORITES} name='Избранное'/>
                </Indicator>

            </ul>

            <div className={styles.burger}>
                    <Burger favoriteVacancies={favoriteVacancies}/>
            </div>

        </div>
    )
}