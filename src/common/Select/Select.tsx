import {FC, useContext, useState} from "react";
import {Select as SelectMantine} from '@mantine/core';

import './Select.scss';

import {ReactComponent as IconUp} from "assets/IconUp.svg";
import {ReactComponent as IconDown} from "assets/IconDown.svg";
import {appContext} from "context/app.context";


interface SelectProps {
  value: string,
  onChange: (value: string) => void,
}


export const Select: FC<SelectProps> = ({value, onChange}) => {
  const { catalogues} = useContext(appContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const data = catalogues.map((item:any) => ({
    label: item.title,
    value: String(item.key),
  }));

  return (
    <SelectMantine
      data={data}
      value={value}
      onChange={onChange}
      data-elem='industry-select'
      placeholder="Выберeте отрасль"
      onDropdownOpen={toggleSelect}
      onDropdownClose={toggleSelect}
      rightSection={
        isOpen
          ? <IconUp className='iconSelect active'/>
          : <IconDown className='iconSelect'/>
      }
    />
  )
}