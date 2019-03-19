import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { ConcursoService } from '../../services/domain/concurso.service';
import { ConcursoDTO } from '../../models/concurso.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: ConcursoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public concursoService: ConcursoService) {
  }

  ionViewDidLoad(){
    console.log('home.ts - início');
    this.concursoService.findAll()
      .subscribe(response => {
        this.items = response;
      },
      error => {
        if(error.status == 403) {
          this.navCtrl.setRoot('LoginPage')
        }
      });
    console.log('home.ts - carregou concursos');
  }

  verConcurso(concurso_id: string) {
    console.log('home.ts - ver concursos: ' + concurso_id);
    this.navCtrl.push('ConcursoPage', {id: concurso_id});
  }

}
