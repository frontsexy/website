import React from 'react';
import styled from 'reshadow';
import Section from '../Section';
import styles from './styles.shadow.css';

const Link = ({
  children,
  href,
}) => styled(styles)(
  <li>
    <a href={href}>
      {children}
    </a>
  </li>,
);

const Authors = () => styled(styles)(
  <Section title="Ведущие">
    <ul>
      <Link href="https://github.com/begebot">Денис</Link>
      <Link href="https://github.com/maxvektor">Миша</Link>
      <Link href="https://quasiyoke.me">Петя</Link>
    </ul>
  </Section>,
);

export default Authors;
