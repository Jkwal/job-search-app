import {FC, useEffect, useState} from "react";
import {IVacancy} from "types";
import {useStyles} from "./useStyles";
import {FavoritesButton, Loader} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";

interface VacancyHeaderProps {
  useOtherStyles?: boolean;
  vacancy: IVacancy;
  addFavoriteVacancy: (vacancy: IVacancy) => void;
  removeFavoriteVacancy: (vacancy: IVacancy) => void;
  isFavorite1: boolean;

}

export const VacancyHeader: FC<VacancyHeaderProps> = ({
                                                        useOtherStyles,
                                                        vacancy,
                                                        removeFavoriteVacancy,
                                                        addFavoriteVacancy,
                                                        isFavorite1,
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
    profession,
    payment_from,
    payment_to,
    currency,
    type_of_work,
    town,
  } = vacancy;

  const [isFavorite, setIsFavorite] = useState(isFavorite1);

  useEffect(() => {
    setIsFavorite(isFavorite1);
  }, [isFavorite1]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addFavoriteVacancy(vacancy);
    } else {
      removeFavoriteVacancy(vacancy);
    }
  };

  return (
    <div className={vacancyHeaderClasses}>
      {!id ? (
        <Loader/>
      ) : (
        <>
          <ContainerComponent to={`/vacancy/${id}`} className={aboutClasses}>
            <h2 className={titleClasses}>{profession}</h2>

            <div className={infoClasses}>
              <p className={salaryClasses}>
                {payment_to === 0 && payment_from === 0
                  ? "з/п не указана"
                  : `з/п
                      ${payment_from === 0 ? "" : `от ${payment_from}`}
                      ${payment_to === 0 ? "" : `до ${payment_to}`}
                      ${currency === "rub" && " руб"}`}
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
            onClick={handleFavoriteClick}
            isFavorite1={isFavorite}
          />
        </>
      )}
    </div>
  );
};