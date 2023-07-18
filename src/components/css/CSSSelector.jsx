import React from 'react';
import HighlightSyntax from '../HighlightSyntax';

const CSSSelector = () => {
  return (
    <section className="section">
      <div role="button" className="title">
        Selector CSS
      </div>
      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <b>Tag Selector</b>
        <HighlightSyntax>{`span { color: blue }`}</HighlightSyntax>
        <HighlightSyntax>{`<span>text ini akan berwarna biru</span>`}</HighlightSyntax>
      </div>

      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <b>Class Selector</b>
        <HighlightSyntax>{`.text-blue { color: blue }`}</HighlightSyntax>
        <HighlightSyntax>{`<span class="text-blue">text ini akan berwarna biru</span>`}</HighlightSyntax>
      </div>

      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <b>ID Selector</b>
        <HighlightSyntax>{`#title { color: blue }`}</HighlightSyntax>
        <HighlightSyntax>{`<span id="title">text ini akan berwarna biru</span>`}</HighlightSyntax>
      </div>

      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <b>Attribute Selector</b>
        <HighlightSyntax>{`input[type='text'] { font-size: '10px' }`}</HighlightSyntax>
        <HighlightSyntax>{`<input type="text" />
<input type="email" />`}</HighlightSyntax>
      </div>

      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <b>Universal Selector</b>
        <HighlightSyntax>{`* { background: yellow }`}</HighlightSyntax>
        <HighlightSyntax>{`<div>div ini akan punya background kuning</div>
<span>span ini akan punya background kuning</span>`}</HighlightSyntax>
      </div>

      <div className="card-content bg-white" style={{ marginTop: 10 }}>
        <b>Pseudo Selector</b> <br />
        cara penulisan pseudo selector
        <HighlightSyntax>{`selektor:psudo-class {/* style disini */}`}</HighlightSyntax>
        beberapa pseudo selector: <br />
        <ul>
          <li>
            <code style={{ color: 'red' }}>:link</code> untuk memlih link yang
            belum dikunjungi
          </li>
          <li>
            <code style={{ color: 'red' }}>:visited</code> untuk memlih link
            yang sudah dikunjungi
          </li>
          <li>
            <code style={{ color: 'red' }}>:active</code> untuk memilih elemen
            yang sedang aktif, seperti saat diklik
          </li>
          <li>
            <code style={{ color: 'red' }}>:focus</code> untuk memlih elemen
            yang sedang dalam keadaan fokus, misal teks lagi diinput.
          </li>
          <li>
            <code style={{ color: 'red' }}>:checked</code> untuk memilih elemen
            yang dicentang pada checkbox.
          </li>
        </ul>
        contoh psesudo selector: <br />
        <HighlightSyntax>{`a:hover { font-weight: bold; background: 'yellow' }`}</HighlightSyntax>
        <HighlightSyntax>{`<a href="#">Link ini akan berubah warna ketika sedang dikunjungi mouse</a>`}</HighlightSyntax>
        <div>
          <a className="link" href="#">
            Link ini akan berubah warna ketika sedang dikunjungi mouse
          </a>
        </div>
      </div>
    </section>
  );
};

export default CSSSelector;
