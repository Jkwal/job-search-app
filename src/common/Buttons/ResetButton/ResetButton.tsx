import {FC} from "react";

import styles from "./ResetButton.module.scss";

import {ReactComponent as IconCross} from "assets/IconCross.svg";


interface ResetButtonProps {
  onClick: () => void,
}


export const ResetButton: FC<ResetButtonProps> = ({onClick}) => {
  return (
    <div>

      <button
        type='reset'
        onClick={onClick}
        className={styles.resetButton}
      >

        Сбросить все

        <IconCross className={styles.iconCross}/>

      </button>

    </div>
  );
};