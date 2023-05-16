import {FC, ReactNode} from "react";
import classNames from 'classnames';

import styles from './PrimaryButton.module.scss';


type ButtonSize = 'small' |'medium'| 'large';

interface ButtonProps {
    children: ReactNode,
    size: ButtonSize;
    type?:"button" | "submit" | "reset"
}


export const PrimaryButton: FC<ButtonProps> = ({children, size,type}) => {

    const buttonClasses = classNames({
        [styles.buttonSmall]: size === 'small',
        [styles.buttonMedium]: size === 'medium',
        [styles.buttonLarge]: size === 'large',
    });

    return (
        <button type={type} className={buttonClasses}>
            {children}
        </button>
    );
};