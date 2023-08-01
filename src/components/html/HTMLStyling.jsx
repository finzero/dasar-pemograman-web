import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const HTMLStyling = () => {
  return (
    <Section id="styling-html" title="Styling pada HTML">
      <div className="card-content bg-white b-1">
        Kita bisa memberikan style pada element html, caranya adalah dengan
        menggunakan atribut <code>style</code>.<h3>Contoh 1:</h3>
        <div>
          <HighlightSyntax>
            {`<p style="background: black; color: white">
saya ingin membuat background ini berwarna hitam, dan text-nya berwarna putih
</p>`}
          </HighlightSyntax>
        </div>
        <p
          style={{
            background: 'black',
            color: 'white',
            padding: 8,
          }}
        >
          saya ingin membuat background ini berwarna hitam, dan text nya
          berwarna putih
        </p>
        <h3>Contoh 2:</h3>
        <div>
          <HighlightSyntax>
            {`<p style="text-indent: 20px">
ini adalah contoh sebuah paragraf artikel dimana pada baris petama
akan ada margin/jarak sebesar 20px (pixel), kita bisa menggunakan style text-indent [number]px untuk memberi jarak pada baris paragraf pertama
</p>`}
          </HighlightSyntax>
        </div>
        <p
          style={{
            textIndent: '20px',
            background: 'white',
            border: '1px solid',
            padding: 10,
          }}
        >
          ini adalah contoh sebuah paragraf artikel dimana pada baris petama
          akan ada margin/jarak sebesar 20px (pixel), kita bisa menggunakan
          style text-indent [number]px untuk memberi jarak pada baris paragraf
          pertama
        </p>
        <h3>Contoh 3:</h3>
        <div className="flex flex-sm-col">
          <HighlightSyntax>
            {`<table>
<thead style="background: black; color: white;">
  <tr>
    <th>Nama</th>
    <th>Jumlah</th>
    <th>Harga</th>
    <th>Total</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Apel</td>
    <td align='center'>2</td>
    <td align='right'>3000</td>
    <td align='right'>6000</td>
  </tr>
  <tr>
    <td>Jeruk</td>
    <td align='center'>4</td>
    <td align='right'>2000</td>
    <td align='right'>8000</td>
  </tr>
</tbody>
<tfoot style="background: grey; color: white; font-weight: bold;">
  <tr>
    <td colspan="3">Total</td>
    <td>14000</td>
  </tr>
</tfoot>
</table>`}
          </HighlightSyntax>
          <div
            style={{
              marginTop: '1em',
              padding: '5px',
              border: '1px solid',
              marginLeft: '5px',
              background: 'lemonchiffon',
            }}
          >
            <table>
              <thead style={{ background: 'black', color: 'white' }}>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                  <th>Harga</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody style={{ background: 'white' }}>
                <tr>
                  <td>Apel</td>
                  <td align="center">2</td>
                  <td align="right">3000</td>
                  <td align="right">6000</td>
                </tr>
                <tr>
                  <td>Jeruk</td>
                  <td align="center">4</td>
                  <td align="right">2000</td>
                  <td align="right">8000</td>
                </tr>
              </tbody>
              <tfoot
                style={{
                  background: 'grey',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                <tr>
                  <td colSpan="3">Total</td>
                  <td>14000</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HTMLStyling;
