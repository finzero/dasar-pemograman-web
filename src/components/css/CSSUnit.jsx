import React from 'react';
import Section from '../Section';

const CSSUnit = () => {
  return (
    <Section id="css-unit" title="Unit pada CSS">
      <div className="card-content bg-white b-1" style={{ marginTop: 10 }}>
        <h4>Satuan Absolute</h4>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Satuan</th>
              <th>Penjelasan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>cm</td>
              <td>centimeter</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>mm</td>
              <td>millimeter</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>in</td>
              <td>inches (1 in = 96 px = 2.54 cm)</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>px</td>
              <td>pixels (1 px = 1/96 dari 1 inches)</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>pt</td>
              <td>points (1 pt = 1/72 dari 1 inches)</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>pc</td>
              <td>picas (1 pc = 12 pt)</td>
            </tr>
          </tbody>
        </table>
        <h4>Satuan Relative</h4>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Satuan</th>
              <th>Penjelasan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>em</td>
              <td>
                relative pada font-size untuk elemen (font-size 2em artinya
                nilainya 2 kali dari elemen induk)
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>ex</td>
              <td>relative pada tinggi huruf x font yang aktif</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>rem</td>
              <td>relative pada font-size pada elemen root</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>vw</td>
              <td>relative 1% pada lebar tampilan layar</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>vh</td>
              <td>relative 1% pada tinggi tampilan layar</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>%</td>
              <td>relative sebesar 1/100 dari elemen induk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default CSSUnit;
