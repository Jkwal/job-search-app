import {FC} from "react";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";

import styles from './Search.module.scss';

import {Input, PrimaryButton} from "common";


export const Search: FC = () => {
    return (
        <div className={styles.search}>
            <div>
                <IconSearch className={styles.icon}/>
            </div>
            <Input placeholder='Введите название вакансии'/>
            <PrimaryButton size='small'>Поиск</PrimaryButton>
        </div>
    )
}