import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/service/receta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Receta } from 'src/app/model/recetas';
import { Usuario } from 'src/app/model/usuarios';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  title = 'Inicio';

}
