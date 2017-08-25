import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';
import {GLOBAL} from './global';
import {Historial} from '../models/historial.model';

@Injectable()
export class HistorialService {
  public url:string;
  constructor(public http:Http) {
    this.url=GLOBAL.url;
   }

   consultaHistorialVehiculo(idvehiculo:number){
     return this.http.get(this.url+"historial/"+idvehiculo).map(res=>res.json());
   }

}
