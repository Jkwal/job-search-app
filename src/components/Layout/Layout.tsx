import {FC, ReactNode} from "react";

import {Header} from "./Header/Header";
import {IVacancy} from "types";

interface  LayoutProps{
  children:ReactNode,
  favoriteVacancies:IVacancy[],

}

export const Layout: FC<LayoutProps> = ({favoriteVacancies,children}) => {
  return (
    <div className='wrapper'>

      <Header favoriteVacancies={favoriteVacancies}/>
      <main>{children}</main>

    </div>
  )
}
