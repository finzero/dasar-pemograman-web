import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSFunction = () => {
  return (
    <Section id="js-function" title="Fungsi">
      <div className="card-content bg-white b-1 mt-1">
        <div className="h3">Fungsi di javascript</div>
        <p>
          Fungsi adalah blok kode yang dapat dipanggil untuk mengeksekusi
          tugas/logika tertentu.
        </p>
        <p>Pada fungsi terdapat keyword, nama fungsi, parameter & logika.</p>
        <div className="h3">Cara mendeklarasikan fungsi</div>
        <HighlightSyntax lang={'javascript'}>{`function namaFungsi(parameter) { 
  // logic disini 
}

// Anonymus Function
const namaFungsi = function(parameter) {
  // logic disini
}

// Arrow Function
const namaFungsi = (paramter) => // logic disini`}</HighlightSyntax>
        <div className="h3">Cara memanggil fungsi</div>
        <HighlightSyntax
          lang={'javascript'}
        >{`namaFungsi('ini parameter string')`}</HighlightSyntax>
        <div className="h3 mt-1">Contoh Fungsi:</div>
        <HighlightSyntax
          lang={'javascript'}
        >{`// Fungsi penjumlahan yang mengembalikan nilai hasil penjumlahan
function tambah(a, b) {
  return a + b;
}

// atau dengan arrow function
const tambah = (a, b) => a + b

// assign hasil perhitungan dari fungsi ke dalam variable hasil
const hasil = tambah(1, 2);

// fungsi dengan nilai parameter default
const setWarna = (warna = 'merah') => console.log('set warna '+warna);

// memanggil fungsi setWarna tanpa parameter
setWarna(); // set warna merah

// memanggil fungsi setWarna dengan parameter
setWarna('biru'); // set warna biru

`}</HighlightSyntax>
      </div>
      <div className="card-content bg-white b-1 mt-1">
        <div className="h3">Scope variabel pada fungsi</div>
        <p>
          Terdapat 3 cara pendeklarasian variabel pada javascript yaitu dengan
          var, let & const.
        </p>
        <HighlightSyntax
          title={'var'}
          lang={'javascript'}
        >{`function namaFungsi() {
  if (true) {
    var x = 10; // Variabel x hanya terbatas pada fungsi namaFungsi
  }
  console.log(x); // Output: 10, karena variabel x adalah variabel fungsi yang dapat diakses di luar if statement.
}`}</HighlightSyntax>
        <HighlightSyntax
          title={'let'}
          lang={'javascript'}
        >{`function namaFungsi() {
  if (true) {
    let y = 20; // Variabel y hanya terbatas pada blok if
  }
  console.log(y); // Error: y is not defined, karena variabel y hanya dideklarasikan dalam blok if.
}`}</HighlightSyntax>
        <HighlightSyntax title={'const'} lang={'javascript'}>{`const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable.

const myArray = [1, 2, 3];
myArray.push(4); // Tetap berfungsi, karena kita tidak meng-assign ulang myArray.
myArray = [5, 6, 7]; // Error: Assignment to constant variable.
`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSFunction;
