import React, {FC} from "react";

import styles from './HomePage.module.scss';

import {Pagination} from "common";
import {ICatalogues, IVacancies, IVacancy} from "types";
import {Empty, Filters, ListJob, Search} from "components";


interface HomePageProps {
  activePage: number,
  isLoading: boolean,
  vacancies: IVacancies,
  catalogues: ICatalogues[],
  favoriteVacancies: IVacancy[],
  handleSearch: (searchValue: string) => void,
  addFavoriteVacancy: (vacancy: IVacancy) => void,
  removeFavoriteVacancy: (vacancy: IVacancy) => void,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  handleFilters: (paymentFrom: string, paymentTo: string, selectedCatalogue: string) => void,
}


export const HomePage: FC<HomePageProps> = ({
                                              setPage,
                                              isLoading,
                                              vacancies,
                                              activePage,
                                              catalogues,
                                              handleSearch,
                                              handleFilters,
                                              favoriteVacancies,
                                              addFavoriteVacancy,
                                              removeFavoriteVacancy
                                            }) => {

  const countPage = (vacancies.total && vacancies.total <= 500) ? (vacancies.total / 4) : (500 / 4)

  return (
    <section className={styles.homePage}>

      <Filters catalogues={catalogues} onSubmit={handleFilters}/>

      <div className={styles.list}>
        <Search onSubmit={handleSearch}/>

        {
          !vacancies.objects.length
            ? <Empty/>
            : <>
              <ListJob
                isLoading={isLoading}
                vacancies={vacancies}
                favoriteVacancies={favoriteVacancies}
                addFavoriteVacancy={addFavoriteVacancy}
                removeFavoriteVacancy={removeFavoriteVacancy}
              />

              <div className={styles.pagination}>
                {
                  !!vacancies.total && <Pagination
                        total={countPage}
                        value={activePage}
                        onChange={setPage}
                    />
                }
              </div>
            </>
        }
      </div>

    </section>
  )
}
