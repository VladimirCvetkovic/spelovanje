import { Injectable } from '@angular/core';
import { SLOVA } from '../shared/mock-slova';

@Injectable({
  providedIn: 'root'
})
export class SlovaService {

  getSlovaForTable():any{   
    let tableData = [];
    var maxRow = Math.max(...SLOVA.map(o=>o.row)); 
    for (let index = 0; index < maxRow; index++) {
      const filterRow = SLOVA.filter(item => item.row == index + 1);
      let rowObj = {};
      for (const item of filterRow) {
        if (item.visible) rowObj = { ...rowObj, ["column" + item.column]: `${item.text.toUpperCase()}, ${item.text} (${item.pronunciation})` }
      }
      tableData.push(rowObj);
    }
    console.log(tableData);
    return tableData;
    
  }

  speluj(word: string): Array<string>{
    const nizSlova = [...word] ;
    console.log(nizSlova);
    let reci: any = [];

    for (let k = 0; k < nizSlova.length; k++){
      var rec = SLOVA.find(function(slova, index) {
        if(slova.text == nizSlova[k]){
          var returnText = `${slova.text} = ${slova.pronunciation}`;
          reci.push(returnText);
          console.log(reci);
        }
      });
    }

    
      
      

    //const returnText = `${text} = ${pronunciation}`
    return [];
  }

}
