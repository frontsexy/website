import React from 'react';
import { hot } from 'react-hot-loader/root';

import Authors from '../Authors';
import Links from '../Links';
import Page from '../Page';

const App = () => (
  <Page>
    <Links />
    <Authors />
  </Page>
);

export default hot(App);
