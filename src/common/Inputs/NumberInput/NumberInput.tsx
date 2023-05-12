import {FC} from "react";
import {NumberInput as NumberInputMantine} from '@mantine/core';

import './NumberInput.scss';

import {ReactComponent as IconUp} from "assets/IconUp.svg";
import {ReactComponent as IconDown} from "assets/IconDown.svg";


interface NumberInputProps {
    placeholder: string
}

export const NumberInput: FC<NumberInputProps> = ({placeholder}) => {
    return (
        <NumberInputMantine
            placeholder={placeholder}
            rightSection={[
                <IconUp className='iconInput'/>,
                <IconDown className='iconInput'/>
            ]}
        />
    )
}