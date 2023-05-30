import {FC, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import styles from './VacancyPage.module.scss';

import {getVacancy} from "api";
import {IVacancy} from "types";
import {AppContext} from "context";
import {VacancyCard} from "components";


export const VacancyPage: FC = () => {
	const {setIsLoading} = useContext(AppContext);

	const {id} = useParams();

	const [vacancy, setVacancy] = useState<IVacancy>({} as IVacancy);

	useEffect(() => {
		setIsLoading(true)

		getVacancy(id!).then(data => setVacancy(data))

			.finally(() => {
				setIsLoading(false);
			});
	}, [id, setIsLoading]);

	return (

		<section className={styles.vacancyPage}>

			<VacancyCard
				vacancy={vacancy}
				dataElem={`vacancy-${id}`}
			/>

		</section>
	)
}

