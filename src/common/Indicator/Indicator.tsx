import {Indicator as IndicatorMantine} from "@mantine/core";
import {FC, ReactNode} from "react";

interface IndicatorProps {
    disabled: boolean,
    children: ReactNode,
}

export const Indicator: FC<IndicatorProps> = ({children, disabled}) => {
    return (
        <IndicatorMantine
            size={7}
            offset={5}
            color="#5E96FC"
            position="top-end"
            disabled={disabled}
        >
            {children}
        </IndicatorMantine>
    )
}