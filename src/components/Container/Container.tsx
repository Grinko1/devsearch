import React, { FC } from 'react';
import { ReactNode } from 'react';
import styles from  './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
}

const Container: FC<ContainerProps> = ({children}:ContainerProps) => (
  <div className={styles.Container}>
    {children}
  </div>
);

export default Container;
