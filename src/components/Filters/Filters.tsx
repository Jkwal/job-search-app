import {FC} from "react";

import styles from './Filters.module.scss';

import {NumberInput, PrimaryButton, ResetButton, Select} from "common";

export const Filters: FC = () => {
    return (
        <div className={styles.filters}>
            <div className={styles.header}>
                <h3 className={styles.title}>Фильтры</h3>
                <ResetButton/>
            </div>

            <div className={styles.body}>
                <div className={styles.select}>
                    <h4>Отрасль</h4>
                    <Select/>
                </div>
                <div className={styles.numberInput}>
                    <h4>Оклад</h4>
                    <div className={styles.inputs}>
                        <NumberInput placeholder='От'/>
                        <NumberInput placeholder='До'/>
                    </div>
                </div>
                <PrimaryButton size='large'>Применить</PrimaryButton>
            </div>


        </div>
    )
}