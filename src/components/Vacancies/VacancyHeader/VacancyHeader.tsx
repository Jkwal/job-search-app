import {FC, useEffect, useState} from "react";

import {IVacancy} from "types";
import {useStyles} from "./useStyles";
import {FavoritesButton, Loader} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";


interface VacancyHeaderProps {
  vacancy: IVacancy;
  isLoading?: boolean,
  isFavorite1: boolean;
  useOtherStyles?: boolean;
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
}

export const VacancyHeader: FC<VacancyHeaderProps> = ({
                                                        vacancy,
                                                        isLoading,
                                                        isFavorite1,
                                                        useOtherStyles,
                                                        addFavoriteVacancy,
                                                        removeFavoriteVacancy,
                                                      }) => {
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
    <div className={vacancyHeaderClasses}>
      {
        isLoading
          ? <Loader/>
          : <>
            <ContainerComponent to={`/vacancy/${id}`} className={aboutClasses}>

              <h2 className={titleClasses}>{profession}</h2>

              <div className={infoClasses}>
                <p className={salaryClasses}>
                  {
                    payment_from === 0 && payment_to === 0
                        ? "з/п по договоренности"
                        : payment_from === payment_to
                            ? `з/п 
                                ${payment_from}  ${currency === "rub" && " руб"}`
                            : `з/п
                                ${(payment_from > 0 && payment_to > 0) ? `${payment_from} - ${payment_to}` : ''}
                                ${(payment_from > 0 && payment_to === 0) ? `от ${payment_from}` : ''}
                                ${(payment_to > 0 && payment_from === 0) ? `до ${payment_to}` : ''}
                                ${currency === "rub" && " руб"}`
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
              onClick={handleFavorite}
              isFavorite1={isFavorite}
            />
          </>
      }
    </div>
  );
};