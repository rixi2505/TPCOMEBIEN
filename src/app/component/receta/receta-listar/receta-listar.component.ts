import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Receta } from 'src/app/model/recetas';
import { RecetaService } from 'src/app/service/receta.service';

@Component({
  selector: 'app-receta-listar',
  templateUrl: './receta-listar.component.html',
  styleUrls: ['./receta-listar.component.css']
})
export class RecetaListarComponent implements OnInit{
  lista: Receta[] = [];
  displayedColumns = ['id','nombre','ingredientes','preparacion', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<Receta>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private recetaService: RecetaService,
     private router: Router){
  }
  ngOnInit(): void {
    this.recetaService.list().subscribe(data => {

      this.dataSource.data = data; // asíncrona

      });
  }


  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  delete(id:string){
    this.recetaService.delete(id).subscribe(() =>
        this.router.navigate(['recetas']).then(() => {
          window.location.reload();
        }))
  }


}
