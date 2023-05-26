import {FC} from "react";
import {Indicator} from "@mantine/core";

import styles from './TopBar.module.scss';

import {ROUTES} from "utils";
import {IVacancy} from "types";
import {Burger, Link, Logo} from "common";


interface TopBarProps {
  favoriteVacancies: IVacancy[],
}

export const TopBar: FC<TopBarProps> = ({favoriteVacancies}) => {
  return (
    <div className={styles.topBar}>

      <Logo path={ROUTES.HOME} name='Jobored'/>


      <ul className={styles.links}>
        <Link path={ROUTES.HOME} name='Поиск Вакансий'/>
        <Indicator
          size={7}
          offset={5}
          color="cyan"
          position="top-end"
          disabled={favoriteVacancies.length === 0}
        >
          <Link path={ROUTES.FAVORITES} name='Избранное'/>
        </Indicator>
      </ul>

      <div className={styles.burger}>
        <Burger/>
      </div>

    </div>
  )
}