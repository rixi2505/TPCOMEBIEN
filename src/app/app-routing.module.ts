import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './component/receta/receta.component';
import { CreateEditComponent } from './component/receta/create-edit/create-edit.component';

const routes: Routes = [
  {
   path: 'receta', component: RecetaComponent, children: [
    {
      path: 'nuevo', component: CreateEditComponent
    },
    {
      path:'edicion/:id', component: CreateEditComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
