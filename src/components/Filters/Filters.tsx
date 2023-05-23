import React, {FC} from "react";

import styles from './Filters.module.scss';

import {ICatalogues, IFilters} from "types";
import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

interface FiltersProps {
    filters: IFilters,
    catalogues: ICatalogues[],
    handleReset: () => void,
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>,
    handlePaymentTo: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePaymentFrom: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (keyword: string, paymentTo: string, paymentFrom: string, selectedCatalogue: string) => void,
}


export const Filters: FC<FiltersProps> = ({
                                              filters,
                                              onSubmit,
                                              catalogues,
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
        onSubmit(filters.keyword, filters.paymentFrom, filters.paymentTo, filters.selectedCatalogue);
    };
//  Todo добавить валидацию для отрицательных значений
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
                        catalogues={catalogues}
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
                        />
                        <NumberInput
                            placeholder='До'
                            value={filters.paymentTo}
                            onChange={handlePaymentTo}
                        />

                    </div>
                </div>

                <PrimaryButton type='submit' size='large'>Применить</PrimaryButton>
            </div>

        </form>
    )
}