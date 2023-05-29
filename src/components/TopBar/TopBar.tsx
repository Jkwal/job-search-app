import {FC, useContext} from "react";

import styles from './TopBar.module.scss';

import {ROUTES} from "utils";
import {appContext} from "context/app.context";
import {Burger, Indicator, Link, Logo} from "common";


export const TopBar: FC = () => {
  const {favoriteVacancies} = useContext(appContext);

  return (
    <div className={styles.topBar}>

      <Logo name='Jobored'/>


      <ul className={styles.links}>
        <Link path={ROUTES.HOME} name='Поиск Вакансий'/>

        <Indicator disabled={favoriteVacancies.length === 0}>
          <Link path={ROUTES.FAVORITES} name='Избранное'/>
        </Indicator>

      </ul>

      <div className={styles.burger}>
        <Burger favoriteVacancies={favoriteVacancies}/>
      </div>

    </div>
  )
}