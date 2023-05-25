import {useDisclosure} from '@mantine/hooks';
import {Burger as BurgerMantine} from '@mantine/core';

import styles from './Burger.module.scss';

import {ROUTES} from "utils";
import {Link} from 'common';


export const Burger = () => {
  const [opened, {toggle}] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <BurgerMantine
        color={opened ? '#92C1FF' : '#3B7CD3'}
        opened={opened}
        onClick={toggle}
        aria-label={label}
      />

      {
        opened
          ? <ul className={styles.menu}>
            <Link path={ROUTES.HOME} name='Поиск Вакансий'/>
            <Link path={ROUTES.FAVORITES} name='Избранное'/>
          </ul>
          : ''
      }
    </>
  )
}