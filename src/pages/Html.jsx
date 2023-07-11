import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import folderHtml from '../assets/folder-html.png';
import element from '../assets/element.png';

const Html = () => {
  const htmlSkeleton = (content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${content}
</body>
</html>`;

  const openMateri = (idx) => {
    const materi = document.querySelectorAll('.card-content .materi');
    materi[idx].style.display = 'block';
  };

  return (
    <div className="card-content">
      <section className="section">
        <div role="button" className="title" onClick={() => openMateri(0)}>
          Struktur Dasar HTML
        </div>
        <div className="materi">
          <SyntaxHighlighter
            language="html"
            style={atelierForestLight}
            showInlineLineNumbers
            wrapLongLines
          >
            {htmlSkeleton('')}
          </SyntaxHighlighter>
          <div className="mb-1">
            <code className="w3-codespan"> &lt;!DOCTYPE html&gt;</code>{' '}
            Menunjukan versi HTML
          </div>
          <div className="mb-1">
            <code className="w3-codespan"> &lt;html lang="en"&gt;</code> Tag
            Pembuka HTML
          </div>
          <div className="mb-1">
            <code className="w3-codespan"> &lt;head&gt;</code> Bagian head, bisa
            berisi title, file css, file js & meta
          </div>
          <div className="mb-1">
            <code className="w3-codespan"> &lt;body&gt;</code> Bagian body, bisa
            berisi konten dari sebuah aplikasi web
          </div>
        </div>
      </section>
      <section className="section">
        <div className="title" onClick={() => openMateri(1)}>
          HTML Tag
        </div>
        <div className="materi">
          <div>Berikut merupakan tag HTML yang umum digunakan</div>
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
                <td>&lt;form&gt;</td>
                <td>HTML Text Tags</td>
                <td>Strong</td>
              </tr>
              <tr>
                <td>&lt;input&gt;</td>
                <td>HTML Text Tags</td>
                <td>Strong</td>
              </tr>
              <tr>
                <td>&lt;textarea&gt;</td>
                <td>HTML Text Tags</td>
                <td>Strong</td>
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
        </div>
      </section>
      <section className="section">
        <div className="title" onClick={() => openMateri(2)}>
          Cara Membuat HTML
        </div>
        <div className="materi">
          <SyntaxHighlighter
            language="html"
            style={atelierForestLight}
            showInlineLineNumbers
            wrapLongLines
          >
            {htmlSkeleton('ini adalah halaman contact')}
          </SyntaxHighlighter>
          Kalian bisa copy code di atas, kemudian save dengan nama
          <b> [nama_file].html</b>, misal <b> contact.html</b>
          <h3>Best Practice</h3>
          <hr />
          <div>
            <b>1. Gunakan Huruf Kecil untuk tag</b>
            <SyntaxHighlighter
              language="html"
              style={atelierForestLight}
              showInlineLineNumbers
              wrapLongLines
            >
              {`<p>text <b>bold</b>, text <i>italic</i>, text <u>underscore</u></p>`}
            </SyntaxHighlighter>
            hasil:{' '}
            <p>
              text <b>bold</b>, text <i>italic</i>, text <u>underscore</u>
            </p>
          </div>
          <div>
            <b>2. Pastikan Tag ditutup dengan benar</b>
            <SyntaxHighlighter
              language="html"
              style={atelierForestLight}
              showInlineLineNumbers
              wrapLongLines
            >
              {`<p>text <b><i><u>bold</u></i></b></p>`}
            </SyntaxHighlighter>
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
        </div>
      </section>
      <section className="section">
        <div className="title" onClick={() => openMateri(3)}>
          Element
        </div>
        <div className="materi">
          <p>
            <b>Element</b> adalah komponen yang menyusun sebuah html, berikut
            merupakan contoh element: <br />
          </p>
          <img src={element} alt="Element HTML" width={700} />
          <h3>Atribut pada Element</h3>
          <ul>
            <li>
              <code class="w3-codespan">href</code> pada{' '}
              <code class="w3-codespan">&lt;a&gt;</code> menentukan tujuan dai
              url jika di klik
            </li>
            <li>
              <code class="w3-codespan">src</code> pada{' '}
              <code class="w3-codespan">&lt;img&gt;</code> menentukan sumber
              dari sebuah gambar/file
            </li>
            <li>
              <code class="w3-codespan">width</code> dan{' '}
              <code class="w3-codespan">height</code> pada{' '}
              <code class="w3-codespan">&lt;img&gt;</code> digunakan untuk
              menentukan height & width pada sebuah gambar
            </li>
            <li>
              <code class="w3-codespan">alt</code> pada{' '}
              <code class="w3-codespan">&lt;img&gt;</code> nilai yang ada di
              dalam alt akan di munculkan jika sumber image tidak ada
            </li>
            <li>
              <code class="w3-codespan">style</code> digunakan untuk menambahkan
              styles pada sebuah element, seperti color, font, size, dan lainnya
            </li>
            <li>
              <code class="w3-codespan">lang</code> pada{' '}
              <code class="w3-codespan">&lt;html&gt;</code> menunjukan bahasa
              yang digunakan di dalam website
            </li>
            <li>
              <code class="w3-codespan">title</code> memberikan informasi judul
              pada sebuah element
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="title" onClick={() => openMateri(4)}>
          index.html
        </div>
        <div className="materi">
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
        </div>
      </section>
    </div>
  );
};

export default Html;
