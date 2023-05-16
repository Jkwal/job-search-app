import React, {FC, useState} from "react";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";

import styles from './Search.module.scss';

import {Input, PrimaryButton} from "common";


interface SearchProps {
    onSubmit: (searchValue: string) => void;
}


export const Search: FC<SearchProps> = ({onSubmit}) => {

    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <form className={styles.search} onSubmit={handleSubmit}>
            <div>
                <IconSearch className={styles.icon}/>
            </div>
            <Input value={value} onChange={handleChange} placeholder='Введите название вакансии'/>
            <PrimaryButton type='submit' size='small'>Поиск</PrimaryButton>
        </form>
    )
}