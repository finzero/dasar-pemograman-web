import React from 'react';
import Section from '../Section';
import jsConsole from '../../assets/js-console.png';
import docWrite from '../../assets/doc-write.png';
import HighlightSyntax from '../HighlightSyntax';

const JSPengenalan = () => {
  return (
    <Section id="js-pengenalan" title="Pengenalan Javascript">
      <div className="card-content bg-white b-1 mt-1">
        <b>JavaScript</b> adalah bahasa pemrograman yang digunakan dalam
        pengembangan website agar lebih dinamis dan interaktif, dengan
        javascript kita bisa memanipulasi DOM (Document Object Model)
      </div>
      <div className="card-content bg-white b-1 mt-1">
        <div className="h4">Tools yang digunakan untuk belajar javascript</div>
        <ol>
          <li>Web Browser (Google Chrome, Firefox, Opera, dll)</li>
          <li>Teks Editor (VS Code, Sublime, Atom, Notepad++, dll)</li>
        </ol>
        <div className="h4 mb-1">Console pada browser</div>
        <p>
          pada browser kita bisa melakukan inspect element atau menekan F12,
          kemudian pindah ke tab <i>console</i>, seperti gambar di bawah
        </p>
        <img src={jsConsole} alt="" srcSet="" />
      </div>
      <div className="card-content bg-white b-1 mt-1">
        <div className="h4">Penggunaan javacript pada HTML</div>
        <p>
          Code javascript bisa disisipkan pada HTML di dalam header dan sebelum
          tag &lt;/body&gt; seperti berikut:
        </p>
        <HighlightSyntax>{`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Halo Javascript</title>
  <script>
    console.log('Belajar Javascript');
  </script>
</head>
<body>
  <!-- isi dari html -->
  <script>
    console.log('Mari Belajar Javascript');
    document.write('halo javascript')
  </script>
</body>
</html>`}</HighlightSyntax>
        <img src={docWrite} alt="" srcSet="" />
      </div>
    </Section>
  );
};

export default JSPengenalan;
