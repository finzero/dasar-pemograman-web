import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const JSLoop = () => {
  return (
    <Section id="js-loop" title="Perulangan dalam javascript">
      <div className="card-content bg-white b-1">
        <div>
          Perulangan adalah kode blok yang akan terus dijalankan selama kondisi
          belum terpenuhi, berikut beberapa contoh perulangan di dalam
          javascript:
        </div>
        <div className="h4">for</div>
        <HighlightSyntax
          title={'Deklarasi'}
          lang={'javascript'}
        >{`for (inisialisasi; kondisi; setelah_logic_dijalankan)
  statement`}</HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Contoh 1'}
        >{`const alphabet = ['A','B','C','D','E','F','G','H','I'];
for (let i = 0; i < alphabet.length; i++) {
  console.log('Huruf ke-'+(i+1)+' pada alfabet adalah '+alphabet[i])
}`}</HighlightSyntax>
        <div className="h4">do while</div>
        <HighlightSyntax lang={'javascript'} title={'Deklarasi'}>
          {`do
  statement
while (condition);`}
        </HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Contoh 1'}
        >{`const alphabet = ['A','B','C','D','E','F','G','H','I'];
let counter = 0;

do {
    console.log(alphabet[counter]);
    counter++;
} while (counter !== alphabet.length)`}</HighlightSyntax>
        <div className="h4">while</div>
        <HighlightSyntax lang={'javascript'} title={'Deklarasi'}>
          {`while (condition)
  statement`}
        </HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Contoh 1'}
        >{`const alphabet = ['A','B','C','D','E','F','G','H','I'];
let counter = 0;

while (counter !== alphabet.length) {
    console.log(alphabet[counter]);
    counter++;
}`}</HighlightSyntax>
        <div className="h4">for each</div>
        <HighlightSyntax lang={'javascript'} title={'Deklarasi'}>
          {`array.forEach((item)=>{
  statement
})`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Contoh 1'}>
          {`const olahraga_tim = [{nama: 'sepak bola', jumlah_pemain: 11},{nama: 'voli', jumlah_pemain: 6}];
olahraga_tim.forEach((olahraga)=>{
    console.log(olahraga.nama)
}`}
        </HighlightSyntax>
        <div className="h4">map</div>
        <HighlightSyntax lang={'javascript'} title={'Deklarasi'}>
          {`array.map((item)=>{
  statement
})`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Contoh 1'}>
          {`const olahraga_tim = [{nama: 'sepak bola', jumlah_pemain: 11},{nama: 'voli', jumlah_pemain: 6}];
olahraga_tim.map((olahraga)=>{
    console.log(olahraga.nama)
}`}
        </HighlightSyntax>
        <div className="h4">for in</div>
        <HighlightSyntax
          lang={'javascript'}
          title={'Deklarasi'}
        >{`for (variable in object)
  statement`}</HighlightSyntax>
        <HighlightSyntax
          title={'Contoh 1'}
          lang={'javascript'}
        >{`var languages = ["Javascript", "HTML", "CSS"];
for(let i in languages){
    console.log(languages[i])
}`}</HighlightSyntax>
        <HighlightSyntax
          title={'Contoh 2'}
          lang={'javascript'}
        >{`const olahraga = [{nama: 'sepak bola', jumlah_pemain: 11},{nama: 'voli', jumlah_pemain: 6}];
for(let i in olahraga){
    console.log(olahraga[i].nama)
}`}</HighlightSyntax>
        <div className="h4">for of</div>
        <HighlightSyntax
          lang={'javascript'}
          title={'Deklarasi'}
        >{`for (variable of object)
  statement`}</HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Contoh 1'}
        >{`const seminggu = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
for (const hari of seminggu) {
  console.log(hari);
}`}</HighlightSyntax>
        <HighlightSyntax
          lang={'javascript'}
          title={'Contoh 2'}
        >{`const olahraga_tim = [{nama: 'sepak bola', jumlah_pemain: 11},{nama: 'voli', jumlah_pemain: 6}];
for (const olahraga of olahraga_tim) {
  console.log(olahraga);
}}`}</HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSLoop;
