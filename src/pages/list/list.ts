import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  	}
  	
	doRefresh(refresher) {
    	console.log('Begin async operation', refresher);

    	setTimeout(() => {
      		console.log('Async operation has ended');
      		refresher.complete();
    	}, 2000);
  	}

}