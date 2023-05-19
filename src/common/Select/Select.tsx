import {FC, useState} from "react";
import {Select as SelectMantine} from '@mantine/core';

import './Select.scss';

import {ICatalogues} from "types";
import {ReactComponent as IconDown} from "assets/IconDown.svg";
import {ReactComponent as IconUp} from "assets/IconUp.svg";


interface SelectProps {
  catalogues: ICatalogues[],
  onChange: (value: string) => void;
}


export const Select: FC<SelectProps> = ({catalogues, onChange}) => {
  const [searchValue, onSearchChange] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectChange = (value: string) => {
    onSearchChange(value);
    console.log(value)
    onChange(value);
  };

  console.log(catalogues)

  const data = catalogues.map((item) => ({
    label: item.title,
    value: String(item.key),
  }));

  return (
    <SelectMantine
      data={data}

      value={searchValue}
      onChange={handleSelectChange}
      placeholder="Выберeте отрасль"
      rightSection={
        isOpen
          ? <IconUp className='iconSelect active'/>
          : <IconDown className='iconSelect'/>
      }
      onDropdownOpen={toggleSelect}
      onDropdownClose={toggleSelect}
    />
  )
}