import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  			// Recuperation des informations de la galerie
  		this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=classe1&mdp=mdp1')
		 .map(res => res.json())
		 .subscribe(data => {
		this.galerie = data.galeries;
		});

     console.log(this.galerie);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriePage');
  }



}
