import {FC, ReactNode} from "react";
import classNames from 'classnames';

import styles from './PrimaryButton.module.scss';


type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  size: ButtonSize,
  type: ButtonType,
  children: ReactNode,
}


export const PrimaryButton: FC<ButtonProps> = ({
                                                 size,
                                                 type,
                                                 children
                                               }) => {

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