import React, {FC} from "react";

import styles from './Filters.module.scss';

import {IFilters} from "types";
import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

interface FiltersProps {
  filters: IFilters,
  handleReset: () => void,
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>,
  handlePaymentTo: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handlePaymentFrom: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (keyword: string, paymentTo: string, paymentFrom: string, selectedCatalogue: string) => void,
}


export const Filters: FC<FiltersProps> = ({
                                            filters,
                                            onSubmit,
                                            setFilters,
                                            handleReset,
                                            handlePaymentTo,
                                            handlePaymentFrom,
                                          }) => {


  const handleSelectedCatalogue = (value: string) => {
    setFilters(prev => ({
      ...prev,
      selectedCatalogue: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(
      filters.keyword,
      filters.paymentFrom,
      filters.paymentTo,
      filters.selectedCatalogue
    );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.filters}
    >

      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>

        <ResetButton onClick={handleReset}/>
      </div>

      <div className={styles.body}>
        <div className={styles.select}>
          <h3>Отрасль</h3>

          <Select
            value={filters.selectedCatalogue}
            onChange={handleSelectedCatalogue}
          />
        </div>

        <div className={styles.numberInputs}>
          <h3>Оклад</h3>
          <div className={styles.inputs}>

            <NumberInput
              placeholder='От'
              value={filters.paymentFrom}
              onChange={handlePaymentFrom}
              dataElem={'salary-from-input'}
            />
            <NumberInput
              placeholder='До'
              value={filters.paymentTo}
              onChange={handlePaymentTo}
              dataElem={'salary-to-input'}
            />

          </div>
        </div>

        <PrimaryButton
          size='large'
          type='submit'
          dataElem={"search-button"}
        >
          Применить
        </PrimaryButton>
      </div>

    </form>
  )
}