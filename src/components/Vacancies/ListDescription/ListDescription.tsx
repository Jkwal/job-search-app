import {FC} from "react";

import styles from './ListDescription.module.scss';


interface ListDescriptionProps {
    title: string,
}

export const ListDescription: FC<ListDescriptionProps> = ({title}) => {
    return (
        <div className={styles.listDescription}>
            <h3 className={styles.title}>{title}</h3>

            <ul className={styles.list}>

                <li className={styles.item}>Разработка дизайн-макетов для наружной, интерьерной рекламы, полиграфии,
                    сувенирной продукции.
                </li>
                <li className={styles.item}>Подготовка и вёрстка макетов в CorelDraw, Adobe photoshop.</li>
                <li className={styles.item}>Создание дизайна логотипов и брендбуков</li>
                <li className={styles.item}>Управленческая функция: обучение, адаптация дизайнеров, их контроль,
                    оценка
                </li>

            </ul>
        </div>
    )
}


