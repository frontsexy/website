import React from 'react';
import Link from '../Link';
import Section from '../Section';
import { LINKS } from '../../constants';

const Links = () => (
  <Section title="Ссылки">
    <ul>
      <li>
        <Link href={LINKS.soundcloud}>Soundcloud</Link>
      </li>
      <li>
        <Link href={LINKS.twitter}>Twitter</Link>
      </li>
      <li>
        <Link href={LINKS.telegram}>Чатик в Телеграме</Link>
      </li>
    </ul>
  </Section>
);

export default Links;
