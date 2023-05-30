import {Dispatch, SetStateAction} from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>


export type SizeButton = 'small' | 'medium' | 'large';
export type TypeButton = 'button' | 'submit' | 'reset';

