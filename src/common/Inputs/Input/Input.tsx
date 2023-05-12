import {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
    placeholder: string
}


export const Input: FC<InputProps> = ({placeholder}) => {
    return (
        <input
            className={styles.input}
            type='text'
            placeholder={placeholder}
        />
    )
}