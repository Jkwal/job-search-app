import {FC, ReactNode} from "react";
import classNames from 'classnames';

import styles from './PrimaryButton.module.scss';


type ButtonSize = 'small' | 'large';

interface ButtonProps {
    children: ReactNode,
    size: ButtonSize;
}


export const PrimaryButton: FC<ButtonProps> = ({children, size}) => {

    const buttonClasses = classNames({
        [styles.buttonSmall]: size === 'small',
        [styles.buttonLarge]: size === 'large',
    });

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
};