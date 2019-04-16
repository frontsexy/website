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
    <article>
      {children}
    </article>
    <Footer />
  </>,
);

export default Page;
