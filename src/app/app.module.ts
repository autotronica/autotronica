import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule,JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routes';

//servicios
import {VehiculoService} from './services/vehiculo.service';
import {HistorialService} from './services/historial.service';
//componentes
import { AppComponent } from './app.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { HistorialComponent } from './components/vehiculo/historial.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    HistorialComponent,
    FooterComponent,
    NavbarComponent,
    DiagnosticoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    VehiculoService,
    HistorialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
