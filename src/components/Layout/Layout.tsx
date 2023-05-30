import cn from 'classnames';
import {FC, ReactNode, useContext} from "react";

import {ThemeContext} from "context";
import {Header} from "./Header/Header";


interface LayoutProps {
	children: ReactNode,
}


export const Layout: FC<LayoutProps> = ({children}) => {

	const {isDark} = useContext(ThemeContext);

	return (
		<>
			<Header/>
			<main className={cn('main', {
				dark: isDark
			})}>
				{children}
			</main>
		</>
	)
}
