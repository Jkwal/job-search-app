import {FC} from "react";

import styles from "./ListJob.module.scss";

import {IVacancies, IVacancy} from "types";
import {VacancyHeader} from "../VacancyHeader/VacancyHeader";


interface ListJobProps {
    isLoading: boolean,
    vacancies: IVacancies;
    favoriteVacancies: IVacancy[];
    addFavoriteVacancy: (vacancy: IVacancy) => void;
    removeFavoriteVacancy: (vacancy: IVacancy) => void;
}


export const ListJob: FC<ListJobProps> = ({
                                              isLoading,
                                              vacancies,
                                              favoriteVacancies,
                                              addFavoriteVacancy,
                                              removeFavoriteVacancy,
                                          }) => {

    const favoriteVacancyId = favoriteVacancies.map((fav) => fav.id);

    return (
        <div className={styles.listJob}>
            {
                vacancies.objects?.map((item) => (
                    <VacancyHeader
                        key={item.id}
                        vacancy={{...item}}
                        isLoading={isLoading}
                        dataElem={`vacancy-${item.id}`}
                        addFavoriteVacancy={addFavoriteVacancy}
                        removeFavoriteVacancy={removeFavoriteVacancy}
                        isFavorite1={favoriteVacancyId.includes(item.id)}
                    />
                ))
            }
        </div>
    );
};