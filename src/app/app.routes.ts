import { RouterModule, Routes } from '@angular/router';
import {VehiculoComponent} from './components/vehiculo/vehiculo.component';
import {HistorialComponent} from './components/vehiculo/historial.component';
const APP_ROUTES: Routes = [
{ path: 'vehiculo/historial', component: HistorialComponent },
  { path: 'vehiculo/detalle/:id', component: VehiculoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'vehiculo/historial' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
