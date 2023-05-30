import {FC} from "react";

import styles from './VacancyCard.module.scss';

import {IVacancy} from "types";
import {VacancyDescription, VacancyHeader} from "components";


interface VacancyCardProps {
	dataElem: string,
	vacancy: IVacancy,
}


export const VacancyCard: FC<VacancyCardProps> = ({vacancy, dataElem,}) => {
	return (
		<div className={styles.vacancyCard}>

			<VacancyHeader
				vacancy={vacancy}
				dataElem={dataElem}
				useOtherStyles={true}
			/>

			<VacancyDescription
				vacancy={vacancy}
			/>

		</div>
	)
}