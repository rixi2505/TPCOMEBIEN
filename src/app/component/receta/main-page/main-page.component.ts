import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/service/receta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from 'src/app/model/recetas';
import { Usuario } from 'src/app/model/usuarios';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  ngOnInit(): void {

  }

}
