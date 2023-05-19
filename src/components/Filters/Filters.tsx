import React, {FC, useState} from "react";

import styles from './Filters.module.scss';

import {ICatalogues} from "types";
import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

interface FiltersProps {
  catalogues: ICatalogues[],
  onSubmit: (paymentFrom: string, paymentTo: string, selectedCatalogue: string) => void;
}


export const Filters: FC<FiltersProps> = ({catalogues, onSubmit}) => {

  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');
  const [selectedCatalogue, setSelectedCatalogue] = useState('');

  const handlePaymentFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFrom(e.target.value);
  };
  const handlePaymentToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentTo(e.target.value);
  };
  const handleSelectedCatalogueChange = (value: string) => {
    setSelectedCatalogue(value);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paymentFrom, paymentTo, selectedCatalogue);
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <ResetButton/>
      </div>

      <div className={styles.body}>
        <div className={styles.select}>
          <h3>Отрасль</h3>
          <Select
            catalogues={catalogues}
            onChange={handleSelectedCatalogueChange}/>
        </div>
        <div className={styles.numberInput}>
          <h3>Оклад</h3>
          <div className={styles.inputs}>
            <NumberInput
              value={paymentFrom}
              onChange={handlePaymentFromChange}
              placeholder='От'
            />
            <NumberInput
              value={paymentTo}
              onChange={handlePaymentToChange}
              placeholder='До'
            />
          </div>
        </div>
        <PrimaryButton type='submit' size='large'>Применить</PrimaryButton>
      </div>
    </form>
  )
}