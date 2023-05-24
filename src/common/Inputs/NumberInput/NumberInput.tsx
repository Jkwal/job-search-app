import React, {FC} from "react";
import {Input} from "@mantine/core";

import './NumberInput.scss';

import {ReactComponent as IconUp} from "assets/IconUp.svg";
import {ReactComponent as IconDown} from "assets/IconDown.svg";


interface NumberInputProps {
    value: string,
    dataElem: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export const NumberInput: FC<NumberInputProps> = ({
                                                      value,
                                                      onChange,
                                                      dataElem,
                                                      placeholder,
                                                  }) => {


    return (
        <Input
            type='number'
            value={value}
            onChange={onChange}
            data-elem={dataElem}
            placeholder={placeholder}
            rightSection={[
                <IconUp key='up' className='iconInput'/>,
                <IconDown key='down' className='iconInput'/>
            ]}
        />
    )
}