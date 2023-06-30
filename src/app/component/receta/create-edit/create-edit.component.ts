import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Receta } from 'src/app/model/recetas';

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
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl(),
      valoracion: new FormControl(),
      calorias: new FormControl(),
      link: new FormControl(),

    });
  }
  init() {
    if (this.edicion) {
      this.recetaService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          valoracion: new FormControl(data.valoracion),
          calorias: new FormControl(data.calorias),
          link: new FormControl(data.link),
        });
      });
    }
  }

  aceptar(): void {
    this.receta.id = this.form.value['id'];
    this.receta.nombre = this.form.value['nombre'];
    this.receta.descripcion=this.form.value['descripcion'];
    this.receta.valoracion=this.form.value['valoracion'];
    this.receta.calorias=this.form.value['calorias'];
    this.receta.link=this.form.value['link'];
    if (this.form.valid) {
        if (this.edicion) {
          //registrarlo en la base de  datos
          this.recetaService.update(this.receta).subscribe((data) =>{
            this.recetaService.list().subscribe(data=>{
              this.recetaService.setList(data);
            })
         });

       } else {
          //registrarlo en la base de  datos
          this.recetaService.insert(this.receta).subscribe(() =>{
            this.recetaService.list().subscribe(data=>{
              this.recetaService.setList(data);
            })
          });
        }
        this.router.navigate(['receta']);
      }else{
        this.mensaje = "Agrege campos omitidos";
    }
  }
}
