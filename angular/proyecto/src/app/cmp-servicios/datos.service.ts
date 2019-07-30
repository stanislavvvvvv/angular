import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  datos: Array<string> = ['vacio'];
  datoEnviado = new EventEmitter<string>()
  constructor(private logService: LogService) { }
  getDatos(): Array<string> {
    return this.datos;
  }
  addDato(dato: string) {
    this.datos.push(dato);
    this.logService.mostrar('se ha guardado esto:'+ dato)
  }
  enviar(dato:string):void {
    this.datoEnviado.emit(dato);
  }
}
