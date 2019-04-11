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

const Links = () => (
  <Section title="Ссылки">
    <ul>
      <Link href="https://soundcloud.com/begebot">Soundcloud</Link>
      <Link href="https://twitter.com/frontsexy">Twitter</Link>
      <Link href="https://t.me/smk_chat">Чатик в Телеграме</Link>
    </ul>
  </Section>
);

export default Links;
