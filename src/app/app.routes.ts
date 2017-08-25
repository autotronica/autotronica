import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {VehiculoComponent} from './components/vehiculo/vehiculo.component';
import {HistorialComponent} from './components/vehiculo/historial.component';
import {DiagnosticoComponent} from './components/diagnostico/diagnostico.component';
const APP_ROUTES: Routes = [
{ path: 'principal', component: PrincipalComponent },
{ path: 'vehiculo', component: VehiculoComponent },
{ path: 'vehiculo/historial/:id', component: HistorialComponent },
{ path: 'diagnostico', component: DiagnosticoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
