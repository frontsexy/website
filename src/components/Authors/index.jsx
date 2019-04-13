import React from 'react';
import Link from '../Link';
import Section from '../Section';
import { LINKS } from '../../constants';

const Authors = () => (
  <Section title="Ведущие">
    <ul>
      <li>
        <Link href={LINKS.begebot}>Денис</Link>
      </li>
      <li>
        <Link href={LINKS.maxvektor}>Миша</Link>
      </li>
      <li>
        <Link href={LINKS.quasiyoke}>Петя</Link>
      </li>
    </ul>
  </Section>
);

export default Authors;
