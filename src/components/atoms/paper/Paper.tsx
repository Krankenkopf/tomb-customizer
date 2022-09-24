import React from 'react';

import styles from './Paper.module.scss';

type TPaper = {
  children?: React.ReactNode;
};

export const Paper = ({ children }: TPaper) => <div className={styles['paper']}>{children}</div>;
