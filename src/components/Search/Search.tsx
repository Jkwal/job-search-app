import React, {FC} from "react";

import styles from './Search.module.scss';

import {IFilters} from "types";
import {Input, PrimaryButton} from "common";
import {ReactComponent as IconSearch} from "assets/IconSearch.svg";


interface SearchProps {
	form: IFilters,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	onSubmit: (keyword: string, paymentTo: string, paymentFrom: string, selectedCatalogue: string) => void,
}


export const Search: FC<SearchProps> = ({form, onSubmit, onChange,}) => {

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(form.keyword, form.paymentFrom, form.paymentTo, form.selectedCatalogue);
	};

	return (
		<form className={styles.search} onSubmit={handleSubmit}>

			<IconSearch className={styles.icon}/>

			<Input
				name="keyword"
				onChange={onChange}
				value={form.keyword}
				placeholder='Введите название вакансии'
			/>

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