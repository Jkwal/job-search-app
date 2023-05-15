import {FC} from "react";

import styles from './HomePage.module.scss';

import {Pagination} from "common";
import {Filters, ListJob, Search} from "components";


export const HomePage: FC = () => {
    return (
        <section className={styles.homePage}>

            <Filters/>

            <div className={styles.list}>
                <Search/>
                <ListJob/>
                <div className={styles.pagination}>
                    <Pagination/>
                </div>
            </div>

        </section>
    )
}
