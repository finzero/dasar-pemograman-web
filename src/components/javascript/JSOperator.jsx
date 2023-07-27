import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSOperator = () => {
  return (
    <Section id="js-operator" title="Operator Pada Javascript">
      <div className="card-content bg-white b-1 mt-1">
        <div className="h4">Operator Aritmatika</div>
        <HighlightSyntax
          lang={'javascript'}
          title={'Penjumlahan / Penggabungan (+)'}
        >
          {`// Penjumlahan
2 + 3; // 5

// penggabungan
2 + "20"; // "220"
2 + "text"; // "2text"`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Pengurangan (-)'}>
          {`3 - 2; // 1
"20" - 3; // 17
"20" - "text"; // NaN`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Perkalian (*)'}>
          {`2 * 3; // 6
2 * 20; // 40
2 * "text"; // NaN`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Pangkat (**)'}>
          {`2 ** 3; // 8
2 ** "4"; // 16
2 ** "text"; // NaN`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Pembagian (/)'}>
          {`4 / 2; // 2
16 / "4"; // 4
4 / "text"; // NaN`}
        </HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Modulus/Sisa Pembagian (%)'}
        >
          {`4 % 2; // 0
4 % 3; // 1
10 % 4 // 2
16 % "4"; // 0
4 % "text"; // NaN`}
        </HighlightSyntax>
        <div className="h4">Operator Penugasan</div>
        <HighlightSyntax lang={'javascript'}>
          {`var total_order = 2;

// menambah total_order sebanyak 1
total_order += 1; // 2 + 1 = 3

// mengurangi total_order sebanyak 1
total_order -= 1; // 3 - 1 = 2

// total_order dikali 2
total_order *= 2; // 2 * 2 = 4

// total_order dipangkat 2
total_order **= 2; // 4 ** 2 = 16

// total_order dibagi 2
total_order /= 2; // 16 / 2 = 8

// total_order sisa bagi 3
total_order %= 3; // 8 % 3 = 2`}
        </HighlightSyntax>
        <div className="h4">Operator Perbandingan</div>
        <div className="flex flex-wrap w-100 gap-1">
          <div className="w-49">
            <HighlightSyntax lang={'javascript'} title={'Lebih Besar'}>
              {`1 > 2; // false
3 > 2; // true
3 > 3; // false`}
            </HighlightSyntax>
          </div>
          <div className="w-49">
            <HighlightSyntax lang={'javascript'} title={'Lebih Kecil'}>
              {`1 < 2; // true
3 < 2; // false
3 < 3; // false`}
            </HighlightSyntax>
          </div>
          <div className="w-49">
            <HighlightSyntax lang={'javascript'} title={'Sama Dengan'}>
              {`1 == 2; // false
3 == 2; // false
3 == 3; // true
3 == "3"; // true
3 === "3"; // false`}
            </HighlightSyntax>
          </div>
          <div className="w-49">
            <HighlightSyntax lang={'javascript'} title={'Tidak Sama Dengan'}>
              {`1 != 2; // true
3 != 2; // true
3 != 3; // false
3 != "3"; // false
3 !== "3"; // true`}
            </HighlightSyntax>
          </div>
          <div className="w-49">
            <HighlightSyntax
              lang={'javascript'}
              title={'Lebih Besar Sama Dengan'}
            >
              {`1 >= 2; // false
3 >= 2; // true
3 >= 3; // true
3 >= "3"; // true`}
            </HighlightSyntax>
          </div>
          <div className="w-49">
            <HighlightSyntax
              lang={'javascript'}
              title={'Lebih Kecil Sama Dengan'}
            >
              {`1 <= 2; // true
3 <= 2; // false
3 <= 3; // true
3 <= "3"; // true`}
            </HighlightSyntax>
          </div>
        </div>
        <div className="h4">Operator Logika</div>

        <div>
          <HighlightSyntax lang={'javascript'} title={'AND (&&)'}>
            {`var nilai_minimum_lulus = 60;
var minimum_kehadiran = 90; // dalam persen

var nilai_budi = 70;
var nilai_anton = 80;

var kehadiran_budi = 80;
var kehadiran_anton = 90;

nilai_budi >= nilai_minimum_lulus && kehadiran_budi >= minimum_kehadiran; // false
nilai_anton >= nilai_minimum_lulus && kehadiran_anton >= minimum_kehadiran; // true`}
          </HighlightSyntax>
        </div>
        <div>
          <HighlightSyntax lang={'javascript'} title={'OR (||)'}>
            {`var daftar_belanja = ["daging ayam", "daging bebek"];
            
daftar_belanja.includes('daging ayam') || daftar_belanja.includes('daging sapi'); // true
daftar_belanja.includes('ikan') || daftar_belanja.includes('bawang'); // false`}
          </HighlightSyntax>
        </div>
      </div>
    </Section>
  );
};

export default JSOperator;
