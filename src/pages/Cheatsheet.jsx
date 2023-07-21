import React from 'react';

const Cheatsheet = () => {
  return (
    <div className="card-main no-sidebar">
      <section className="section">
        <div className="title">HTML</div>
        <div className="flex py-1 gap-1">
          <a
            href="https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet"
            target="blank"
          >
            <div className="card cheatsheet">Struktur & Element HTML</div>
          </a>
          <a
            href="https://www.codecademy.com/learn/learn-html/modules/learn-html-tables/cheatsheet"
            target="blank"
          >
            <div className="card cheatsheet">Tabel</div>
          </a>
          <a
            href="https://www.codecademy.com/learn/learn-html/modules/learn-html-forms/cheatsheet"
            target="blank"
          >
            <div className="card cheatsheet">Form</div>
          </a>
          <a
            href="https://www.codecademy.com/learn/learn-html/modules/learn-semantic-html/cheatsheet"
            target="blank"
          >
            <div className="card cheatsheet">Semantic HTML</div>
          </a>
        </div>
      </section>
      <section className="section">
        <div className="title">Styling</div>
        <div className="flex py-1 gap-1">
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="blank"
          >
            <div className="card cheatsheet">Flexbox Guide</div>
          </a>
          <a
            href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/"
            target="blank"
          >
            <div className="card cheatsheet">Flexbox Interactive Guide</div>
          </a>
          <a
            href="https://codebeautify.org/css-selector-cheat-sheet"
            target="blank"
          >
            <div className="card cheatsheet">CSS Selector</div>
          </a>
          <a
            href="https://www.w3schools.com/cssref/css_selectors.php"
            target="blank"
          >
            <div className="card cheatsheet">W3S CSS Selector</div>
          </a>
        </div>
      </section>
      <section className="section">
        <div className="title">CSS Animation</div>
        <div className="flex py-1 gap-1">
          <a
            href="https://www.filepicker.io/api/file/pljRRmwQfSxKwJJAqoCV"
            target="blank"
          >
            <div className="card cheatsheet">CSS Animation Cheatsheet</div>
          </a>
          <a
            href="https://acchou.github.io/html-css-cheat-sheet/animation.html"
            target="blank"
          >
            <div className="card cheatsheet">
              Interactive CSS Animation & Transition
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Cheatsheet;
