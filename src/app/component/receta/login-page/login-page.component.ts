import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/service/receta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


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
