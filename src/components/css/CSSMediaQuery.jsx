import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const CSSMediaQuery = () => {
  return (
    <Section title="CSS Media Query">
      <p>
        <b>Media Query</b> merupakan modul CSS3 yang berguna membuat layout kita
        responsive dengan menyesuaikan tampilan berdasarkan ukuran layar
        perangkat.
      </p>
      <b>Contoh Media Query</b>
      <HighlightSyntax>
        {`/* CSS untuk perangkat dengan lebar minimum 1024px (desktop) */
@media (min-width: 1024px) {
  /* CSS Rule */
}

/* CSS untuk perangkat dengan lebar minimum 768px (tablet) */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  /* CSS Rule */
}

/* CSS untuk perangkat ponsel cerdas atau layar berukuran kecil */
@media (max-width: 767px) {
  /* CSS Rule */
}`}
      </HighlightSyntax>

      <div className="flex flex-col gap-1">
        <div className="card-content bg-white b-1">
          <div className="mb-1">
            <b>Anatomi Media Query</b>
          </div>
          <div className="flex flex-col gap-1">
            <HighlightSyntax>
              {`@media screen (min-width: 768px) and (max-width: 1023px) and (orientation: portrait)`}
            </HighlightSyntax>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Deskripsi</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-red">@media</td>
                <td>
                  At Rule, sebuah keyword yang digunakan dalam CSS untuk
                  menentukan sebuah aturan
                </td>
                <td className="text-red">@import @font-face @keyframes</td>
              </tr>
              <tr>
                <td className="text-red">screen</td>
                <td>target media dimana style akan di aplikasikan</td>
                <td className="text-red">all print screen</td>
              </tr>
              <tr>
                <td className="text-red">
                  (min-width: 768px) <br /> (max-width: 1023px) <br />{' '}
                  (orientation: portrait)
                </td>
                <td>Aturan atau kondisi dimana style akan di aplikasikan</td>
                <td className="text-red">
                  width height aspect-ratio orientation
                </td>
              </tr>
              <tr>
                <td className="text-red">
                  and
                  <br />, (or)
                </td>
                <td>Operator yang digunakan bersama dengan media features</td>
                <td className="text-red">
                  and
                  <br />, (or)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card-content bg-white b-1">
          <div>
            <b>Width Breakpoints</b>
            <p>
              Breakpoint adalah patokan lebar layar yang digunakan untuk
              mengaplikasikan style
            </p>
          </div>
          <HighlightSyntax>
            {`/* Extra small devices (handphone) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablet) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablet) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptop/desktop) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops & desktop) */
@media only screen and (min-width: 1200px) {...}`}
          </HighlightSyntax>
        </div>
      </div>
    </Section>
  );
};

export default CSSMediaQuery;
