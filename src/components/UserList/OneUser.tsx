'use client';
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/globalContext/globalContext';
import Address from './components/Address/Address';
import Company from './components/Company/Company';
import UserInfo from './components/UserInfo/UserInfo';
import styles from './OneUser.module.css';

type Props = {
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
    }
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  name: string
};

const OneUser = ({ oneUser }: Props):ReactElement => {
  const { setId, setUserName } = useGlobalContext();
  const router = useRouter();

  const { id, name,  address, company } = oneUser;

  const handleReadArticlesClick = ():void => {
    setId(id); // Nastavíme ID v kontextu pro další použití, pokud je potřeba
    setUserName(name);
    router.push(`/articles/${id}`);
  };

  return (
    <>
    <div className={styles.oneUser}>
      <div className={styles.container} key={oneUser.id}>
        <h2 className={styles.mainTitle}>{oneUser.name}</h2>

        <div className={styles.user}>
          <UserInfo oneUser={oneUser}/>
          <Address address={{ ...address, geo: { lat: 0, lng: 0 } }} />
          <Company company={company} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleReadArticlesClick}>
          Read Articles
        </button>
      </div>
    </div>
    </>

  );
};

export default OneUser;
