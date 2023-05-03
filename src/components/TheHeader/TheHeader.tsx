import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import React, { FC } from 'react';
import styles from './TheHeader.module.scss';

interface TheHeaderProps {}

const TheHeader: FC<TheHeaderProps> = () => {
  return(
  <div className={styles.header}>
    <div className={styles.logo}>devfinder</div>
    <ThemeSwitcher/>
  </div>
  )

};

export default TheHeader;
