import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/service/receta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from 'src/app/model/recetas';
import { Usuario } from 'src/app/model/usuarios';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  usuario:Usuario  = new Usuario();
  mensaje: string = '';
  hide=true;
  user:string="";
  pass:string="";

  constructor(
    private recetaService: RecetaService,
    private router: Router,
    private route: ActivatedRoute)
    {
 }
 ngOnInit(): void {
  this.route.params.subscribe((data: Params) => {
    this.user=data['user'];
    this.pass=data['pass'];
    this.init();
 });

}
  init() {
  }

 login():void{
  console.log('a')
  this.router.navigate(['inicio'])
 }

}
