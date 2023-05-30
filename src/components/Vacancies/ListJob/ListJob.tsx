import {FC, useContext} from "react";

import styles from "./ListJob.module.scss";

import {AppContext} from "context";
import {VacancyHeader} from "components";

export const ListJob: FC = () => {
  const {vacancies, favoriteVacancies} = useContext(AppContext);

  const favoriteVacancyId = favoriteVacancies.map((fav) => fav.id);

  return (
    <div className={styles.listJob}>
      {
        vacancies.objects?.map((item) => (
          <VacancyHeader
            key={item.id}
            vacancy={{...item}}
            dataElem={`vacancy-${item.id}`}
            isFavorite1={favoriteVacancyId.includes(item.id)}
          />
        ))
      }
    </div>
  );
};