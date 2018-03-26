import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ConnexionPage } from '../connexion/connexion';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  articles : any;
  items: any;
  connexion: {login: string, password: string} = {login:'', password:''};

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public http: Http) {
    this.storage.get('login').then((valeur) => {
      this.connexion.login = valeur;
      this.storage.get('password').then((valeur) => {
        this.connexion.password = valeur;
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=' + this.connexion.login + '&mdp=' + this.connexion.password)
        .map(res => res.json())
        .subscribe(data => {
          this.articles = data.articles;
        });
      });
    });
    this.Initialisation();
  }

  disconnect() {
     this.navCtrl.setRoot(ConnexionPage);
  }

  Initialisation() {
    this.items = this.articles;
  }

  Input(event){
    this.Initialisation();

    let val = event.target.value;

    if(val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        return (items.titre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
  }

}
