'use client';
import { useEffect, useState, ReactElement } from 'react';
import { useGlobalContext } from '@/globalContext/globalContext';
import { IArticle, IUser, IPageProps } from '@/types/types';
import styles from './page.module.css';

/*
  Nesedí design, poslední řádek neměl být centrován na střed stránky
  Obsah by se měl renderovat z komponenty Article,
  která tady úplně chybí => více souborů, lepší čitelnost
*/

const Page = ({ params }: IPageProps ): ReactElement => {
  const { userName } = useGlobalContext();
  /*
    Osobně preferuji definici polí přes generika Array<IArticle>
  */
  const [articles, setArticles] = useState<IArticle[]>([]);
  /*
    používej undefined místo null, lépe se s tím pak pracuje (například stačí return;)
  */
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    /*
      fetchData by mělo být mimo useEffect, nejlépe mimo komponentu
      potřebné atributy si předávej jako parametry funkce, budeš mít nad tím větší kontrolu
    */
    const fetchData = async ():Promise<void> => {
      try {
        /* const { userId } = params */
        const articlesResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`);
        const articlesData: IArticle[] = await articlesResponse.json();
        setArticles(articlesData);

        /*
          Tohle se má stáhnout jen v případě, že nenačteme userName z kontextu
        */
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
