import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../slide/slide';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { ConnexionPage } from '../connexion/connexion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles: any;

	constructor(public navCtrl: NavController, private storage: Storage) {
	  	this.storage.get('login').then((valeur) => {
	        console.log('Ma variable contient ', valeur);
	    });

      this.storage.get('article1').then((valeur) => {
          console.log('Ma variable contient ', valeur);
          let keys = Object.keys(valeur);
          this.articles = keys;
          console.log(this.articles);
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
