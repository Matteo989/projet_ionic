import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the GaleriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galerie',
  templateUrl: 'galerie.html',
})
export class GaleriePage {
	galerie: any;
  connexion: {login: string, password: string} = {login:'', password:''};

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public http: Http) {
    this.storage.get('login').then((valeur) => {
      this.connexion.login = valeur;
      this.storage.get('password').then((valeur) => {
        this.connexion.password = valeur;
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=' + this.connexion.login + '&mdp=' + this.connexion.password)
        .map(res => res.json())
        .subscribe(data => {
          this.galerie = data.galeries;
        });
        console.log(this.galerie);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriePage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
    }, 2000);
  }

}
