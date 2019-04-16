import React from 'react';
import styled from 'reshadow';
import Link from '../Link';
import Section from '../Section';
import { LINKS } from '../../constants';
import styles from './styles.css';

const Links = () => styled(styles)(
  <Section title="Ссылки">
    <ul>
      <li>
        <Link href={LINKS.soundcloudShow}>Выпуски подкаста в&nbsp;Soundcloud</Link>
      </li>
      <li>
        <dl>
          <dt>
            <Link href={LINKS.soundcloudPreshow}>Прешоу подкаста</Link>
          </dt>
          <dd>
            В&nbsp;прешоу ведущие обсуждают нетехнические темы
            и&nbsp;судьбы нашей родины&nbsp;(18+).
          </dd>
        </dl>
      </li>
      <li>
        <Link href={LINKS.twitter}>Twitter</Link>
      </li>
      <li>
        <Link href={LINKS.telegram}>Чатик в&nbsp;Телеграме</Link>
      </li>
    </ul>
  </Section>,
);

export default Links;
