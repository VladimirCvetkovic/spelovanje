import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSpelovanjeComponent } from './home-spelovanje/home-spelovanje.component';
import { SlovaSpelovanjeComponent } from './slova-spelovanje/slova-spelovanje.component';


// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HomeSpelovanjeComponent,
    SlovaSpelovanjeComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    HomeSpelovanjeComponent,
    SlovaSpelovanjeComponent
  ]
})
export class SpelovanjeModule { }
