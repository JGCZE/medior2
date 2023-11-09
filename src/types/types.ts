export type OneUserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export interface IArticle {
  id: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IPageProps {
  params: {
    userId: number;
  };
}
