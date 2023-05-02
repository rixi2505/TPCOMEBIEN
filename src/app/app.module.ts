import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaComponent } from './component/receta/receta.component';
import { RecetaListarComponent } from './component/receta/receta-listar/receta-listar.component';
import { CreateEditComponent } from './component/receta/create-edit/create-edit.component';
import { MainPageComponent } from './component/receta/main-page/main-page.component';
import { LoginPageComponent } from './component/receta/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    RecetaListarComponent,
    CreateEditComponent,
    MainPageComponent,
    LoginPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
