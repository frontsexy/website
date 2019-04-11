import React from 'react';

const Section = ({
  children,
  title,
}) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
