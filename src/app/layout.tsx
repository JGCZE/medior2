import { ReactElement } from 'react';
import { Metadata } from 'next';
import '@/styles/index.scss';
import { GlobalContextProvider } from '@/globalContext/globalContext';

interface IProps {
  children: ReactElement
}

export const metadata: Metadata = {
  title: 'Medior Page',
  icons: {
    icon: '/favicons/favicon.svg',
  },
};

const RootLayout = ({
  children,
}: IProps): ReactElement => (
  <html lang="en">
    <body className="page-layout">
    <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
    </body>
  </html>
);

export default RootLayout;
