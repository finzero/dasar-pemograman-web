import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const HTMLStruktur = () => {
  return (
    <Section id="struktur-html" title="Struktur Dasar HTML">
      <div className="card-content bg-white b-1">
        <p>
          HTML merupakan singkatan dari Hypertext Markup Language merupakan
          bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi
          web
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
          <code className="w3-codespan"> &lt;!DOCTYPE html&gt;</code> Menunjukan
          versi HTML
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
    </Section>
  );
};

export default HTMLStruktur;
