import {FC} from "react";

import styles from './HomePage.module.scss';

import {Filters, Search} from "components";
import {JobList} from "../../components/Vacancies/JobList/JobList";


export const HomePage: FC = () => {
    return (
        <section className={styles.homePage}>
            <Filters/>
            <div className={styles.list}>
                <Search/>
                <JobList/>
            </div>

        </section>
    )
}
