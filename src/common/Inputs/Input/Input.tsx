import React, {FC} from "react";

import styles from './Input.module.scss';


interface InputProps {
	name: string,
	value: string,
	placeholder: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export const Input: FC<InputProps> = ({
																				name,
																				value,
																				onChange,
																				placeholder
																			}) => {
	return (
		<input
			name={name}
			type='text'
			value={value}
			onChange={onChange}
			data-elem='search-input'
			className={styles.input}
			placeholder={placeholder}
		/>
	)
}