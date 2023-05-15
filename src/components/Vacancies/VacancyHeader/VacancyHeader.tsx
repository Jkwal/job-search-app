import {FC} from "react";

import {useStyles} from "./useStyles";
import {FavoritesButton} from "common";
import {ReactComponent as IconDot} from "assets/IconDot.svg";
import {ReactComponent as IconLocation} from "assets/IconLocation.svg";


interface VacancyHeaderProps {
    useOtherStyles?: boolean;
}


export const VacancyHeader: FC<VacancyHeaderProps> = ({useOtherStyles}) => {

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


    return (
        <div className={vacancyHeaderClasses}>

            <ContainerComponent to={'/vacancy/1'} className={aboutClasses}>
                <h2 className={titleClasses}>Менеджер-дизайнер</h2>

                <div className={infoClasses}>
                    <p className={salaryClasses}>з/п от 70000 rub</p>
                    <IconDot/>
                    <p className={rateClasses}>Полный рабочий день</p>
                </div>

                <div className={locationClasses}>
                    <IconLocation/>
                    <p className={addressClasses}>Новый Уренгой</p>
                </div>
            </ContainerComponent>

            <FavoritesButton/>

        </div>
    )
}