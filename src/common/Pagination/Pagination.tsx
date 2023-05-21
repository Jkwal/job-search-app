import React, {FC} from "react";
import {Pagination as PaginationMantine} from '@mantine/core';

import './Pagination.scss'

import {ReactComponent as IconLeft} from "assets/IconLeft.svg";
import {ReactComponent as IconRight} from "assets/IconRight.svg";


interface PaginationProps {
  total: number,
  value: number,
  onChange: React.Dispatch<React.SetStateAction<number>>,
}


export const Pagination: FC<PaginationProps> = ({
                                                  total,
                                                  value,
                                                  onChange
                                                }) => {
  return (
    <PaginationMantine
      total={total}
      value={value}
      onChange={onChange}
      nextIcon={IconRight}
      previousIcon={IconLeft}
    />
  )
}