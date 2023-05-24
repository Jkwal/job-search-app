import React, {FC, useState} from "react";

import styles from './HomePage.module.scss';

import {findCountPage} from "utils";
import {Loader, Pagination} from "common";
import {Empty, Filters, ListJob, Search} from "components";
import {ICatalogues, IFilters, IVacancies, IVacancy} from "types";


interface HomePageProps {
    activePage: number,
    isLoading: boolean,
    vacancies: IVacancies,
    catalogues: ICatalogues[],
    favoriteVacancies: IVacancy[],
    handleResetFilters: () => void,
    addFavoriteVacancy: (vacancy: IVacancy) => void,
    removeFavoriteVacancy: (vacancy: IVacancy) => void,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    handleFilters: (keyword: string, paymentFrom: string, paymentTo: string, selectedCatalogue: string) => void,
}


export const HomePage: FC<HomePageProps> = ({
                                                setPage,
                                                isLoading,
                                                vacancies,
                                                activePage,
                                                catalogues,
                                                handleFilters,
                                                favoriteVacancies,
                                                addFavoriteVacancy,
                                                handleResetFilters,
                                                removeFavoriteVacancy
                                            }) => {


    const [filters, setFilters] = useState<IFilters>({
        keyword: '',
        paymentTo: '',
        paymentFrom: '',
        selectedCatalogue: '',
    });

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prev => ({
            ...prev,
            keyword: e.target.value
        }));
    };

    const handlePaymentTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0) {
            setFilters(prev => ({
                ...prev,
                paymentTo: e.target.value
            }));
        }

    };
    const handlePaymentFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0) {
            setFilters(prev => ({
                ...prev,
                paymentFrom: e.target.value
            }));
        }
    };

    const handleReset = () => {
        setFilters(prev => ({
            ...prev,
            keyword: '',
            paymentTo: '',
            paymentFrom: '',
            selectedCatalogue: '',
        }));
        handleResetFilters();
    }

    return (

        <section className={styles.homePage}>

            <Filters
                filters={filters}
                setFilters={setFilters}
                catalogues={catalogues}
                onSubmit={handleFilters}
                handleReset={handleReset}
                handlePaymentTo={handlePaymentTo}
                handlePaymentFrom={handlePaymentFrom}
            />

            <div className={styles.list}>
                <Search
                    filters={filters}
                    onSubmit={handleFilters}
                    handleKeyword={handleKeyword}
                />

                {
                    isLoading || vacancies.objects === null
                        ? <Loader/>
                        : (
                            vacancies.objects?.length
                                ? <>
                                    <ListJob
                                        isLoading={isLoading}
                                        vacancies={vacancies}
                                        favoriteVacancies={favoriteVacancies}
                                        addFavoriteVacancy={addFavoriteVacancy}
                                        removeFavoriteVacancy={removeFavoriteVacancy}
                                    />

                                    <div className={styles.pagination}>
                                        {
                                            vacancies.more && <Pagination
                                                total={findCountPage(vacancies)}
                                                value={activePage}
                                                onChange={setPage}
                                            />
                                        }
                                    </div>
                                </>
                                : <Empty/>
                        )
                }
            </div>

        </section>
    )
}
