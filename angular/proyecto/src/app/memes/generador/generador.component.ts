import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SevicioMemesService } from '../sevicio-memes.service';
import { Meme } from '../meme';
import { FormControl,FormGroup,Validators,FormBuilder  } from "@angular/forms";
interface MiEvento {
  prop: string,
  val: string
}
@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.css']
})
export class GeneradorComponent implements OnInit {
  form: FormGroup;
  @Input() textoArriba = '';
  @Input() textoAbajo = '';
  @Input() imagenUrl = '';
  @Input() color = '';
  @Input() isFav = '';
  id = 0;
  @Output() propCvCambiada = new EventEmitter<MiEvento>();
  constructor(private servicio: SevicioMemesService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      color: this.formBuilder.control('black',[Validators.required]),
      textoArriba: this.formBuilder.control('sample text 1',
                  [Validators.required,Validators.maxLength(25)]),
      textoAbajo: this.formBuilder.control('sample text 1',
      [Validators.required,Validators.maxLength(25)]),
      imagenUrl: this.formBuilder.control('sample.org',
      [Validators.required])
    })
  }
  enviarMeme(
     color: string,
     textoArriba: string,
     textoAbajo: string,
     imagenUrl: string,
     isFav: boolean){
    const meme = new Meme(this.id, color, textoArriba,
            textoAbajo, imagenUrl, isFav);

    this.servicio.addMeme(meme);
    this.id++;
  }
  cambiarProp(event) {
    const miEvento: MiEvento = {
      prop: event.target.name,
      val: event.target.value
    }
    this.propCvCambiada.emit(miEvento);
  }


}
