import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) {
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
