import {FC} from "react";

import styles from './Header.module.scss'

import {TopBar} from "../../TopBar/TopBar";


export const Header: FC = () => {
  return (
    <section className={styles.header}>
      <TopBar/>
    </section>
  )
}