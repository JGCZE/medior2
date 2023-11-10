import { ReactElement } from 'react';
import styles from './Company.module.css';

interface IPropCompany {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

/*
  Tohle zvýší čitelnost kódu
  const Company = ({ company }: IPropCompany): ReactElement => {

  Odděluj funkční bloky prázdným řádkem
*/
const Company = ({ company }:IPropCompany):ReactElement => {
  const { name, catchPhrase, bs } = company;
  return (
    <div className={styles.companyContainer}>
      <h3 className={styles.header}>Company</h3>
        <div className={styles.userInfo}>
          <span className={styles.desc}>Name</span>
          <span className={styles.value}>{name}</span>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.desc}>Catch phrase</span>
          <span className={styles.value}>{catchPhrase}</span>
        </div>
        <div className={styles.userInfo}>
          <span className={styles.desc}>Bs</span>
          <span className={styles.value}>{bs}</span>
        </div>
    </div>
  );
};

export default Company;
