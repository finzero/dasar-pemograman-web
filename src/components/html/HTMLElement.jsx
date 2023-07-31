import React from 'react';
import Section from '../Section';
import element from '../assets/element.png';

const HTMLElement = () => {
  return (
    <Section id="element" title="Element">
      <p>
        <b>Element</b> adalah komponen yang menyusun sebuah html, berikut
        merupakan contoh element: <br />
      </p>
      <img className="m-w-full" src={element} alt="Element HTML" width={700} />
      <h3>Atribut pada Element</h3>
      <ul>
        <li>
          <code className="w3-codespan">href</code> pada{' '}
          <code className="w3-codespan">&lt;a&gt;</code> menentukan tujuan dai
          url jika di klik
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
          <code className="w3-codespan">style</code> digunakan untuk menambahkan
          styles pada sebuah element, seperti color, font, size, dan lainnya
        </li>
        <li>
          <code className="w3-codespan">lang</code> pada{' '}
          <code className="w3-codespan">&lt;html&gt;</code> menunjukan bahasa
          yang digunakan di dalam website
        </li>
        <li>
          <code className="w3-codespan">title</code> memberikan informasi judul
          pada sebuah element
        </li>
      </ul>
    </Section>
  );
};

export default HTMLElement;
