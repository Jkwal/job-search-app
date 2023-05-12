import {FC} from "react";
import {Pagination as PaginationMantine} from '@mantine/core';

import './Pagination.scss'

import {ReactComponent as IconLeft} from "assets/IconLeft.svg";
import {ReactComponent as IconRight} from "assets/IconRight.svg";

export const Pagination: FC = () => {
    return (
        <PaginationMantine
            total={3}
            previousIcon={IconLeft}
            nextIcon={IconRight}
        />
    )
}