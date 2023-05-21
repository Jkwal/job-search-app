import React, {FC, useState} from "react";

import styles from './Filters.module.scss';

import {ICatalogues} from "types";
import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

interface FiltersProps {
  catalogues: ICatalogues[],
  onSubmit: (
    paymentTo: string,
    paymentFrom: string,
    selectedCatalogue: string) => void,
}


export const Filters: FC<FiltersProps> = ({onSubmit, catalogues}) => {

  const [paymentTo, setPaymentTo] = useState('');
  const [paymentFrom, setPaymentFrom] = useState('');
  const [selectedCatalogue, setSelectedCatalogue] = useState('');

  const handlePaymentTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentTo(e.target.value);
  };
  const handlePaymentFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFrom(e.target.value);
  };
  const handleSelectedCatalogue = (value: string) => {
    setSelectedCatalogue(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paymentFrom, paymentTo, selectedCatalogue);
  };

  const handleReset = () => {
    setPaymentTo("");
    setPaymentFrom("");
    setSelectedCatalogue("");
  };

  return (
    <form
      onReset={handleReset}
      onSubmit={handleSubmit}
      className={styles.filters}
    >

      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>

        <ResetButton/>
      </div>

      <div className={styles.body}>
        <div className={styles.select}>
          <h3>Отрасль</h3>

          <Select
            catalogues={catalogues}
            value={selectedCatalogue}
            onChange={handleSelectedCatalogue}
          />
        </div>

        <div className={styles.numberInputs}>
          <h3>Оклад</h3>
          <div className={styles.inputs}>

            <NumberInput
              placeholder='От'
              value={paymentFrom}
              onChange={handlePaymentFrom}
            />
            <NumberInput
              placeholder='До'
              value={paymentTo}
              onChange={handlePaymentTo}
            />

          </div>
        </div>

        <PrimaryButton type='submit' size='large'>Применить</PrimaryButton>
      </div>

    </form>
  )
}