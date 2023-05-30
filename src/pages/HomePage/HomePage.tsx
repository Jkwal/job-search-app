import React, {FC, useContext, useState} from "react";

import styles from './HomePage.module.scss';

import {IFilters} from "types";
import {AppContext} from "context";
import {findCountPage} from "utils";
import {Loader, Pagination} from "common";
import {Empty, Filters, ListJob, Search} from "components";


export const HomePage: FC = () => {

	const {
		setPage,
		vacancies,
		activePage,
		setFilters
	} = useContext(AppContext);

	const [form, setForm] = useState<IFilters>({
		keyword: '',
		paymentTo: '',
		paymentFrom: '',
		selectedCatalogue: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'keyword' || 'paymentTo' || 'paymentFrom') {
			setForm({
				...form,
				[e.target.name]: e.target.value
			})
		}
	};

	const handleSelectedCatalogue = (value: string) => {
		setForm({
			...form,
			selectedCatalogue: value
		});
	};

	const handleFilters = (keyword: string, paymentFrom: string, paymentTo: string, selectedCatalogue: string) => {
		setFilters(prev => ({
			...prev,
			keyword: keyword,
			paymentTo: paymentTo,
			paymentFrom: paymentFrom,
			selectedCatalogue: selectedCatalogue
		}));
		setPage(1);
	};

	const handleReset = () => {
		setForm({
			keyword: '',
			paymentTo: '',
			paymentFrom: '',
			selectedCatalogue: ''
		});
		setFilters({
			keyword: '',
			paymentTo: '',
			paymentFrom: '',
			selectedCatalogue: ''
		});
		setPage(1);
	};


	return (

		<section className={styles.homePage}>

			<Filters
				form={form}
				onChange={handleChange}
				onSubmit={handleFilters}
				handleReset={handleReset}
				handleSelectedCatalogue={handleSelectedCatalogue}
			/>

			<div className={styles.list}>
				<Search
					form={form}
					onChange={handleChange}
					onSubmit={handleFilters}
				/>

				{
					vacancies.objects === null
						? <Loader/>
						: (
							vacancies.objects?.length
								? <>
									<ListJob/>

									<div className={styles.pagination}>
										{
											vacancies.more && <Pagination
                            value={activePage}
                            onChange={setPage}
                            total={findCountPage(vacancies)}
                        />
										}
									</div>
								</>
								: <Empty isButton={false}/>
						)
				}
			</div>

		</section>
	)
}
