'use client';
import { useEffect, useState, ReactElement } from 'react';
import { useGlobalContext } from '@/globalContext/globalContext';
import { IArticle, IUser, IPageProps } from '@/types/types';
import styles from './page.module.css';

const Page = ({ params }: IPageProps ): ReactElement => {
  const { userName } = useGlobalContext();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async ():Promise<void> => {
      try {
        const articlesResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`);
        const articlesData: IArticle[] = await articlesResponse.json();
        setArticles(articlesData);

        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        const userData: IUser = await userResponse.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    fetchData();
  });

  return (
    <>
      <h2 className={styles.articlesHeading}>Articles</h2>
      <div className={styles.articleUserName}>
        <p> Author </p>
        <span> {userName || user?.name} </span>
      </div>
      <div className={styles.mainArticle}>
        {articles.map((article) => (
          <div className={styles.article} key={article.id}>
            <h3 className={styles.mainTitle}>{article.title}</h3>
            <p className={styles.text}>{article.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
