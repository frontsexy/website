import React from 'react';
import { hot } from 'react-hot-loader/root';

import Authors from '../components/Authors';
import Links from '../components/Links';
import Page from '../components/Page';

const App = () => (
  <Page>
    <Links />
    <Authors />
  </Page>
);

export default hot(App);
