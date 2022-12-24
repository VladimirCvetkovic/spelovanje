import { Injectable } from '@angular/core';
import { SLOVA } from '../shared/mock-slova';

@Injectable({
  providedIn: 'root'
})
export class SlovaService {
  slova = SLOVA;

  getSlova(){
    return this.slova;
  }

  speluj(word: string): Array<string>{

    //const returnText = `${text} = ${pronunciation}`
    return [];
  }

  constructor() { }
}
