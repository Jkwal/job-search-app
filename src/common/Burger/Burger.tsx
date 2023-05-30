import {FC} from "react";
import {useDisclosure} from '@mantine/hooks';
import {Burger as BurgerMantine, Modal} from '@mantine/core';

import styles from './Burger.module.scss';

import {ROUTES} from "utils";
import {IVacancy} from "types";
import {Indicator, Link, Logo} from 'common';


interface BurgerProps {
	favoriteVacancies: IVacancy[];
}


export const Burger: FC<BurgerProps> = ({favoriteVacancies}) => {
	const [opened, {toggle}] = useDisclosure(false);
	const label = opened ? 'Close navigation' : 'Open navigation';

	return (
		<>
			<BurgerMantine
				opened={opened}
        onClick={toggle}
        aria-label={label}
        color={opened ? '#92C1FF' : '#3B7CD3'}
      />
			{

				opened
					? <Modal
						opened={opened}
						onClose={toggle}
						title={<Logo name='Jobored'/>}
					>
						<ul className={styles.menu}>
							<Link path={ROUTES.HOME} name='Поиск Вакансий'/>
							<Indicator disabled={favoriteVacancies.length === 0}>
								<Link path={ROUTES.FAVORITES} name='Избранное'/>
							</Indicator>
						</ul>
					</Modal>
					: ''
			}
		</>
	)
}