import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = 'HomePage';
  tab2Root: string = 'AboutPage';
  logoutButton: string = 'LoginPage'

  constructor(
    public auth: AuthService,
    public app: MyApp) {
  }

  logout() {
    let nav = this.app.nav;
    this.auth.logout();
    nav.push('LoginPage');
  }
}
