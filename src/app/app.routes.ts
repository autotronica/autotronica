import { RouterModule, Routes } from '@angular/router';
import {VehiculoComponent} from './components/vehiculo/vehiculo.component';
import {HistorialComponent} from './components/vehiculo/historial.component';
const APP_ROUTES: Routes = [
  { path: 'vehiculo', component: VehiculoComponent },
{ path: 'vehiculo/historial/:id', component: HistorialComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vehiculo' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
