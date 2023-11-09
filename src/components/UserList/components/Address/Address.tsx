import { ReactElement } from 'react';
import Link from 'next/link';
import styles from './Address.module.css';

interface IPropAddress {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    }
  }
}

const Address = ({ address }:IPropAddress):ReactElement => {
  const { street, suite, city, zipcode } = address;
  const latitude:number = Number(address.geo.lat);
  const longitude:number = Number(address.geo.lng);

  return (
    <div>
      <div className={styles.address}>
        <h3 className={styles.addressHeading}>Address</h3>
        <Link
          className={styles.link}
          target="_blank"
          href={`https://mapy.cz/turisticka?source=coor&id=${longitude}%2C${latitude}&x=${longitude}&y=${latitude}&z=16`}> Show on map
        </Link>
    </div>

    <div className={styles.userInfo}>
      <span className={styles.desc}>Street</span>
      <span className={styles.value}>{street}</span>
    </div>

    <div className={styles.userInfo}>
      <span className={styles.desc}>Suite</span>
      <span className={styles.value}>{suite}</span>
    </div>

    <div className={styles.userInfo}>
      <span className={styles.desc}>City</span>
      <span className={styles.value}>{city}</span>
    </div>

    <div className={styles.userInfo}>
      <span className={styles.desc}>Zipcode</span>
      <span className={styles.value}>{zipcode}</span>
    </div>
    </div>
  );
};

export default Address;
