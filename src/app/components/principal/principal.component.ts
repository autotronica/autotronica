import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public ventana:boolean;
  constructor(private router:Router){
      this.ventana=true;
    }

  ngOnInit() {
  }

  ventanaVehiculo(){
    this.ventana=false;
    this.router.navigate(['vehiculo']);
  }

  ventanaDiagnostico(){
    this.ventana=false;
    this.router.navigate(['diagnostico']);
  }
}
