import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSpelovanjeComponent } from './home-spelovanje/home-spelovanje.component';
import { SlovaSpelovanjeComponent } from './slova-spelovanje/slova-spelovanje.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeSpelovanjeComponent,
    SlovaSpelovanjeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeSpelovanjeComponent,
    SlovaSpelovanjeComponent
  ]
})
export class SpelovanjeModule { }
