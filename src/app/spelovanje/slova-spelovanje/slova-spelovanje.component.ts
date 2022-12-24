import { Component, OnInit } from '@angular/core';
import { SLOVA } from 'src/app/shared/mock-slova';

@Component({
  selector: 'app-slova-spelovanje',
  templateUrl: './slova-spelovanje.component.html',
  styleUrls: ['./slova-spelovanje.component.scss']
})
export class SlovaSpelovanjeComponent {
  displayedColumns: string[] = ['positionColumn', 'text', 'pronunciation', 'visible'];
  dataSource = SLOVA;
}

