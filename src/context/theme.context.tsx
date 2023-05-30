import {FC, ReactNode, useState, createContext, useMemo} from "react";

import {IThemeContext} from "types";


interface ThemeProviderProps {
	children: ReactNode,
}


export const ThemeContext = createContext<IThemeContext>({isDark: false})

//Todo Реализовать смену темы
export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
	const [isDark, setIsDark] = useState(false)

	const value = useMemo(() => ({isDark, setIsDark}), [isDark])

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}