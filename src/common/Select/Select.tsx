import {FC, useState} from "react";
import {Select as SelectMantine} from '@mantine/core';

import './Select.scss';

import {ReactComponent as IconDown} from "assets/IconDown.svg";
import {ReactComponent as IconUp} from "assets/IconUp.svg";


export const Select: FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SelectMantine
            placeholder="Выберeте отрасль"
            rightSection={
                isOpen
                    ? <IconUp className='iconSelect active'/>
                    : <IconDown className='iconSelect'/>
            }
            data={['React', 'Angular', 'Svelte', 'Vue']}
            onDropdownOpen={toggleSelect}
            onDropdownClose={toggleSelect}
            searchable
        />
    )
}