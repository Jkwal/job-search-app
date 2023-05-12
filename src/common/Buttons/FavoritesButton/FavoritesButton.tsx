import {FC} from "react";

import styles from './FavoritesButton.module.scss';

import {ReactComponent as IconStar} from "assets/IconStar.svg";

export const FavoritesButton:FC = () => {
    return (
        <button className={styles.favoritesButton}>
            <IconStar className={styles.iconStar}/>
        </button>
    )
}