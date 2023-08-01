import React from 'react';
import Section from '../Section';
import dom from '../../assets/dom.png';
import HighlightSyntax from '../HighlightSyntax';

const JSDOM = () => {
  return (
    <Section id="js-dom" title="Document Object Model">
      <div className="card-content bg-white b-1">
        <div className="h3">Pengertian DOM</div>
        <p>
          DOM adalah interface pemrograman untuk dokumen HTML. DOM memungkinkan
          web developer untuk berinteraksi dengan konten dan struktur halaman
          web sehingga aplikasi web yang dibuat dapat menjadi dinamis dan
          interaktif.
        </p>
        <p>
          Dengan DOM developer bisa mengambil, mengubah, menambah, maupun
          menghapus elemen HTML.
        </p>
        <img src={dom} alt="" srcSet="" />
      </div>
      <div className="card-content bg-white b-1 mt-1">
        <div className="h3 mb-1">Cara mengambil element HTML</div>
        Misalkan kita mempunyai HTML seperti berikut:
        <HighlightSyntax>
          {`<div id="wrapper">
  <div class="content">ini adalah div dengan class content</div>
  <div title="judl">ini adalah div yang mempunyai attribute title</div>
  <span>ini adalah span</span>
</div>`}
        </HighlightSyntax>
        <div className="h4">Fungsi Get Element</div>
        <HighlightSyntax>
          {`// mengambil element menggunakan ID
document.getElementById('wrapper');

// mengambil element menggunakan attribute class
document.getElementByClassName('content');

// mengambil element menggunakan tag
document.getElementByTagName('span');
`}
        </HighlightSyntax>
        <div className="h4">Fungsi Query Selector</div>
        <HighlightSyntax>
          {`// mengambil element menggunakan selector ID
document.querySelector('#wrapper');

// mengambil element menggunakan selector class
document.querySelector('.content');

// mengambil element menggunakan selector tag
document.querySelector('span');

// mengambil element menggunakan selector ID
document.querySelectorAll('#wrapper');

// mengambil element menggunakan selector class
document.querySelectorAll('.content');

// mengambil element menggunakan selector tag
document.querySelectorAll('span');
`}
        </HighlightSyntax>
      </div>
      <div className="card bg-white b-1 mt-1">
        <div className="h3 mb-1">Cara memanipulasi element</div>
        <HighlightSyntax>
          {`...
<body>
  <div id="content">ini adalah div content</div>
  <script>
    // mengubah isi dari element content
    document.getElementById('content').innerHTML = 'ubah content dengan javascript';
    
    // mengubah background color jadi abu-abu
    document.getElementById('content').style.backgroundColor = 'grey';
    
    // mengubah warna text menjadi putih
    document.getElementById('content').style.color = 'white';
  </script>
</body>
...`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSDOM;
