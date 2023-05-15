import classNames from "classnames";
import {NavLink} from "react-router-dom";

import styles from './VacancyHeader.module.scss';
import otherStyles from './OtherVacancyHeader.module.scss';


export const useStyles = (useOtherStyles: boolean) => {

    const ContainerComponent = useOtherStyles ? "div" : NavLink;

    const vacancyHeaderClasses = classNames(styles.vacancyHeader, {
        [otherStyles.vacancyHeader]: useOtherStyles,
    });

    const aboutClasses = classNames(styles.about, {
        [otherStyles.about]: useOtherStyles,
    });

    const titleClasses = classNames(styles.title, {
        [otherStyles.title]: useOtherStyles,
    });

    const infoClasses = classNames(styles.info, {
        [otherStyles.info]: useOtherStyles,
    });

    const salaryClasses = classNames(styles.salary, {
        [otherStyles.salary]: useOtherStyles,
    });

    const rateClasses = classNames(styles.rate, {
        [otherStyles.rate]: useOtherStyles,
    });

    const locationClasses = classNames(styles.location, {
        [otherStyles.location]: useOtherStyles,
    });

    const addressClasses = classNames(styles.address, {
        [otherStyles.address]: useOtherStyles,
    });

    return (
        {
            ContainerComponent,
            vacancyHeaderClasses,
            aboutClasses,
            titleClasses,
            infoClasses,
            salaryClasses,
            rateClasses,
            locationClasses,
            addressClasses
        }
    )
};