import {FC} from "react";
import classNames from "classnames";

import styles from "./FavoritesButton.module.scss";

import {ReactComponent as IconStar} from "assets/IconStar.svg";


interface FavoritesButtonProps {
  dataElem: string,
  onClick: () => void,
  isFavorite1: boolean,
}


export const FavoritesButton: FC<FavoritesButtonProps> = ({
                                                            onClick,
                                                            dataElem,
                                                            isFavorite1
                                                          }) => {

  const iconClass = classNames(styles.iconStar, {
    [styles.favorite]: isFavorite1,
  });

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      data-elem={`${dataElem}-shortlist-button`}
      onClick={handleClick}
      className={styles.favoritesButton}
    >

      <IconStar className={iconClass}/>

    </button>
  );
};