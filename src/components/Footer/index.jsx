import React from 'react';
import styled from 'reshadow';
import { LINKS } from '../../constants';
import styles from './styles.css';

const Link = ({
  children,
  title,
  href,
}) => styled(styles)(
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
  </a>,
);

const Footer = () => styled(styles)(
  <footer>
    <Link title="Пётр" href={LINKS.quasiyoke}>👨‍💻</Link>
    <Link title="Миша" href={LINKS.maxvektor}>👨🏽‍💻</Link>
    <Link title="Денис" href={LINKS.begebot}>👨🏿‍💻</Link>
    <Link title="Подкаст" href={LINKS.soundcloud}>🎙</Link>
  </footer>,
);

export default Footer;
