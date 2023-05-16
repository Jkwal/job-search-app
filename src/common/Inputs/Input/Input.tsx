import {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
    placeholder: string
    value: string
    onChange: (e: any) => void
}


export const Input: FC<InputProps> = ({placeholder, onChange, value}) => {
    return (
        <input
            className={styles.input}
            type='text'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}