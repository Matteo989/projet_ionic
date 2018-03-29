import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

	constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
	    this.storage.set('intro-done', true);
	}

	dismiss() {
	  	this.navCtrl.setRoot(HomePage);
	}

}
