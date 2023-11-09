import { ReactElement } from 'react';
import styles from './UserInfo.module.css';

interface IPropUserInfo {
  oneUser: {
    id: number;
    name: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: number;
    };
    geo: {
      lat: number;
      lng: number;
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
    username: string;
    email: string;
    phone: number;
    website: string;
  }
}

const UserInfo = (userInfo: IPropUserInfo):ReactElement => {
  const { username, email, phone, website } = userInfo.oneUser;
  return (
    <div className={styles.userInfoContainer}>
       <div className={styles.userInfo}>
          <span className={styles.desc}>Username</span>
          <span className={styles.value}>{username}</span>
        </div>

        <div className={styles.userInfo}>
          <span className={styles.desc}>Email</span>
          <span className={styles.value}>{email}</span>
        </div>

        <div className={styles.userInfo}>
          <span className={styles.desc}>Phone</span>
          <span className={styles.value}>{phone}</span>
        </div>

        <div className={styles.userInfo}>
          <span className={styles.desc}>Website</span>
          <span className={styles.value}>{website}</span>
        </div>
    </div>
  );
};

export default UserInfo;
