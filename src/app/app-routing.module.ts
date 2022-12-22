import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSpelovanjeComponent } from './spelovanje/home-spelovanje/home-spelovanje.component';
import { SlovaSpelovanjeComponent } from './spelovanje/slova-spelovanje/slova-spelovanje.component';

const routes: Routes = [{
  path:"",
  component: HomeSpelovanjeComponent
},
{
  path:"slova",
  component: SlovaSpelovanjeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
