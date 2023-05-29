import {FC} from "react";

import styles from './Header.module.scss';

import {TopBar} from "components";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <TopBar/>
    </header>
  )
}