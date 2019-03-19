import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcursoPage } from './concurso';

@NgModule({
    declarations: [
      ConcursoPage,
    ],
    imports: [
      IonicPageModule.forChild(ConcursoPage),
    ],
})

export class ConcursoPageModule {}
