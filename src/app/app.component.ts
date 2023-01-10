import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentChecked{

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public menu: Menu = [{
    icon: "home",
    text: "Home",
    path: ""
  },
  {
    icon: "notes",
    text: "Slova",
    path: "slova"
  }]

  title = 'Spelovanje';

  constructor (private observer: BreakpointObserver, private changeDetectorRef: ChangeDetectorRef) { }
  
  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit(): void {
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

  // toggle button
  isDarkTheme: boolean = true;


}
