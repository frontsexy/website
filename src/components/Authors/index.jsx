import React from 'react';
import Section from '../Section';

const Link = ({
  children,
  href,
}) => (
  <li>
    <a href={href}>
      {children}
    </a>
  </li>
);

const Authors = () => (
  <Section title="Ведущие">
    <ul>
      <Link href="https://github.com/begebot">Денис</Link>
      <Link href="https://github.com/maxvektor">Миша</Link>
      <Link href="https://quasiyoke.me">Петя</Link>
    </ul>
  </Section>
);

export default Authors;
