import {FC, ReactNode} from "react";
import classNames from 'classnames';

import styles from './PrimaryButton.module.scss';


type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
    size: ButtonSize,
    type: ButtonType,
    dataElem?: string,
    children: ReactNode,
}


export const PrimaryButton: FC<ButtonProps> = ({
                                                   size,
                                                   type,
                                                   children,
                                                   dataElem
                                               }) => {

    const buttonClasses = classNames({
        [styles.buttonSmall]: size === 'small',
        [styles.buttonMedium]: size === 'medium',
        [styles.buttonLarge]: size === 'large',
    });

    return (
        <button
            type={type}
            data-elem={dataElem}
            className={buttonClasses}
        >

            {children}

        </button>
    );
};