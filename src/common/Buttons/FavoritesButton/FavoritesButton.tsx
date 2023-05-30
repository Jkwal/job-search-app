import {FC} from "react";
import classNames from "classnames";

import styles from "./FavoritesButton.module.scss";

import {ReactComponent as IconStar} from "assets/IconStar.svg";


interface FavoritesButtonProps {
	dataElem: string,
	favorite: boolean,
	onClick: () => void,
}


export const FavoritesButton: FC<FavoritesButtonProps> = ({
																														onClick,
																														dataElem,
																														favorite
																													}) => {

	const iconClass = classNames(styles.iconStar, {
		[styles.favorite]: favorite,
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