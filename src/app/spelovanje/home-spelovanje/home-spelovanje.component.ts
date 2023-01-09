import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SlovaService } from 'src/app/services/slova.service';
import { Slovo }from 'src/app/models/slovo';




@Component({
  selector: 'app-home-spelovanje',
  templateUrl: './home-spelovanje.component.html',
  styleUrls: ['./home-spelovanje.component.scss']
})
export class HomeSpelovanjeComponent {
  form: FormGroup = new FormGroup({ rec: new FormControl('', [Validators.required]) })
  izgovorSlova: Slovo[] = [];
  constructor(private slovaService: SlovaService) { }

  speluj(): void{
    this.izgovorSlova = this.slovaService.speluj(this.form.value?.rec);
  }

  spelujAudio(): void{
    this.slovaService.spelujAudio(this.form.value?.rec);
  }

}
