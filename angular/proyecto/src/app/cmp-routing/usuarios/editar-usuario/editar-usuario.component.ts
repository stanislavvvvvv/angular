import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { ComponentCanDeactivate } from './editar-usuario.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponentCanDeactivate {
  datosGuardados: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  canDeactivate():boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    if(this.datosGuardados){
      return true
    }
    return confirm('QUIERES SALIR?PERDERAS LOS CAMBIOS')
  }

}
