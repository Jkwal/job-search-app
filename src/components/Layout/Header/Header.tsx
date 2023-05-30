import cn from "classnames";
import {FC, useContext} from "react";

import {TopBar} from "components";
import {ThemeContext} from "context";


export const Header: FC = () => {

	const {isDark} = useContext(ThemeContext);

	return (
		<header className={cn('header', {
			dark: isDark
		})}>
			<TopBar/>
		</header>
	)
}