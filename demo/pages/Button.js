import React from 'react';

import './Button.css';
const ButtonPage = () => {
  return (
    <div>
      <h1>This is button page</h1>
      <section className="test-sticky-mac">
        This is sticky section. Autoprefixer should add webkit prefix to it for safari browsers.
      </section>
    </div>
  );
};

export default ButtonPage;