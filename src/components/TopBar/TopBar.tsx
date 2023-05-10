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
                    <li>
                        <Link to={ROUTES.HOME} name='Поиск Вакансий'/>
                    </li>
                    <li>
                        <Link to={ROUTES.FAVORITES} name='Избранное'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}