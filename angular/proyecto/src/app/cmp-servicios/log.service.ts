import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  mostrar(msg: string): void {
    console.log('mira q mensajito: ' + msg);
  }
}
