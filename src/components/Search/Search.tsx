import {FC} from "react";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";

import styles from './Search.module.scss';

import {Input, PrimaryButton} from "common";

interface SearchProps{
    onChange:(e:any)=>void
    value:string
}

export const Search: FC<SearchProps> = ({onChange,value}) => {

    return (
        <div className={styles.search}>
            <div>
                <IconSearch className={styles.icon}/>
            </div>
            <Input value={value} onChange={onChange} placeholder='Введите название вакансии'/>
            <PrimaryButton size='small'>Поиск</PrimaryButton>
        </div>
    )
}