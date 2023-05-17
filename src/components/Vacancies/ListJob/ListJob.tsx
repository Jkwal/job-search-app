import {FC} from "react";

import styles from './ListJob.module.scss';

import {IVacancies, IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


interface ListJobProps {
    vacancies: IVacancies;
    addFavoriteVacancy: (vacancy: IVacancy) => void;
    removeFavoriteVacancy: (vacancy: IVacancy) => void;
    isFavorite1: boolean;
}


export const ListJob: FC<ListJobProps> = ({isFavorite1,removeFavoriteVacancy, vacancies,addFavoriteVacancy}) => {

    return (
        <div className={styles.listJob}>
            {
                vacancies.objects.map((item) => (
                    <VacancyHeader  isFavorite1={isFavorite1} removeFavoriteVacancy={removeFavoriteVacancy} key={item.id} vacancy={{...item} } addFavoriteVacancy={addFavoriteVacancy}/>
                ))
            }
        </div>
    )
}