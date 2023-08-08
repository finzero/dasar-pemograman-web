import React from 'react';
import Section from '../Section';
import HighlightSyntax from '../HighlightSyntax';
import ifFlowChartImg from '../../assets/if-flowchart.jpg';

const JSCondition = () => {
  return (
    <Section id="js-condition" title="Kondisi pada javascript">
      <div className="card-content bg-white b-1">
        kondisi pada javascript adalah logika yang dijalankan ketika memenuhi
        kondisi tertentu.
        <div className="h4">contoh flowchart kondisi:</div>
        <img width={1024} src={ifFlowChartImg} alt="" srcSet="" />
        <div className="h4">Contoh kondisi pada javascript:</div>
        <HighlightSyntax lang={'javascript'} title={'If Else'}>
          {`let tebus_murah = false;
if (total_belanja >= 50000) {
  tebus_murah = true;
} else {
  tebus_murah = false;
}`}
        </HighlightSyntax>
        <HighlightSyntax lang={'javascript'} title={'Switch Case'}>
          {`const bulanIndex = new Date().getMonth();
let bulan; 
switch (bulanIndex) {
  case 0: bulan = 'Januari'; break;
  case 1: bulan = 'Febuari'; break;
  case 2: bulan = 'Maret'; break;
  case 3: bulan = 'April'; break;
  case 4: bulan = 'Mei'; break;
  case 5: bulan = 'Juni'; break;
  case 6: bulan = 'Juli'; break;
  case 7: bulan = 'Agustus'; break;
  case 8: bulan = 'September'; break;
  case 9: bulan = 'Oktober'; break;
  case 10: bulan = 'November'; break;
  case 11: bulan = 'Desember'; break;
}`}
        </HighlightSyntax>
      </div>
    </Section>
  );
};

export default JSCondition;
