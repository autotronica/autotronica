import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HistorialComponent } from './components/vehiculo/historial.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    HistorialComponent,
    FooterComponent,
    NavbarComponent,
    DiagnosticoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
