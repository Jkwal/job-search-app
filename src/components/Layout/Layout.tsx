import {FC, PropsWithChildren} from "react";

import { Header } from "./Header/Header";



export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='wrapper'>
            <Header/>
            <main>{children}</main>
        </div>
    )
}
