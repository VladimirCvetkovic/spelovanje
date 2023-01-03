import { Injectable } from '@angular/core';
import { Slovo } from '../models/slovo';
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

  speluj(rec: string): Array<Slovo> {
    let slova: any = [];
    for (const slovo of rec) {
      const red = SLOVA.find(item => item.text === slovo.toLowerCase());
      slova.push(red);
    }
    return slova;
  }


  spelujAudio(rec: string): void {
    for (const slovo of rec) {

    }

  }

}
