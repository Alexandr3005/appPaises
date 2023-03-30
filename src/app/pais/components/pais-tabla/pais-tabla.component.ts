import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

import { Input } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  @Input() paises: Country[]=[];  //Importacion de interface

}
