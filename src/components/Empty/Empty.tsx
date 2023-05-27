import {FC} from "react";
import {NavLink} from "react-router-dom";

import styles from './Empty.module.scss';

import {ROUTES} from "utils";
import {PrimaryButton} from "common";
import {ReactComponent as IconEmptyState} from 'assets/IconEmptyState.svg';


interface EmptyProps {
    isButton?: boolean
}

export const Empty: FC<EmptyProps> = ({isButton = true}) => {
    return (
        <div className={styles.empty}>
            <IconEmptyState/>

            <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>

            {
                isButton
                    ? <PrimaryButton type='button' size='medium'>
                        <NavLink to={ROUTES.HOME}>Поиск Вакансий</NavLink>
                    </PrimaryButton>
                    : ''
            }
        </div>
    )
}