import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {VehiculoService} from '../../services/vehiculo.service';
import {Vehiculo} from '../../models/vehiculo.model';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  public vehiculos:Vehiculo[];
  public errormensaje:any;
  public cargando:boolean;

  constructor(private router:Router,private route:ActivatedRoute,private vehiculoservice:VehiculoService) {
    this.consultaVehiculos();
  }

  ngOnInit() {
  }

  consultaVehiculos(){
    this.cargando=true;
    this.vehiculoservice.consultaVehiculos().subscribe(res=>{
      this.vehiculos=res.vehiculos;
      if(!this.vehiculos){
        console.log("No hay vehiculos cargados");
      }else{
        this.cargando=false;
      }
    },error=>{
      this.errormensaje=<any>error;
      console.log("Error en la consultaVehiculos: "+this.errormensaje);
    });
  }
}
