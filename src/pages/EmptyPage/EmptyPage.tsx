import {FC} from "react";

import styles from './EmptyPage.module.scss';

import {Empty} from "components";


export const EmptyPage: FC = () => {
  return (
    <section className={styles.emptyPage}>

      <Empty/>

    </section>
  )
}