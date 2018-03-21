import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
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
  connexion = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage) {
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

  connexionOK() {
    console.log(this.connexion);
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login=' + this.connexion.login + '&mdp=' + this.connexion.password)
      .map(res => res.json())
      .subscribe(data => {
        this.resultats = data;
        console.log(this.resultats);
        if(this.resultats.resultat=='OK')
          this.navCtrl.setRoot(HomePage);
        else
          console.log('echec critique');
    });
  }

}
