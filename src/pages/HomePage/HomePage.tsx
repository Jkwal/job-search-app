import React, {FC, useContext, useState} from "react";

import styles from './HomePage.module.scss';

import {IFilters} from "types";
import {findCountPage} from "utils";
import {Loader, Pagination} from "common";
import {appContext} from "context/app.context";
import {Empty, Filters, ListJob, Search} from "components";


export const HomePage: FC = () => {

  const {
    setPage,
    vacancies,
    activePage,
    setFilters
  } = useContext(appContext);

  const [form, setForm] = useState<IFilters>({
    keyword: '',
    paymentTo: '',
    paymentFrom: '',
    selectedCatalogue: '',
  });

  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      keyword: e.target.value
    });
  };

  const handlePaymentTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value >= 0) {
      setForm({
        ...form,
        paymentTo: e.target.value
      });
    }

  };
  const handlePaymentFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value >= 0) {
      setForm({
        ...form,
        paymentFrom: e.target.value
      });
    }
  };

  const handleReset = () => {
    setForm({
      ...form,
      keyword: '',
      paymentTo: '',
      paymentFrom: '',
      selectedCatalogue: '',
    });
    handleResetFilters();
  }

  const handleFilters = (keyword: string, paymentFrom: string, paymentTo: string, selectedCatalogue: string) => {
    setFilters(prev => ({
      ...prev,
      keyword: keyword,
      paymentTo: paymentTo,
      paymentFrom: paymentFrom,
      selectedCatalogue: selectedCatalogue
    }));
    setPage(1);
  };

  const handleResetFilters = () => {
    setFilters(prev => ({
      ...prev,
      keyword: '',
      paymentTo: '',
      paymentFrom: '',
      selectedCatalogue: ''
    }));
    setPage(1);
  }

  return (

    <section className={styles.homePage}>

      <Filters
        filters={form}
        setFilters={setForm}
        onSubmit={handleFilters}
        handleReset={handleReset}
        handlePaymentTo={handlePaymentTo}
        handlePaymentFrom={handlePaymentFrom}
      />

      <div className={styles.list}>
        <Search
          filters={form}
          onSubmit={handleFilters}
          handleKeyword={handleKeyword}
        />

        {
          vacancies.objects === null
            ? <Loader/>
            : (
              vacancies.objects?.length
                ? <>
                  <ListJob/>

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
                : <Empty isButton={false}/>
            )
        }
      </div>

    </section>
  )
}
