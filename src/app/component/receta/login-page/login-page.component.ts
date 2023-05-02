import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from 'src/app/service/receta.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor(
    private recetaService: RecetaService,
    private router: Router){
 }
 ngOnInit(): void {
 }

}
