import React, {FC, useContext, useEffect, useState} from "react";

import styles from './FavoritesPage.module.scss';

import {Pagination} from "common";
import {AppContext} from "context";
import {VacancyHeader} from "components";


export const FavoritesPage: FC = () => {

	const {favoriteVacancies} = useContext(AppContext);

	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 4;
	const totalPages = Math.ceil(favoriteVacancies.length / itemsPerPage);

	const getPageItems = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return favoriteVacancies.slice(startIndex, endIndex);
	};

	useEffect(() => {
		if (currentPage > totalPages) {
			setCurrentPage(currentPage - 1);
		}
	}, [currentPage, totalPages]);

	return (
		<>
			<section className={styles.favoritesPage}>
				<ul className={styles.list}>
					{
						getPageItems().map((vacancy) => (
							<li className={styles.item} key={vacancy.id}>
								<VacancyHeader
									vacancy={vacancy}
									dataElem={`vacancy-${vacancy.id}`}
								/>
							</li>
						))
					}
				</ul>

				<div className={styles.pagination}>
					{
						favoriteVacancies.length >= itemsPerPage && (
							<Pagination
								total={totalPages}
								value={currentPage}
								onChange={setCurrentPage}
							/>
						)
					}
				</div>
			</section>
		</>
	);
};