import {  Routes} from "@angular/router";
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { InfoUsuarioGuard } from './info-usuario/info-usuario.guard';
import { EditarUsuarioGuard } from './editar-usuario/editar-usuario.guard';

export const USUARIOS_ROUTES: Routes = [
  //canActivate antes de entrar a un componente
  {path: ':id/info', component: InfoUsuarioComponent, canActivate: [InfoUsuarioGuard]},
  {path: ':id/editar' , component: EditarUsuarioComponent, canDeactivate: [EditarUsuarioGuard]}
]
//  /usuarios -> muestra todos los ususarios
// /usuarios/:id/info -> muestra la info del usuario
// /usuarios/:id/editar -> muestra la edicion del usuario con ID