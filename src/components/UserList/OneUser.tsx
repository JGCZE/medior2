'use client';
import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/globalContext/globalContext';
import Address from './components/Address/Address';
import Company from './components/Company/Company';
import UserInfo from './components/UserInfo/UserInfo';
import styles from './OneUser.module.css';

/*
  Nesedí barvy
  Tento soubor, CSS a složka components by měly být ve složce components
  - UserList
    * UserList.tsx
    - components
      - OneUser
        * OneUser.tsx
        * OneUser.module.css
        - components
          ...

  Pokud budeš psát názvy interface s I (IProps), tak hned na první pohled uvidíš,
  že je to interface.
  Obdobně pro typy TProps.

  Pro popis parametrů funkcí by se spíše měly používat interface.
*/
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

/*
: ReactElement
*/
const OneUser = ({ oneUser }: Props):ReactElement => {
  const { setId, setUserName } = useGlobalContext();
  const router = useRouter();

  const { id, name,  address, company } = oneUser;

  // tahle fce se bude vytvářet po každém přerenderování znovu, použij useCallback
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
            {/*
              One user objekt typově nesedí s tím, co očekává parametr onde user v UsertInfo
            */}
          <UserInfo oneUser={oneUser} />
            {/*
              Proč lat a lng je 0, když to je v objektu uživatele?
            */}
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
    /*
      Následující řádek je tu zbytečný
    */

  );
};

export default OneUser;
