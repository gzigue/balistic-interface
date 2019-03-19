import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConcursoService } from '../../services/domain/concurso.service';
import { ConcursoDTO } from '../../models/concurso.dto';

@IonicPage()
@Component({
  selector: 'page-concurso',
  templateUrl: 'concurso.html',
})
export class ConcursoPage {

  concurso: ConcursoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public concursoService: ConcursoService) {
  }

  ionViewDidLoad() {
    console.log('concurso.ts');
    let concurso_id = this.navParams.get('id');
    console.log('Mandando requisição com id = ' + concurso_id);
    this.concursoService.find(concurso_id)
      .subscribe(response => {
        console.log('Recebeu resposta do concurso');
        this.concurso = response;
        console.log('Aqui, ó: ' + response);
        console.log('Nome, ó: ' + response.nome);
      },
      error => {});
    console.log('Fim da requisição');
  }

}
