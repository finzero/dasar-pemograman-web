import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSVariable = () => {
  return (
    <Section id="js-variable" title="Variabel">
      <div className="card-content bg-white b-1">
        <div className="h3">Pengertian Variabel</div>
        <p>
          <b>Variabel</b> adalah penanda identitas/nama yang digunakan untuk
          menampung suatu nilai. Variabel bisa diisi dengan berbagai macam nilai
          seperti string (teks), number (angka), objek dan array.
        </p>

        <HighlightSyntax title={'Cara penulisan variabel'}>{`var nama_variabel;
nama_variabel = 'nilai_variabel';`}</HighlightSyntax>
      </div>
      <div className="card-content bg-white b-1 mt-1">
        <div className="h3">Nilai dari Variabel</div>
        <HighlightSyntax title={'String'}>{`var merk_mobil = 'xpander';
var alamat = 'Jl. Grand Hotel No.33E, Lembang, Kabupaten Bandung Barat, Jawa Barat.'`}</HighlightSyntax>
        <HighlightSyntax title={'Number'}>{`var harga = 20000;
var jumlah_barang = 10;`}</HighlightSyntax>
        <HighlightSyntax title={'Boolean'}>{`var lulus = true;
var menikah = false;`}</HighlightSyntax>
        <HighlightSyntax
          title={'Array'}
        >{`var varian_susu = ['strawberi', 'coklat', 'vanila'];
var merk_tv = ['toshiba', 'sharp', 'xiaomi', 'sony'];

// mengambil nilai pada index array tertentu
merk_tv[0]; // toshiba
merk_tv[2]; // xiaomi
merk_tv[4]; // undefined`}</HighlightSyntax>
        <HighlightSyntax title={'Object'}>{`var mobil = {
  warna: 'hitam',
  plat: 'D 1234 ABC',
  cc: 3000,
  tahun: '2020'
};

// mengambil nilai tertentu pada object
mobil.warna; // hitam
mobil.cc; // 3000
mobil.asuransi; // undefined`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSVariable;
