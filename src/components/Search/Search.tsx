import React, {FC} from "react";

import styles from './Search.module.scss';

import {IFilters} from "types";
import {Input, PrimaryButton} from "common";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";


interface SearchProps {
  filters: IFilters,
  handleKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (keyword: string, paymentTo: string, paymentFrom: string, selectedCatalogue: string) => void,
}


export const Search: FC<SearchProps> = ({
                                          filters,
                                          onSubmit,
                                          handleKeyword,
                                        }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(filters.keyword, filters.paymentFrom, filters.paymentTo, filters.selectedCatalogue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>

      <IconSearch className={styles.icon}/>

      <Input value={filters.keyword} onChange={handleKeyword} placeholder='Введите название вакансии'/>

      <PrimaryButton
        size='small'
        type='submit'
        dataElem={'search-button'}
      >
        Поиск
      </PrimaryButton>

    </form>
  )
}