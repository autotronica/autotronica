import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {VehiculoService} from '../../services/vehiculo.service';
import {Vehiculo} from '../../models/vehiculo.models';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  public vehiculos:Vehiculo[];
  public errormessage:any;
  public loading:boolean;

  constructor(private router:Router,private route:ActivatedRoute,private vehiculoservice:VehiculoService) {
    this.consultaVehiculos();
  }

  ngOnInit() {
  }

  consultaVehiculos(){
    this.loading=true;
    this.vehiculoservice.consultaVehiculos().subscribe(res=>{
      this.vehiculos=res.vehiculos;
      if(!this.vehiculos){
        console.log("No hay vehiculos cargados");
      }else{
        this.loading=false;
      }
    },error=>{
      this.errormessage=<any>error;
      console.log("Error en la consultaVehiculos: "+this.errormessage);
    });
  }
}
