import {FC, ReactNode} from "react";
import {Indicator as IndicatorMantine} from "@mantine/core";

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