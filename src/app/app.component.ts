import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaisesService } from './services/paises.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formulario: FormGroup;
  paises: any[];
  Yesdata: boolean;
  constructor(private paisesService: PaisesService) {
    this.paises = [];
    this.Yesdata = true;
    this.formulario = new FormGroup({
      filtro: new FormControl('todos'),
      valor: new FormControl(''),
    });

    
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.paisesService
      .getAll()
      .then((resolve) => {
        this.paises = resolve;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filtrar() {
    let filter = this.formulario.value.filtro;
    let value = this.formulario.value.valor;
    switch (filter) {
      case 'todos':
        this.getAll();
        break;
      case 'region':
        this.paisesService
          .getForRegion(value)
          .then((resolve) => (this.paises = resolve))
          .catch((error) => {
            this.Yesdata = false;
          });
        break;

      case 'lenguage':
        this.paisesService
          .getForLanguage(value)
          .then((resolve) => (this.paises = resolve))
          .catch((error) => {
            this.Yesdata = false;
          });
        break;

      case 'moneda':
        this.paisesService
          .getForMOneda(value)
          .then((resolve) => (this.paises = resolve))
          .catch((error) => {
            this.Yesdata = false;
          });

        break;
    }
  }
}
