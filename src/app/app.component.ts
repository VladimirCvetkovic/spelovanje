import { Component } from '@angular/core';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menu: Menu = [{
    icon: "home",
    text: "Home",
    path: "/"
  },
  {
    icon: "notes",
    text: "Slova",
    path: "slova"
  }]

  title = 'Spelovanje';

}
