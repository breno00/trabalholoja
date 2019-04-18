import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioService } from './usuario/usuario.service';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Usuario',
      url: '/list',
      icon: 'contacts'
    },
    {
      title: 'Produtos',
      url: '/listProdutos',
      icon: 'basket'
    }
  ];

  private usuario: Usuario;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private usuarioService: UsuarioService
  ) {
    this.initializeApp();
    this.usuario = this.usuarioService.validar();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.usuario = this.usuarioService.logout();
  }
}
