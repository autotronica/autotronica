import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {HistorialService} from '../../services/historial.service';
import {Historial} from '../../models/historial.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  public idvehiculo:number;
  public historial:Historial;
  public errormensaje:any;
  public cargando:boolean;
  constructor(private router:Router,private route:ActivatedRoute,private historialservice:HistorialService) {
    this.historial=new Historial(0,0,0,0,0,"");
    this.consultaHistorialVehiculo();
  }

  ngOnInit() {
  }

  consultaHistorialVehiculo(){
    this.cargando=true;
    this.route.params.forEach((params:Params)=>{
      this.idvehiculo=params['id'];
      this.historialservice.consultaHistorialVehiculo(this.idvehiculo).subscribe(res=>{
        this.historial=res.historial;
        if(!this.historial){
          console.log(res.mensaje);
        }else{
          this.cargando=false;
        }
      },error=>{
          this.errormensaje=<any>error;
          console.log("Error en la consultaHistorialVehiculo: "+this.errormensaje);
      });
    });
  }

}
