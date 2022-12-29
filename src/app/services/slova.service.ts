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
    let Red = [];
    const nizSlova = [...word] ;
    console.log(nizSlova);
    for (let index = 0; index < nizSlova.length; index++){
        let obj = SLOVA.find(o => o.text == nizSlova[0]);  
        console.log(obj);
    }
  

    

    //const returnText = `${text} = ${pronunciation}`
    return [];
  }

}
