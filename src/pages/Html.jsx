import React, { useEffect } from 'react';

import folderHtml from '../assets/folder-html.png';
import element from '../assets/element.png';
import igDobah from '../assets/layout-post-ig.png';
import HighlightSyntax from '../components/HighlightSyntax';
import Section from '../components/Section';
import AnchorNav from '../components/AnchorNav';
import useAnchors from '../hooks/useAnchors';

const Html = () => {
  const [anchors, setSections] = useAnchors();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    setSections(sections);
  }, []);

  return (
    <div className="flex">
      <AnchorNav anchors={anchors} />
      <div className="card-content">
        <Section id="struktur-html" title="Struktur Dasar HTML">
          <div>
            <p>
              HTML merupakan singkatan dari Hypertext Markup Language merupakan
              bahasa markup standar untuk membuat dan menyusun halaman dan
              aplikasi web
            </p>
            <HighlightSyntax>
              {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`}
            </HighlightSyntax>
            <div className="mb-1">
              <code className="w3-codespan"> &lt;!DOCTYPE html&gt;</code>{' '}
              Menunjukan versi HTML
            </div>
            <div className="mb-1">
              <code className="w3-codespan"> &lt;html lang="en"&gt;</code> Tag
              Pembuka HTML
            </div>
            <div className="mb-1">
              <code className="w3-codespan"> &lt;head&gt;</code> Bagian head,
              bisa berisi title, file css, file js & meta
            </div>
            <div className="mb-1">
              <code className="w3-codespan"> &lt;body&gt;</code> Bagian body,
              bisa berisi konten dari sebuah aplikasi web
            </div>
          </div>
        </Section>
        <Section id="tag-html" title="HTML Tag">
          <p>Berikut merupakan tag HTML yang umum digunakan:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Tag</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;p&gt;</td>
                <td>HTML Text Tags</td>
                <td>Paragraph</td>
              </tr>
              <tr>
                <td>&lt;h1&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 1</td>
              </tr>
              <tr>
                <td>&lt;h2&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 2</td>
              </tr>
              <tr>
                <td>&lt;h3&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 3</td>
              </tr>
              <tr>
                <td>&lt;h4&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 4</td>
              </tr>
              <tr>
                <td>&lt;h5&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 5</td>
              </tr>
              <tr>
                <td>&lt;h6&gt;</td>
                <td>HTML Text Tags</td>
                <td>Heading 6</td>
              </tr>
              <tr>
                <td>&lt;strong&gt;</td>
                <td>HTML Text Tags</td>
                <td>Strong</td>
              </tr>
              <tr>
                <td>&lt;code&gt;</td>
                <td>HTML Text Tags</td>
                <td>Display A Part Of Programming Code</td>
              </tr>
              <tr>
                <td>&lt;pre&gt;</td>
                <td>HTML Text Tags</td>
                <td>Preformatted Text</td>
              </tr>
              <tr>
                <td>&lt;br&gt;</td>
                <td>HTML Text Tags</td>
                <td>Single Line Break</td>
              </tr>
              <tr>
                <td>&lt;div&gt;</td>
                <td>HTML Text Tags</td>
                <td>Division</td>
              </tr>
              <tr>
                <td>&lt;table&gt;</td>
                <td>HTML Table Tags</td>
                <td>To Make a table</td>
              </tr>
              <tr>
                <td>&lt;tr&gt;</td>
                <td>HTML Table Tags</td>
                <td>Table Row</td>
              </tr>
              <tr>
                <td>&lt;td&gt;</td>
                <td>HTML Table Tags</td>
                <td>Table Data</td>
              </tr>
              <tr>
                <td>&lt;form&gt;</td>
                <td>HTML Form Tags</td>
                <td>Form</td>
              </tr>
              <tr>
                <td>&lt;input&gt;</td>
                <td>HTML Form Tags</td>
                <td>Make an Input field</td>
              </tr>
              <tr>
                <td>&lt;textarea&gt;</td>
                <td>HTML Form Tags</td>
                <td>Make a Textarea Input</td>
              </tr>
              <tr>
                <td>&lt;a&gt;</td>
                <td>HTML Link Tags</td>
                <td>Anchor Tag For A Link</td>
              </tr>
              <tr>
                <td>&lt;img&gt;</td>
                <td>HTML Image And Object Tags</td>
                <td>Image</td>
              </tr>
              <tr>
                <td>&lt;ul&gt;</td>
                <td>HTML List Tags</td>
                <td>Unordered List</td>
              </tr>
              <tr>
                <td>&lt;ol&gt;</td>
                <td>HTML List Tags</td>
                <td>Ordered List</td>
              </tr>
              <tr>
                <td>&lt;li&gt;</td>
                <td>HTML List Tags</td>
                <td>List</td>
              </tr>
            </tbody>
          </table>
        </Section>
        <Section id="cara-buat-html" title="Cara membuat HTML">
          <HighlightSyntax>
            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ini adalah halaman contact
</body>
</html>
`}
          </HighlightSyntax>
          Kalian bisa copy code di atas, kemudian save dengan nama
          <b> [nama_file].html</b>, misal <b> contact.html</b>
          <h3>Beberapa hal yang perlu diperhatikan</h3>
          <hr />
          <div>
            <b>1. Gunakan Huruf Kecil untuk tag</b>
            <HighlightSyntax>
              {`<p>text <b>bold</b>, text <i>italic</i>, text <u>underscore</u></p>`}
            </HighlightSyntax>
            hasil:{' '}
            <p>
              text <b>bold</b>, text <i>italic</i>, text <u>underscore</u>
            </p>
          </div>
          <div>
            <b>2. Pastikan Tag ditutup dengan benar</b>
            <HighlightSyntax>
              {`<p>text <b><i><u>bold</u></i></b></p>`}
            </HighlightSyntax>
            hasil:{' '}
            <p>
              text{' '}
              <b>
                <i>
                  <u>bold, italic & underscore</u>
                </i>
              </b>
            </p>
          </div>
        </Section>
        <Section id="element" title="Element">
          <p>
            <b>Element</b> adalah komponen yang menyusun sebuah html, berikut
            merupakan contoh element: <br />
          </p>
          <img
            className="m-w-full"
            src={element}
            alt="Element HTML"
            width={700}
          />
          <h3>Atribut pada Element</h3>
          <ul>
            <li>
              <code className="w3-codespan">href</code> pada{' '}
              <code className="w3-codespan">&lt;a&gt;</code> menentukan tujuan
              dai url jika di klik
            </li>
            <li>
              <code className="w3-codespan">src</code> pada{' '}
              <code className="w3-codespan">&lt;img&gt;</code> menentukan sumber
              dari sebuah gambar/file
            </li>
            <li>
              <code className="w3-codespan">width</code> dan{' '}
              <code className="w3-codespan">height</code> pada{' '}
              <code className="w3-codespan">&lt;img&gt;</code> digunakan untuk
              menentukan height & width pada sebuah gambar
            </li>
            <li>
              <code className="w3-codespan">alt</code> pada{' '}
              <code className="w3-codespan">&lt;img&gt;</code> nilai yang ada di
              dalam alt akan di munculkan jika sumber image tidak ada
            </li>
            <li>
              <code className="w3-codespan">style</code> digunakan untuk
              menambahkan styles pada sebuah element, seperti color, font, size,
              dan lainnya
            </li>
            <li>
              <code className="w3-codespan">lang</code> pada{' '}
              <code className="w3-codespan">&lt;html&gt;</code> menunjukan
              bahasa yang digunakan di dalam website
            </li>
            <li>
              <code className="w3-codespan">title</code> memberikan informasi
              judul pada sebuah element
            </li>
          </ul>
        </Section>
        <Section id="index-html" title="index.html">
          <p>
            <b>index.html</b> adalah file yang dijadikan default pada sebuah
            folder. jika kalian mempunyai folder dengan isi sebagai berikut:
            <br />
            <img src={folderHtml} alt="" />
            <br />
            kemudian kalian jalankan html tersebut dengan webserver seperti
            nginx atau apache maka tanpa harus menuliskan nama file pada url
            browser
          </p>
        </Section>
        <Section id="styling-html" title="Styling pada HTML">
          <p>
            Kita bisa memberikan style pada element html, caranya adalah dengan
            menggunakan atribut <code>style</code>.
          </p>
          <h3>Contoh 1:</h3>
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
        </Section>
        <Section id="div" title="Mengenal &lt;div&gt;">
          <p>
            <b>div</b> merupakan singkatan dari <i>division</i> atau
            pengelompokan, di dalam element div kita bisa membungkus beberapa
            element lain. Tujuan dari pengelompokan ini adalah agar
            element-element tersebut dapat di atur secara UI (User Interface)
            sehingga dapat menghasilkan tampilan yang nyaman untuk di lihat
          </p>
          <h3>Beberapa kegunaan tag &lt;div&gt;:</h3>
          <ol>
            <li id="layout">
              <b>Membuat Layout Website</b>
              <p>
                Karena fungsinya yang bisa mengelompokan element, div biasa
                digunakan untuk membuat layout dari sebuah halaman web
              </p>
            </li>
            <li id="shape">
              <b>Membuat sebuah Bentuk</b>
              <p>
                Secara default element html berbentuk kotak, div dengan bantuan
                style bisa dibuat menjadi beberapa bentuk, contohnya frame bulat
                avatar
              </p>
              <div className="flex">
                <div
                  style={{
                    borderRadius: '50%',
                    border: '1px solid',
                    width: 100,
                    height: 100,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg"
                    alt=""
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </li>
            <li>
              <b>Membuat sebuah komponen</b>
              <p>
                karena sifatnya yang bisa mengelompokan element, div sering
                digunakan untuk membuat sebuah komponen dari aplikasi web.
                berikut meupakan contoh post pada instagram:
              </p>
              <img src={igDobah} alt="" />
            </li>
          </ol>
        </Section>
      </div>
    </div>
  );
};

export default Html;
