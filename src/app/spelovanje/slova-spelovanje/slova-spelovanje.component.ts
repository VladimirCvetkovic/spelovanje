import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SlovaService } from 'src/app/services/slova.service';


@Component({
  selector: 'app-slova-spelovanje',
  templateUrl: './slova-spelovanje.component.html',
  styleUrls: ['./slova-spelovanje.component.scss']
})
export class SlovaSpelovanjeComponent {
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4'];
  dataSource = new MatTableDataSource([]);;

  constructor(slovaService: SlovaService){
    this.dataSource.data = slovaService.getSlovaForTable();
  }
}

