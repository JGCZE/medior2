import publicRuntimeConfig from '@/utils/config';
const { usersUrl } = publicRuntimeConfig;
import OneUser from './OneUser';
import { OneUserProps } from '../../types/types';
import styles from './OneUser.module.css';

const getUsersList = async (): Promise<OneUserProps[]> => {
  const res = await fetch(usersUrl);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const UserList: React.FC<OneUserProps> = async () => {
  const data = await getUsersList();
  return (
    <>
      <h1 className={styles.headingTitle}>Users</h1>
      <div className={styles.users}>
      {data.map((oneUser: OneUserProps) => {
        return (
            <OneUser oneUser={oneUser} key={oneUser.id} name={''}/>
        );
      })}
      </div>
    </>
  );
};

export default UserList;
