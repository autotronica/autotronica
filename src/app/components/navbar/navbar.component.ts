import { Component, OnInit } from '@angular/core';
// import {PrincipalComponent} from '../principal/principal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public ventana:boolean;
  constructor() {
    this.obtenerPrincipal(false);
  }

  ngOnInit() {
  }

  obtenerPrincipal(ventanaprincipal:boolean){
    this.ventana=ventanaprincipal;
  }

}
