import {FC, useContext, useEffect, useState} from "react";

import {IVacancy} from "types";
import {AppContext} from "context";
import {useStyles} from "./useStyles";
import {FavoritesButton, Loader, notification} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";
import {addFavoriteToLocalStorage, removeFromFavoriteToLocalStorage} from "utils";


interface VacancyHeaderProps {
  dataElem: string,
  vacancy: IVacancy,
  isFavorite1: boolean,
  useOtherStyles?: boolean,
}

export const VacancyHeader: FC<VacancyHeaderProps> = ({
                                                        vacancy,
                                                        dataElem,
                                                        isFavorite1,
                                                        useOtherStyles,
                                                      }) => {
  const {isLoading, favoriteVacancies, setFavoriteVacancies} = useContext(AppContext);

  const {
    infoClasses,
    rateClasses,
    titleClasses,
    aboutClasses,
    salaryClasses,
    addressClasses,
    locationClasses,
    ContainerComponent,
    vacancyHeaderClasses,
  } = useStyles(useOtherStyles!);

  const {
    id,
    town,
    currency,
    payment_to,
    profession,
    payment_from,
    type_of_work,
  } = vacancy;

  const [isFavorite, setIsFavorite] = useState(isFavorite1);

  const addFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (!isFavorite) {
      setFavoriteVacancies((prevVacancies) => [...prevVacancies, vacancy]);
      addFavoriteToLocalStorage(vacancy);
      notification("Вакансия добавлена в избранное")
    }
  };

  const removeFavoriteVacancy = (vacancy: IVacancy) => {
    const isFavorite = favoriteVacancies.some((item) => item.id === vacancy.id);
    if (isFavorite) {
      setFavoriteVacancies((prevVacancies) =>
        prevVacancies.filter((item) => item.id !== vacancy.id)
      );
      removeFromFavoriteToLocalStorage(vacancy)
      notification("Вакансия удалена из избранного")
    }
  };

  useEffect(() => {
    setIsFavorite(isFavorite1);
  }, [isFavorite1]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addFavoriteVacancy(vacancy);
    } else {
      removeFavoriteVacancy(vacancy);
    }
  };

  return (
    <div data-elem={dataElem} className={vacancyHeaderClasses}>
      {
        isLoading
          ? <Loader/>
          : <>
            <ContainerComponent
              to={`/vacancy/${id}`}
              className={aboutClasses}
            >

              <h2 className={titleClasses}>{profession}</h2>

              <div className={infoClasses}>
                <p className={salaryClasses}>
                  {
                    payment_from === 0 && payment_to === 0
                      ? "з/п по договоренности"
                      : payment_from === payment_to
                        ? `з/п 
                                ${payment_from}  ${currency}`
                        : `з/п
                                ${(payment_from > 0 && payment_to > 0) ? `${payment_from} - ${payment_to}` : ''}
                                ${(payment_from > 0 && payment_to === 0) ? `от ${payment_from}` : ''}
                                ${(payment_to > 0 && payment_from === 0) ? `до ${payment_to}` : ''}
                                ${currency}`
                  }
                </p>
                <IconDot/>
                <p className={rateClasses}>{type_of_work?.title}</p>
              </div>

              <div className={locationClasses}>
                <IconLocation/>
                <p className={addressClasses}>{town?.title}</p>
              </div>

            </ContainerComponent>

            <FavoritesButton
              dataElem={dataElem}
              onClick={handleFavorite}
              isFavorite1={isFavorite}
            />
          </>
      }
    </div>
  );
};