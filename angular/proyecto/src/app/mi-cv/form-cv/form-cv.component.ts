import { Component, OnInit, Output, EventEmitter } from '@angular/core';
interface mapa { propiedad: string ; valor: string;}
@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  nombre = '';
  apellido = '';
  email = '';
  skill = '';
  foto = '';
  @Output() evento = new EventEmitter<mapa>();
  constructor() { }

  ngOnInit() {
  }
  anadirSkill() {
    this.evento.emit({ propiedad: 'skill', valor : this.skill});
  }
  cambiarNombre(event) {
    this.evento.emit({ propiedad: 'nombre', valor : this.nombre});
  }
  cambiarApellido(event) {
    this.evento.emit({ propiedad: 'apellido', valor : this.apellido});
  }
  cambiarEmail(event) {
    this.evento.emit({ propiedad: 'email', valor : this.email});
  }
}
