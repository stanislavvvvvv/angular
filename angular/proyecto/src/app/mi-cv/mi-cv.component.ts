import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cv',
  templateUrl: './mi-cv.component.html',
  styleUrls: ['./mi-cv.component.css']
})
export class MiCvComponent implements OnInit {
  nombre = '';
  apellido = '';
  email = '';
  skills: Array<string> = [];
  foto = 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/e/el_origen_del_universo.jpg';
  constructor() { }

  ngOnInit() {
  }

  agregarSkill(evento) {
    if(evento.propiedad === 'skill' && evento.valor !== '') {
      this.skills.push(evento.valor);
    }
  }
  cambiarNombre(evento) {
    if(evento.propiedad === 'nombre'){
      this.nombre = evento.valor;
    }
  }
  cambiarApellido(evento) {
    if(evento.propiedad === 'apellido') {
      this.apellido = evento.valor;
    }
  }
  cambiarEmail(evento) {
    if(evento.propiedad === 'email') {
      this.email = evento.valor;
    }
  }

}
