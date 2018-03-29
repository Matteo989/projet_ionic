import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { ConnexionPage } from '../connexion/connexion';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles: any;
  items: any;
  article: {id:string} = {id: ''};
  connexion: {login: string, password: string} = {login:'', password:''};

	constructor(public navCtrl: NavController, private storage: Storage, public http: Http) {
      this.storage.get('article1').then((valeur) => {
        if (valeur != null) {
          this.article.id = valeur.id;
          this.storage.get('login').then((valeur) => {
            this.connexion.login = valeur;
            this.storage.get('password').then((valeur) => {
              this.connexion.password = valeur;
              this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=' + this.connexion.login + '&mdp=' + this.connexion.password)
              .map(res => res.json())
              .subscribe(data => {
                this.articles = data.articles;
                for (var i=0; i < this.articles.length; i++) {
                  if (this.articles[i].id == this.article.id) {
                    this.items = Array.of(this.articles[i]);
                  }
                }
              });
            });
          });
        }
      });

	}

	ionViewDidLoad() {
  		this.storage.get('login').then(done => {
    		if (!done) {
    			this.storage.set('intro-done', true);
    			this.navCtrl.setRoot(SlidePage);
    		}
  		});
	}

	disconnect() {
	  	this.navCtrl.setRoot(ConnexionPage);
	}

}
