import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { PaisInputComponent } from '../../components/pais-input/pais-input.component';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {




  termino: string = '';        //Lo que voy a buscar
  hayError: boolean = false;
  paises: Country[] = [];        //Almacenamiento paises --- Interfaz country

  constructor(private paisService: PaisService) {}
  

  buscar( termino: string){
    this.hayError = false;
  this.paisService.buscarCapital(termino).subscribe(paises => {    // sin el output, this.termino
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
