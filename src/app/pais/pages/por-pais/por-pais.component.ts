import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { NgModel } from '@angular/forms';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';        //Lo que voy a buscar
  hayError: boolean = false;
  paises: Country[] = [];        //Almacenamiento paises --- Interfaz country

  constructor(private paisService: PaisService) {}
  

  buscar( termino: string){
    this.hayError = false;
  this.paisService.buscarPais(termino).subscribe(paises => {    // sin el output, this.termino
    this.hayError = false;                    //ngIf en html para aparecer mensaje de error si la respuesta no es correcta

    this.paises = paises;


  }, (err) => {
    this.hayError = true;
    this.paises = [];
    console.info(err);

  }

  ) 
 }

}
