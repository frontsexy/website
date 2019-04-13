import React from 'react';
import styled from 'reshadow';
import { LINKS } from '../../constants';
import styles from './styles.css';

const Header = () => styled(styles)(
  <header>
    <a href={LINKS.self}>
      <h1>Сделайте мне красиво</h1>
    </a>
    <p>Подкаст о фронтенд-разработке</p>
  </header>,
);

export default Header;
