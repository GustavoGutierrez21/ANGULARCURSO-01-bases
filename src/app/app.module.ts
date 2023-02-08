import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [ //Componentes
    AppComponent,
  ],
  imports: [  //Otros modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],  //Servicios especificos a un modulo
  bootstrap: [AppComponent] //Modulo principal
})
export class AppModule { }
