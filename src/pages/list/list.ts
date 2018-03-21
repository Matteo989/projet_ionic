import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  articles : any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=classe1&mdp=mdp1')
     .map(res => res.json())
     .subscribe(data => {
    this.articles = data.articles;
    });
     console.log(this.articles);

  }

  Initialisation() {
    this.items = this.articles;
  }

  Input(event){
    this.Initialisation();

    let val = event.target.value;
/*
    if(val && val.trim() != '') {
      this.items= this.items.filter((items) => {
        return (items.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }*/
  }

  doRefresh(refresher) {
      console.log('Begin async operation', refresher);

      setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
      }, 2000);
    }

}
