import {FC, useState} from "react";
import classNames from "classnames";

import styles from './FavoritesButton.module.scss';

import {ReactComponent as IconStar} from "assets/IconStar.svg";


export const FavoritesButton: FC = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    };

    const iconClass = classNames(styles.iconStar, {
        [styles.favorite]: isFavorite,
    });

    return (
        <button
            className={styles.favoritesButton}
            onClick={toggleFavorite}
        >
            <IconStar
                className={iconClass}
            />
        </button>
    )
}