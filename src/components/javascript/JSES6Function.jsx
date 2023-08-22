import React, { useEffect } from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';

const display_es6 =
  '`nilai matematika ${siswa.nama} adalah ${nilai.matematika}`';
const display_es5 = `'nilai matematika ' + siswa.nama + ' adalah ' + nilai.matematika`;

const JSES6Function = () => {
  return (
    <Section id="js-es6function" title="Fungsi ES6">
      <div className="card-content bg-white b-1">
        <div className="h4">Template Literal</div>
        <HighlightSyntax lang={'javascript'}>
          {`const siswa = { nama: 'Isnan' };
const nilai = { matematika: 70, b_inggris: 90 };
// ES6
const display_es6 = ${display_es6}
// ES5
const display_es5 = ${display_es5}`}
        </HighlightSyntax>
        <div className="h4">Property Shorthand</div>
        <HighlightSyntax lang={'javascript'}>
          {`var x = 0, y = 0
// ES6
obj = { x, y }
// ES5
obj = { x: x, y: y };`}
        </HighlightSyntax>
        <div className="h4">Object Matching</div>
        <HighlightSyntax
          lang={'javascript'}
        >{`const abc = () => ({a: 'value a', b: 'value b', c: 'value c'})
// ES6
const {a, b, c, d} = abc();
// ES5
const a = abc().a;
const b = abc().b;
const c = abc().c;
const d = abc().d;
`}</HighlightSyntax>
        <div className="h4">Object Matching, Deep Matching</div>
        <HighlightSyntax
          lang={'javascript'}
        >{`const abc = () => ({a: 'value a', b: { child_b: 'value of child_b' }})
// ES6
const {a, b: {child_b}} = abc();
// ES5
const a = abc().a;
const b = abc().b.child_b;
`}</HighlightSyntax>
        <div className="h4">Array Mapping</div>
        <HighlightSyntax lang={'javascript'}>{`const arr_of_num = [1,2,3,4];
// ES6
const [a, b, c, d] = arr_of_num;
// ES5
const a = arr_of_num[0];
const b = arr_of_num[1];
const c = arr_of_num[2];
const d = arr_of_num[3];
`}</HighlightSyntax>
        <div className="h4">Rest Parameter</div>
        <HighlightSyntax lang={'javascript'}>{`function fn(x, y, ...a) {
    console.log(x, y, a)
}
fn(1, 2, "hello", 1, true)`}</HighlightSyntax>
        <div className="h4">Spread Operator</div>
        <HighlightSyntax lang={'javascript'}>{`var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]`}</HighlightSyntax>
        <div className="h4">Class</div>
        <HighlightSyntax lang={'javascript'}>
          {`// class Animal
class Animal {
  // property dari class Animal
  name;

  // constructor pada class animal, akan dipanggil ketika class Animasi di instanisasi
  constructor(name) {
    // assign parameter name ke property name;
    this.name = name;
  }
}

// Class Zoo
class Zoo {
  // property dari class Zoo
  animals = [];
  // fungsi untuk tambah binatang
  addNewAnimal(name) {
    // memasukan nama binatang ke dalam array binatang
    this.animals.push(new Animal(name))
  }
  // fungsi untuk hapus binatang
  removeAnimal(name) {
    // cari index binatang yang akan di hapus pada array
    const idx = this.animals.findIndex((animal) => animal.name === name);
    // hapus binatang dari array animals
    this.animals.splice(idx, 1);
  }
}`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSES6Function;
