import React, {FC, useEffect, useState} from "react";

import styles from './HomePage.module.scss';

import {IVacancies, IVacancy} from "types";
import {fetchVacancies} from "utils";
import {Loader, Pagination} from "common";
import {Filters, ListJob, Search} from "components";

interface HomePageProps {
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
  isFavorite1: boolean;
}

export const HomePage: FC<HomePageProps> = ({isFavorite1, removeFavoriteVacancy,addFavoriteVacancy}) => {

  const [keyword, setKeyword] = useState('');
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancies>({objects: []});

  useEffect(() => {
    fetchVacancies(activePage, keyword).then(data => setVacancies(data))
  }, [activePage, keyword]);


  const handleSearch = (searchValue: string) => {
    setKeyword(searchValue)
    setPage(1)
  };

  return (
    <section className={styles.homePage}>

      <Filters/>

      <div className={styles.list}>

        <Search onSubmit={handleSearch}/>

        {
          vacancies.objects.length <= 0
            ? <Loader/>
            : <>
              <ListJob  isFavorite1={isFavorite1} removeFavoriteVacancy={removeFavoriteVacancy} addFavoriteVacancy={addFavoriteVacancy} vacancies={vacancies}/>
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
            </>
        }

      </div>

    </section>
  )
}
