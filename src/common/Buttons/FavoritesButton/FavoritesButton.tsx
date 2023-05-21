import {FC} from "react";
import classNames from "classnames";

import styles from "./FavoritesButton.module.scss";

import {ReactComponent as IconStar} from "assets/IconStar.svg";


interface FavoritesButtonProps {
  onClick: () => void,
  isFavorite1: boolean,
}


export const FavoritesButton: FC<FavoritesButtonProps> = ({
                                                            onClick,
                                                            isFavorite1}) => {

  const iconClass = classNames(styles.iconStar, {
    [styles.favorite]: isFavorite1,
  });

  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick} className={styles.favoritesButton}>

      <IconStar className={iconClass} />

    </button>
  );
};