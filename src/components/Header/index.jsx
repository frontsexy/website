import React from 'react';
import styled from 'reshadow';
import { LINKS } from '../../constants';
import styles from './styles.css';

const Header = () => styled(styles)(
  <header>
    <dl>
      <dt>
        <h1>
          <a href={LINKS.self}>Сделайте мне красиво</a>
        </h1>
      </dt>
      <dd>Подкаст о&nbsp;фронтенд-разработке</dd>
    </dl>
  </header>,
);

export default Header;
