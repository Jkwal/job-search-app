import React, {FC, useContext} from "react";

import styles from './Filters.module.scss';

import {IFilters} from "types";
import {AppContext, ThemeContext} from "context";
import {NumberInput, PrimaryButton, ResetButton, Select} from "common";
import cn from "classnames";

interface FiltersProps {
    form: IFilters,
    handleReset: () => void,
    handleSelectedCatalogue: (value: string) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (keyword: string, paymentTo: string, paymentFrom: string, selectedCatalogue: string) => void,
}


export const Filters: FC<FiltersProps> = ({
                                              form,
                                              onChange,
                                              onSubmit,
                                              handleReset,
                                              handleSelectedCatalogue
                                          }) => {
    const {isDark} = useContext(ThemeContext);
    const {catalogues} = useContext(AppContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form.keyword, form.paymentFrom, form.paymentTo, form.selectedCatalogue);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(styles.filters, {
                [styles.dark]: isDark
            })}
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
                        value={form.selectedCatalogue}
                        onChange={handleSelectedCatalogue}
                    />
                </div>

                <div className={styles.numberInputs}>
                    <h3>Оклад</h3>
                    <div className={styles.inputs}>

                        <NumberInput
                            placeholder='От'
                            name="paymentFrom"
                            onChange={onChange}
                            value={form.paymentFrom}
                            dataElem={'salary-from-input'}
                        />
                        <NumberInput
                            placeholder='До'
                            name="paymentTo"
                            onChange={onChange}
                            value={form.paymentTo}
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