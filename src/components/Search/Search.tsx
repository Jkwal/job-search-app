import React, {FC, useState} from "react";

import styles from './Search.module.scss';

import {Input, PrimaryButton} from "common";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";


interface SearchProps {
  onSubmit: (searchValue: string) => void;
}


export const Search: FC<SearchProps> = ({onSubmit}) => {

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>

      <IconSearch className={styles.icon}/>

      <Input value={searchValue} onChange={handleChange} placeholder='Введите название вакансии'/>

      <PrimaryButton type='submit' size='small'>Поиск</PrimaryButton>

    </form>
  )
}