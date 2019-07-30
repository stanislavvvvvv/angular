export class Meme {
  constructor(
    public id: number = 0,
    public color: string =  '#FFFFFF',
    public textoArriba: string = '',
    public textoAbajo: string = '',
    public imagenUrl: string = '',
    public isFav: boolean = false
    ) {
  }
}
