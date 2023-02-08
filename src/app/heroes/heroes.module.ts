import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [ //Que cosas contiene este modulo (componentes)
    HeroeComponent,
    ListadoComponent
    ],
    exports: [ //Que cosas quiero hacer publicas
    ListadoComponent
    ],
    imports: [  //Modulos
    CommonModule
    ]
    
})
export class HeroesModule {}