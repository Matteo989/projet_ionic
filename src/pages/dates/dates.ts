import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dates',
  templateUrl: 'dates.html',
})

export class DatesPage {
  date: any;
  connexion: {login: string, password: string} = {login:'', password:''};
  	
  constructor(private alertCtrl: AlertController, private calendar: Calendar, public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public http: Http) {
    this.storage.get('login').then((valeur) => {
      this.connexion.login = valeur;
      this.storage.get('password').then((valeur) => {
        this.connexion.password = valeur;
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=' + this.connexion.login + '&mdp=' + this.connexion.password)
        .map(res => res.json())
        .subscribe(data => {
          this.date = data.dates;
        });
        console.log(this.date);
      });
    });
  }

	ionViewDidLoad() {
  	console.log('ionViewDidLoad DatesPage');
	}

	doRefresh(refresher) {
  	console.log('Begin async operation', refresher);

  	setTimeout(() => {
    		console.log('Async operation has ended');
    		refresher.complete();
  	}, 2000);
	}

  ajouterDate(title,notes,startDate) {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
    let alert = this.alertCtrl.create({
      title: 'Date ajoutée',
      subTitle: 'La date a bien été ajoutée dans votre calendrier.',
      buttons: ['Fermer']
    });
    alert.present();
  }

}
