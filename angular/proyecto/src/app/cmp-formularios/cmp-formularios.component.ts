import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   username: new FormControl('stanislav', [Validators.required,this.esUnStark]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(5)])
    // });
    this.form = this.formBuilder.group({
      username: this.formBuilder.control('stanislav',[Validators.required,this.esUnStark]),
      password: this.formBuilder.control('',[Validators.required,Validators.minLength(6)])
    })
  }
  login() {
    console.log(this.form);
  }
  esUnStark(control: FormControl) {
    const nombresValidos = ['robb', 'arya', 'rickon', 'sansa', 'bran'];
    if (nombresValidos.includes(control.value.toLowerCase())){
      return null;
    }
    return {
      esUnStark:false
    }
  }
}
