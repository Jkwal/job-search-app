import {FC, useContext} from "react";

import styles from "./ListJob.module.scss";

import {AppContext} from "context";
import {VacancyHeader} from "components";

export const ListJob: FC = () => {
	const {vacancies} = useContext(AppContext);


	return (
		<div className={styles.listJob}>
			{
				vacancies.objects?.map((item) => (
					<VacancyHeader
						key={item.id}
						vacancy={{...item}}
						dataElem={`vacancy-${item.id}`}
					/>
				))
			}
		</div>
	);
};