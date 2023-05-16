import {FC} from "react";

import styles from './Filters.module.scss';

import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

export const Filters: FC = () => {
    return (
        <form className={styles.filters}>
            <div className={styles.header}>
                <h2 className={styles.title}>Фильтры</h2>
                <ResetButton/>
            </div>

            <div className={styles.body}>
                <div className={styles.select}>
                    <h3>Отрасль</h3>
                    <Select/>
                </div>
                <div className={styles.numberInput}>
                    <h3>Оклад</h3>
                    <div className={styles.inputs}>
                        <NumberInput placeholder='От'/>
                        <NumberInput placeholder='До'/>
                    </div>
                </div>
                <PrimaryButton size='large'>Применить</PrimaryButton>
            </div>
        </form>
    )
}