import { Injectable } from '@angular/core';
import { Slova } from '../models/slova';

@Injectable({
  providedIn: 'root'
})
export class SlovaService {

  slova: Slova = [
    {
      column: 1,
      text: "a",
      pronunciation: "ej",
      visible: true
    },
    {
      column: 1,
      text: "a",
      pronunciation: "ej",
      visible: true
    }
  ]


  speluj(word: string): Array<string>{

    //const returnText = `${text} = ${pronunciation}`
    return [];
  }

  constructor() { }
}
