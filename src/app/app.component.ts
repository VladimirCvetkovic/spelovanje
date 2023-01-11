import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  darkMode: boolean = false;

  @HostBinding('class')
  get themeMode(){
    return this.darkMode ? 'darkMode' : '';
  }

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

  constructor(
    private observer: BreakpointObserver,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

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
    this.changeDetectorRef.detectChanges();
  }

}
