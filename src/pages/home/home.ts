import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { ConnexionPage } from '../connexion/connexion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, private storage: Storage) {
	  	this.storage.get('login').then((valeur) => {
	        console.log('Ma variable contient ', valeur);
	    });
	}

	disconnect() {
	  	this.navCtrl.setRoot(ConnexionPage);
	}

}
