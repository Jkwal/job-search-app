import {FC} from "react";

import styles from "./ResetButton.module.scss";

import {ReactComponent as IconCross} from "assets/IconCross.svg";


export const ResetButton: FC = () => {
  return (
    <button type="reset" className={styles.resetButton}>

      <p>Сбросить все</p>

      <IconCross className={styles.iconCross}/>

    </button>
  );
};