import React, {FC, useEffect, useState} from "react";

import styles from './FavoritesPage.module.scss';

import {IVacancy} from "types";
import {Pagination} from "common";
import {VacancyHeader} from "components/Vacancies/VacancyHeader/VacancyHeader";


interface FavoritesPageProps {
    favoriteVacancies: IVacancy[],
    addFavoriteVacancy: (vacancy: IVacancy) => void,
    removeFavoriteVacancy: (vacancy: IVacancy) => void,
}


export const FavoritesPage: FC<FavoritesPageProps> = ({
                                                          favoriteVacancies,
                                                          addFavoriteVacancy,
                                                          removeFavoriteVacancy
                                                      }) => {

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
                                    isFavorite1={true}
                                    dataElem={`vacancy-${vacancy.id}`}
                                    addFavoriteVacancy={addFavoriteVacancy}
                                    removeFavoriteVacancy={removeFavoriteVacancy}
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