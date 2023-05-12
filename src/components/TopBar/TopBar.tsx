import {FC} from "react";

import styles from './TopBar.module.scss';

import {ROUTES} from "utils";
import {Link, Logo} from "common";


export const TopBar: FC = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.links}>
                        <Link path={ROUTES.HOME} name='Поиск Вакансий'/>

                        <Link path={ROUTES.FAVORITES} name='Избранное'/>
                </ul>
            </div>
        </div>
    )
}