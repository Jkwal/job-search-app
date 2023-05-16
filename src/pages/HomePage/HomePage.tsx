import {FC, useEffect, useState} from "react";

import styles from './HomePage.module.scss';

import {Vacancies} from "types";
import {Pagination} from "common";
import {fetchVacancies} from "utils";
import {Filters, ListJob, Search} from "components";


export const HomePage: FC = () => {

    const [activePage, setPage] = useState(1);
    const [value, setValue] = useState('')
    const [vacancies, setVacancies] = useState<Vacancies>({objects: []});

    useEffect(() => {
        fetchVacancies(activePage, value).then(data => setVacancies(data))
    }, [activePage, value]);


    const onSearch = (e: any) => {
        setValue(e.target.value)
    }

    return (
        <section className={styles.homePage}>

            <Filters/>

            <div className={styles.list}>
                <Search value={value} onChange={onSearch}/>
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
