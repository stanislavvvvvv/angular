import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
export interface Oferta{
  ciudad: string,
  descripcion: string,
  imgUrl: string,
  nombre: string,
  salario: number,
  skills: Array<string>
}
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  ofertas: Array<Oferta> ;
  constructor(private servicio: JobsService) { }

  ngOnInit() {
    this.servicio.getJobs()
  }

}
