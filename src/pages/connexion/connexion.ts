import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SlidePage } from '../slide/slide';

import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
 
/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {
  resultats: any;
  connexion: {login: string, password: string, rememberMe: boolean}
  = {login: '', password: '', rememberMe: false};

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage) {
    this.storage.get('rememberMe').then((valeur) => {
      this.connexion.rememberMe=valeur;
      if(this.connexion.rememberMe == true){
      this.storage.get('login').then((valeur) => {
        this.connexion.login = valeur;
      });
      this.storage.get('password').then((valeur) => {
        this.connexion.password = valeur;
      });
    }
    });
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }
 
  connexionOK() {
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login=' + this.connexion.login + '&mdp=' + this.connexion.password)
      .map(res => res.json())
      .subscribe(data => {
        this.resultats = data;
        if(this.resultats.resultat=='OK')
        {
          this.storage.set('login', this.connexion.login);
          this.storage.set('password', this.connexion.password);
          this.storage.set('rememberMe', this.connexion.rememberMe);
          this.navCtrl.setRoot(SlidePage);
        }
        else
        {
          let alert = this.alertCtrl.create({
            title: 'Echec de connexion',
            subTitle: 'Mauvais login ou password',
            buttons: ['Fermer']
          });
          alert.present();
        }
    });
  }

}
