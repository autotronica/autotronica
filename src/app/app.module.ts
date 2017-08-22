import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HistorialComponent } from './components/vehiculo/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
