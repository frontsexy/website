import React from 'react';
import { hot } from 'react-hot-loader/root';

import Authors from '../Authors';
import Footer from '../Footer';
import Header from '../Header';
import Links from '../Links';
import Page from '../Page';

const App = () => (
  <Page>
    <Header />
    <Links />
    <Authors />
    <Footer />
  </Page>
);

export default hot(App);
