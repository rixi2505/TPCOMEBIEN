import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './component/receta/receta.component';
import { CreateEditComponent } from './component/receta/create-edit/create-edit.component';
import { LoginPageComponent } from './component/prelogin/login-page/login-page.component';
import { MainPageComponent } from './component/receta/main-page/main-page.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PreloginComponent } from './component/prelogin/prelogin.component';

const routes: Routes = [
  {
    path: 'prelogin', component: PreloginComponent, children: [
     {
       path: 'login', component: LoginPageComponent
     },

    ]
   },

  {
    path: 'landing', component: MainPageComponent
  },
  {
    path: 'inicio', component: InicioComponent
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
