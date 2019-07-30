import { Directive, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMarcada]'
})
export class MarcadaDirective {
  colorInicial = 'blue';
  @Input('appMarcada') colorFondo = 'red';
  // lo q queremos modificar de la etiqueta donde esta la direvtiva: class style attr
  @HostBinding('style.backgroundColor') color;
  @HostListener('mousevover') onmouseover() {
    this.color = this.colorFondo;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.color = this.colorInicial;
  }

  // constructor() {
  //   this.color = this.colorFondo;
  //  }

}
