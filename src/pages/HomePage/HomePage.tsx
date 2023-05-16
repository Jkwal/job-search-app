import React, {FC, useEffect, useState} from "react";

import styles from './HomePage.module.scss';

import {Vacancies} from "types";
import {Pagination} from "common";
import {fetchVacancies} from "utils";
import {Filters, ListJob, Search} from "components";


export const HomePage: FC = () => {

    const [keyword, setKeyword] = useState('');
    const [activePage, setPage] = useState(1);
    const [vacancies, setVacancies] = useState<Vacancies>({objects: []});

    useEffect(() => {
        fetchVacancies(activePage, keyword).then(data => setVacancies(data))
    }, [activePage, keyword]);


    const handleSearch = (searchValue: string) => {
       setKeyword(searchValue)
    };

    return (
        <section className={styles.homePage}>

            <Filters/>

            <div className={styles.list}>
                <Search onSubmit={handleSearch} />
                <ListJob vacancies={vacancies}/>
                <div className={styles.pagination}>
                    {
                        !!vacancies.total
                        && <Pagination
                            value={activePage}
                            onChange={setPage}
                            total={
                                (vacancies.total <= 500)
                                    ? (vacancies.total / 4)
                                    : (500 / 4)
                            }/>
                    }
                </div>
            </div>

        </section>
    )
}
