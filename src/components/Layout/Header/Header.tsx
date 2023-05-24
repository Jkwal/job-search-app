import {FC} from "react";

import styles from './Header.module.scss'

import {IVacancy} from "types";
import {TopBar} from "../../TopBar/TopBar";

interface HeaderProps{
  favoriteVacancies:IVacancy[],
}

export const Header: FC<HeaderProps> = ({favoriteVacancies}) => {
  return (
    <header className={styles.header}>
      <TopBar favoriteVacancies={favoriteVacancies}/>
    </header>
  )
}