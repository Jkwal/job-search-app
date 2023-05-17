import {FC} from "react";

import {IVacancy} from "types";
import {useStyles} from "./useStyles";
import {FavoritesButton, Loader} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";


interface VacancyHeaderProps {
  useOtherStyles?: boolean;
  vacancy: IVacancy;
}


export const VacancyHeader: FC<VacancyHeaderProps> = ({useOtherStyles, vacancy}) => {

  const {
    infoClasses,
    rateClasses,
    titleClasses,
    aboutClasses,
    salaryClasses,
    addressClasses,
    locationClasses,
    ContainerComponent,
    vacancyHeaderClasses
  } = useStyles(useOtherStyles!);


  const {
    id,
    profession,
    payment_from,
    payment_to,
    currency,
    type_of_work,
    town
  } = vacancy;


  return (
    <div className={vacancyHeaderClasses}>
      {
        !id
          ? <Loader/>
          : <>
            <ContainerComponent to={`/vacancy/${id}`} className={aboutClasses}>

              <h2 className={titleClasses}>{profession}</h2>

              <div className={infoClasses}>
                <p className={salaryClasses}>
                  {
                    payment_to === 0 && payment_from === 0
                      ? 'з/п не указана'
                      : (`з/п
                        ${payment_from === 0 ? "" : `от ${payment_from}`}
                        ${payment_to === 0 ? "" : `до ${payment_to}`}
                        ${currency === 'rub' && ' руб'}`)
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

            <FavoritesButton/>
          </>
      }
    </div>
  )
}