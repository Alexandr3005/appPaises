import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';   // vd es el nombre del pais dinamicamente

  constructor( private http: HttpClient) { }
  

  buscarPais(termino: string): Observable<Country[]> {  //  Emite un arreglo de pais 

    const url = `${this.apiUrl}/name/ ${termino}`;  //Buscar paises por su nombre 
    return  this.http.get<Country[]>( url );
  }

  buscarCapital(termino: string): Observable<Country[]> {  //  Emite un arreglo de pais 

    const url = `${this.apiUrl}/capital/ ${termino}`;  //Buscar paises por su nombre 
    return  this.http.get<Country[]>( url );
  }



  
}
