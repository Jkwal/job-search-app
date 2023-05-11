import {FC} from "react";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";

import styles from './Search.module.scss';

import {Button, Input} from "common";


export const Search: FC = () => {
    return (
        <div className={styles.search}>
            <div>
                <IconSearch className={styles.icon}/>
            </div>
            <Input placeholder='Введите название вакансии'/>
            <Button size='small'>Поиск</Button>
        </div>
    )
}