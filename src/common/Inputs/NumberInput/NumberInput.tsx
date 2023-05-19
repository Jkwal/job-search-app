import {FC} from "react";
import {Input} from "@mantine/core";

import './NumberInput.scss';

import {ReactComponent as IconUp} from "assets/IconUp.svg";
import {ReactComponent as IconDown} from "assets/IconDown.svg";


interface NumberInputProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

export const NumberInput: FC<NumberInputProps> = ({placeholder, value, onChange}) => {
  return (
    <Input
      data-elem={"asfasfas"}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      rightSection={[
        <IconUp className='iconInput'/>,
        <IconDown className='iconInput'/>
      ]}
    />
  )
}