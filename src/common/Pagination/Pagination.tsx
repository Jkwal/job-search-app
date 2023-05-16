import {FC} from "react";
import {Pagination as PaginationMantine} from '@mantine/core';

import './Pagination.scss'

import {ReactComponent as IconLeft} from "assets/IconLeft.svg";
import {ReactComponent as IconRight} from "assets/IconRight.svg";


interface PaginationProps {
    total: number,
    value: number,
    onChange: (e:any) => void,
}

export const Pagination: FC<PaginationProps> = ({total, value,onChange}) => {
    return (
        <PaginationMantine
            value={value}
            total={total}
            onChange={onChange}
            previousIcon={IconLeft}
            nextIcon={IconRight}
        />
    )
}