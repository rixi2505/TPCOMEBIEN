import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetaComponent } from './component/receta/receta.component';
import { RecetaListarComponent } from './component/receta/receta-listar/receta-listar.component';
import { CreateEditComponent } from './component/receta/create-edit/create-edit.component';
import { MainPageComponent } from './component/receta/main-page/main-page.component';
import { LoginPageComponent } from './component/prelogin/login-page/login-page.component';
import { HttpClientModule} from '@angular/common/http';//add mano
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { HeaderComponent } from './component/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { InicioComponent } from './component/inicio/inicio.component';
import { PreloginComponent } from './component/prelogin/prelogin.component';
import { Card1Component } from './component/inicio/card1/card1.component';
import { Card2Component } from './component/inicio/card2/card2.component';
import { Card3Component } from './component/inicio/card3/card3.component';
import { DialogoComponent } from './component/receta/receta-listar/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    RecetaListarComponent,
    CreateEditComponent,
    MainPageComponent,
    LoginPageComponent,
    InicioComponent,
    PreloginComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    DialogoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
