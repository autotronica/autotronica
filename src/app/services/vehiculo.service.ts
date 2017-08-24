import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {GLOBAL} from './global';
import 'rxjs/Rx';
import {Vehiculo} from '../models/vehiculo.models';

@Injectable()
export class VehiculoService {
  public url;
  constructor(public http:Http) {
    this.url=GLOBAL.url;
  }

consultaVehiculos(){
  return this.http.get(this.url+"vehiculos").map(res=>res.json());
}

consultaVehiculo(){}

modificarVehiculo(){}

eliminarVehiculo(){}


}