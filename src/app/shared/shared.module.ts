import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFieldModule } from '@angular/cdk/text-field';
// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


const MaterialComponents = [
  MatSlideToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...MaterialComponents,
    CommonModule,
    TextFieldModule,
  ],
  exports:[
    ...MaterialComponents,
    TextFieldModule,
  ]
})
export class SharedModule { }
