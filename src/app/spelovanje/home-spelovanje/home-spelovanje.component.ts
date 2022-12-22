import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-home-spelovanje',
  templateUrl: './home-spelovanje.component.html',
  styleUrls: ['./home-spelovanje.component.scss']
})
export class HomeSpelovanjeComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor (private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}
