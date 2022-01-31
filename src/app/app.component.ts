import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
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
  showSelect:boolean;
  spinner:boolean;
  valorVacio:boolean;
  constructor(private paisesService: PaisesService) {
    this.valorVacio = false;
    this.paises = [];
    this.Yesdata = true;
    this.spinner = false;
    this.formulario = new FormGroup({
      filtro: new FormControl('todos'),
      valor: new FormControl(''),
    });
    this.showSelect = false;

  }


  cambiar(){
    this.showSelect = this.formulario.value.filtro==='todos'?false:true;
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.spinner = true;
    this.paisesService.getAll()
      .then((resolve) => {
        this.paises = resolve;
        this.spinner = false;
      })
      .catch((error) => {
        this.Yesdata = false;
        this.spinner = false;
      });
  }

  filtrar() {
    this.paises = [];
    let filter = this.formulario.value.filtro;
    let value = this.formulario.value.valor;
    
    if(value === '' && (value!=='' || filter!=='todos')){
      console.log('vacio');
      this.valorVacio=true;
    }else{
      this.spinner = true;
      this.valorVacio = false;
      switch (filter) {
        case 'todos':
          this.getAll();
          break;
        case 'region':
          this.paisesService
            .getForRegion(value)
            .then((resolve) => {
              this.paises = resolve;
              this.spinner = false;
            })
            .catch((error) => {
              this.Yesdata = false;
              this.spinner = false;
            });
          break;
        case 'lenguage':
          this.paisesService
            .getForLanguage(value)
            .then((resolve) => {
              this.paises = resolve;
              this.spinner = false;
            })
            .catch((error) => {
              this.Yesdata = false;
              this.spinner = false;
            });
          break;
  
        case 'moneda':
          this.paisesService
            .getForMOneda(value)
            .then((resolve) => {
              this.paises = resolve;
              this.spinner = false;
            })
            .catch((error) => {
              this.Yesdata = false;
              this.spinner = false;
            });
  
          break;
      }
    }  
  }
}
