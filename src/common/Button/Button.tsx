import {FC, ReactNode} from "react";
import classNames from 'classnames';

import styles from './Button.module.scss';


type ButtonSize = 'small' | 'medium';

interface ButtonProps {
    children: ReactNode,
    size: ButtonSize;
}


export const Button: FC<ButtonProps> = ({children, size}) => {

    const buttonClasses = classNames({
        [styles.buttonSmall]: size === 'small',
        [styles.buttonMedium]: size === 'medium',
    });

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
};