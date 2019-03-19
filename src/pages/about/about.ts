import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { UsuarioDTO } from '../../models/usuario.dto';
import { StorageService } from '../../services/storage.service';
import { UsuarioService } from '../../services/domain/usuario.service';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  usuario: UsuarioDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email) {
      this.usuarioService.findByEmail(localUser.email)
        .subscribe(response => {
          this.usuario = response;
        },
        error => {
          if(error.status == 403) {
            this.navCtrl.setRoot('LoginPage');
          }
        })
    } else {
      this.navCtrl.setRoot('LoginPage');
    }
  }

}
