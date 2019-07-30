import { Directive , HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {
  @Input('appBlink') colorLetra;
  @HostBinding('style.color') color;
  constructor() { }

  ngOnInit() {
    if (!this.colorLetra) {this.colorLetra = 'red'}
    setInterval(() => {
      this.color = this.color === 'black' ? this.colorLetra : 'black';
    }, 300);

  }
}
