import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSEvent = () => {
  return (
    <Section id="js-event" title="Event pada javascript">
      <div className="card-content bg-white b-1 mt-1">
        <b>Event</b> adalah sesuatu yang terjadi ketika ada aksi yang dilakukan
        oleh pengguna atau sistem pada halaman web. Berikut event yang sering
        digunakan pada javascript:
        <div className="h4 mt-1">Event Mouse (Mouse Events):</div>
        <div>
          <code className="text-red">click</code>: Terjadi ketika elemen diklik
          dengan menggunakan tombol kiri mouse.
        </div>
        <div>
          <code className="text-red">dblclick:</code> Terjadi ketika elemen
          diklik dua kali dengan cepat.
        </div>
        <div>
          <code className="text-red">mouseover:</code> Terjadi ketika kursor
          mouse memasuki area elemen.
        </div>
        <div>
          <code className="text-red">mouseout</code>: Terjadi ketika kursor
          mouse keluar dari area elemen.
        </div>
        <div>
          <code className="text-red">mousemove</code>: Terjadi ketika kursor
          mouse bergerak di atas elemen.
        </div>
        <div className="h4 mt-1">Event Keyboard (Keyboard Events):</div>
        <div>
          <code className="text-red">keydown</code>: Terjadi saat tombol
          keyboard ditekan (berulang saat tombol ditekan dan ditahan).
        </div>
        <div>
          <code className="text-red">keyup</code>: Terjadi ketika tombol
          keyboard dilepaskan setelah ditekan.
        </div>
        <div>
          <code className="text-red">keypress</code>: Sebelumnya digunakan untuk
          mendeteksi karakter tertentu, tetapi kini lebih disarankan untuk
          menggunakan keydown atau keyup.
        </div>
        <div className="h4 mt-1">Event Form (Form Events):</div>
        <div>
          <code className="text-red">submit</code>: Terjadi ketika sebuah
          formulir dikirim.
        </div>
        <div>
          <code className="text-red">change</code>: Terjadi ketika nilai elemen
          input berubah (baik melalui pengetikan atau melalui tindakan lain).
        </div>
        <div>
          <code className="text-red">select</code>: Terjadi ketika input tipe
          select dipilih.
        </div>
        <div className="h4 mt-1">Event Window (Window Events):</div>
        <div>
          <code className="text-red">load</code>: Terjadi ketika halaman web
          telah dimuat sepenuhnya.
        </div>
        <div>
          <code className="text-red">resize</code>: Terjadi ketika jendela
          browser diubah ukurannya.
        </div>
        <div>
          <code className="text-red">scroll</code>: Terjadi ketika pengguna
          menggulir halaman.
        </div>
        <div className="h4 mt-1">Contoh penggunaan event</div>
        <HighlightSyntax>
          {`<!DOCTYPE html>
<html>
<head>
    <title>Contoh Event pada JavaScript</title>
</head>
<body>
    <button id="myButton">Klik Saya</button>

    <script>
        // Mengambil referensi elemen tombol
        const button = document.getElementById('myButton');

        // Menambahkan event listener untuk event 'click'
        button.addEventListener('click', function() {
            alert('Tombol diklik!');
        });
    </script>
</body>
</html>
`}
        </HighlightSyntax>
        <HighlightSyntax>{`<!DOCTYPE html>
<html>
<head>
  <title>Contoh Event pada JavaScript</title>
  <script>
    function doSomething() {
      console.log('saya log fungsi');
    }
  </script>
</head>

<body>
  <!-- event pada tombol -->
  <button onclick="doSomething()">Klik Saya</button>

  <!-- event pada input -->
  <input type="text" onchange="doSomething()" />
  <input type="text" onkeypress="doSomething()" />
  <input type="text" onkeyup="doSomething()" />

  <!-- event pada select -->
  <select onselect="doSomething()">
    <option value="1">pilihan 1</option>
    <option value="2">pilihan 2</option>
  </select>
</body>
</html>`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSEvent;
