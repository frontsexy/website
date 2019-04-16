import React from 'react';
import styled from 'reshadow';
import { LINKS } from '../../constants';
import styles from './styles.css';

const Link = ({
  children,
  title,
  href,
}) => styled(styles)(
  <li>
    <a
      href={href}
      title={title}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span
        role="img"
        aria-label={`Эмоджи ${title}`}
      >
        {children}
      </span>
    </a>
  </li>,
);

const Footer = () => styled(styles)(
  <footer>
    <ul>
      <Link title="Пётр" href={LINKS.quasiyoke}>👨‍💻</Link>
      <Link title="Миша" href={LINKS.maxvektor}>👨🏽‍💻</Link>
      <Link title="Денис" href={LINKS.begebot}>👨🏿‍💻</Link>
      <Link title="Подкаст" href={LINKS.soundcloudShow}>🎙</Link>
    </ul>
  </footer>,
);

export default Footer;
