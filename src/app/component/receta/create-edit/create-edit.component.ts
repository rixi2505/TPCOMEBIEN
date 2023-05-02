import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/model/recetas';
import * as moment from 'moment'; // add a mano
import { RecetaService } from 'src/app/service/receta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css'],
})
export class CreateEditComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  receta: Receta = new Receta();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion

  constructor(
    private recetaService: RecetaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //para obtener el routerLink de listado
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nameReceta: new FormControl('', [Validators.required]),
      emailReceta: new FormControl('', [Validators.required, Validators.email]),
      birthDateReceta: new FormControl(),
    });
  }
  init() {
    if (this.edicion) {
      this.recetaService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameReceta: new FormControl(data.nameReceta),
          emailReceta: new FormControl(data.emailReceta),
          birthDateReceta: new FormControl(data.birthDateReceta),
        });
      });
    }
  }

  aceptar(): void {
    this.receta.id = this.form.value['id'];
    this.receta.nameReceta = this.form.value['nameReceta'];
    this.receta.emailReceta = this.form.value['emailReceta'];
    this.receta.birthDateReceta = this.form.value['birthDateReceta'];
    if (this.form.valid) {
        if (this.edicion) {
          //registrarlo en la base de  datos
          this.recetaService.update(this.receta).subscribe((data) =>
            this.router.navigate(['recetas']).then(() => {
              window.location.reload();
            })
          );
        } else {
          //registrarlo en la base de  datos
          this.recetaService.insert(this.receta).subscribe((data) =>
            this.router.navigate(['recetas']).then(() => {
              window.location.reload();
            })
          );
        }
      } else{
        this.mensaje = "Agrege campos omitidos";
      }
  }
}
