import React from 'react';
import styled from 'reshadow';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.css';

const Page = ({
  children,
}) => styled(styles)(
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>,
);

export default Page;
