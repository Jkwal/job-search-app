import {FC} from "react";

import styles from './Button.module.scss';


interface ButtonProps {
    name: string,
}


export const Button: FC<ButtonProps> = ({name}) => {
    return (
        <button
            className={styles.button}
        >
            {name}
        </button>
    )
}