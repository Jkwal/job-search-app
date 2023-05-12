import {FC} from "react";

import styles from "./ResetButton.module.scss";

import {ReactComponent as IconCross} from "assets/IconCross.svg";


export const ResetButton: FC = () => {
    return (
        <div>
            <button className={styles.resetButton}>
                Сбросить все
                <IconCross className={styles.iconCross}/>
            </button>
        </div>
    );
};