import React from 'react';
import typeOfCSS from '../../assets/types-of-css.png';
import HighlightSyntax from '../HighlightSyntax';
import Section from '../Section';

const CSSLoad = () => {
  return (
    <Section id="css-load" title="Cara Load CSS">
      <div className="flex card-content bg-white">
        <div>
          <img width={'400px'} src={typeOfCSS} alt="" />
        </div>
        <div>
          <ol>
            <li>
              <b>Inline CSS</b> menggunakan attribute <b>style</b> langsung pada
              element.
              <HighlightSyntax>
                {`<body>
  <p style="color: red">ini text berwarna merah</p>
</body>
`}
              </HighlightSyntax>
            </li>
            <li>
              <b>Internal CSS</b> menambahkan tag style pada header html
              <HighlightSyntax>
                {`<header>
  <style type=text/css>
    .css_style_name {
      /* css styles */
      font-weight: bold;
    }
  </style>
</header>
`}
              </HighlightSyntax>
            </li>
            <li>
              <b>Extenal CSS</b> menambahkan link css di file lain
              <HighlightSyntax>
                {`<header>
  <link rel="stylesheet" href="style.css">
</header>
`}
              </HighlightSyntax>
            </li>
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default CSSLoad;
