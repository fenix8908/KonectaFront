import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpleadoComponent } from './empleado/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';

const routes: Routes = [
  { path: '', component: ListarEmpleadoComponent },
  { path: 'nuevo', component: CrearEmpleadoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
