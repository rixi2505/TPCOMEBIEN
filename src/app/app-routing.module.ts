import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './component/receta/receta.component';
import { CreateEditComponent } from './component/receta/create-edit/create-edit.component';
import { MainPageComponent } from './component/receta/main-page/main-page.component';
import { LoginPageComponent } from './component/receta/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent

  },

  {
    path: 'prueba', redirectTo: 'receta'
  },
  {
   path: 'receta', component: RecetaComponent, children: [
    {
      path: 'nuevo', component: CreateEditComponent
    },
    {
      path:'edicion/:id', component: CreateEditComponent
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
