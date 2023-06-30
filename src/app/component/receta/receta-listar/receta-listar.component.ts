import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Receta } from 'src/app/model/recetas';
import { MatDialog } from '@angular/material/dialog';
import { RecetaService } from 'src/app/service/receta.service';
import { DialogoComponent } from './dialogo/dialogo.component';


@Component({
  selector: 'app-receta-listar',
  templateUrl: './receta-listar.component.html',
  styleUrls: ['./receta-listar.component.css']
})
export class RecetaListarComponent implements OnInit{
  lista: Receta[] = [];
  displayedColumns = ['id','nombre','descripcion','valoracion','calorias','link', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<Receta>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(private recetaService: RecetaService,
     private router: Router, private dialog:MatDialog){
  }
  ngOnInit(): void {
    this.recetaService.list().subscribe(data => {
      this.dataSource.data = data;
   });

    this.recetaService.getLista().subscribe(data => {

       this.dataSource.data = data;

    });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  openDialog(id: string){
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result => {
       if(result){
          this.delete(id);
       }else{
         console.log("FALSE");
       }
    });
 }

  delete(id:string){
    this.recetaService.delete(id).subscribe(() =>{
    this.recetaService.list().subscribe(data => {
      this.recetaService.setList(data);
    })
  });
  }
  buscar(name: string){
    this.recetaService.listName(name).subscribe(data => {
         this.recetaService.setList(data);
     });
   }
   listar(){
    this.recetaService.list().subscribe(data => {
        this.recetaService.setList(data);
    });
  }
}
