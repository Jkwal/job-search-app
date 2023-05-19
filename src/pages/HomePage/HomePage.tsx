import React, {FC, useEffect, useState} from "react";

import styles from './HomePage.module.scss';

import {ICatalogues, IVacancies, IVacancy} from "types";
import {fetchVacancies, getCatalogues} from "utils";
import {Loader, Pagination} from "common";
import {Filters, ListJob, Search} from "components";
import {EmptyPage} from "../EmptyPage/EmptyPage";

interface HomePageProps {
  favoriteVacancies: IVacancy[];
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}

export const HomePage: FC<HomePageProps> = ({favoriteVacancies, removeFavoriteVacancy, addFavoriteVacancy}) => {

  const [keyword, setKeyword] = useState('');
  const [activePage, setPage] = useState(1);
  const [vacancies, setVacancies] = useState<IVacancies>({objects: null});
  const [catalogues, setCatalogues] = useState<ICatalogues[]>([]);

  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [selectedCatalogue, setSelectedCatalogue] = useState('');


  useEffect(() => {
    getCatalogues().then(data => setCatalogues(data));
  }, [])

  useEffect(() => {
    fetchVacancies(activePage, keyword, paymentFrom, paymentTo, selectedCatalogue).then(data => setVacancies(data))
  }, [activePage, keyword, paymentFrom, paymentTo, selectedCatalogue]);


  const handleSearch = (searchValue: string) => {
    setKeyword(searchValue)
    setPage(1)
  };

  const handleFilter = (paymentFrom: string, paymentTo: string, selectedCatalogue: string) => {
    setPaymentFrom(paymentFrom);
    setPaymentTo(paymentTo);
    setSelectedCatalogue(selectedCatalogue);
    setPage(1);
  };

  const countPage = (vacancies.total && vacancies.total <= 500) ? (vacancies.total / 4) : (500 / 4)

  return (
    <section className={styles.homePage}>

      <Filters catalogues={catalogues} onSubmit={handleFilter}/>

      <div className={styles.list}>

        <Search onSubmit={handleSearch}/>

        {
          (() => {
            if (vacancies.objects) return <Loader/>;
            return !vacancies.objects.length ? <EmptyPage/> :
              <>
                <ListJob
                  vacancies={vacancies}
                  favoriteVacancies={favoriteVacancies}
                  addFavoriteVacancy={addFavoriteVacancy}
                  removeFavoriteVacancy={removeFavoriteVacancy}
                />

                <div className={styles.pagination}>
                  {
                    !!vacancies.total
                    && <Pagination
                          value={activePage}
                          onChange={setPage}
                          total={
                            countPage
                          }/>
                  }
                </div>
              </>
          })()
        }

      </div>

    </section>
  )
}
