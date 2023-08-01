import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSArray = () => {
  return (
    <Section id="js-array" title="Fungsi Untuk Array">
      <div className="card-content bg-white b-1 mt-1">
        <p>Fungsi-fungsi yang biasa digunakan untuk array:</p>
        <HighlightSyntax lang={'javascript'}>
          {`var arrRandom = [1, 'text', true, {key: 'value'}];
var arrOfObject = [
  { nama: 'Aji', jenisKelamin: 'L' },
  { nama: 'Ani', jenisKelamin: 'P' },
  { nama: 'Budi', jenisKelamin: 'L' },
  { nama: 'Cika', jenisKelamin: 'P' },
  { nama: 'Dinda', jenisKelamin: 'P' },
];`}
        </HighlightSyntax>
        <HighlightSyntax title={'Filter'} lang={'javascript'}>
          {`// Filter item dari array yang tipe-nya number
arrRandom.filter(data => typeof data == 'number')

// Filter data siswa yang memiliki jenis kelamin perempuan
arrOfObject.filter(data => data.jenisKelamin === 'P')`}
        </HighlightSyntax>
        <HighlightSyntax title={'Find'} lang={'javascript'}>
          {`// Mencari siswa yang memiliki nama dinda
arrOfObject.find(data => data.nama === 'Dinda');

// Mencari 1 siswa dengan jenis kelamin Laki-Laki
arrOfObject.find(data => data.jenisKelamin === 'L'); // ❌ find hanya akan mengembalikan paling banyak 1 data
`}
        </HighlightSyntax>
        <HighlightSyntax title={'Find Index'} lang={'javascript'}>
          {`// Mencari index dari data yg tipe-nya number
arrRandom.findIndex(data => typeof data == 'number');`}
        </HighlightSyntax>
        <HighlightSyntax title={'Every'} lang={'javascript'}>
          {`// mengecek apakah semua data di dalam array sesuai dengan kondisi yang ditentukan
arrOfObject.every(data => data.jenisKelamin === 'L');`}
        </HighlightSyntax>
        <HighlightSyntax title={'Some'} lang={'javascript'}>
          {`// mengecek apakah sebagian data di dalam array sesuai dengan kondisi yang ditentukan
arrOfObject.some(data => data.jenisKelamin === 'L');`}
        </HighlightSyntax>
        <HighlightSyntax title={'Includes'} lang={'javascript'}>
          {`// mengecek apakah di dalam array terdapat data yang di cari
arrRandom.includes(1);`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSArray;
