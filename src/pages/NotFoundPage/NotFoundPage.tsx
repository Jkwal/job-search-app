import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from './NotFoundPage.module.scss';

import {ROUTES} from "utils";
import {PrimaryButton} from "common";
import {ReactComponent as IconBalloon} from "assets/IconBalloon.svg";


export const NotFoundPage: FC = () => {
	return (
		<section className={styles.notFoundPage}>
			<IconBalloon/>

			<p className={styles.text}>Страница не найдена</p>

			<PrimaryButton type='button' size='medium'>
				<NavLink to={ROUTES.HOME}>Поиск Вакансий</NavLink>
			</PrimaryButton>
		</section>
	)
}


