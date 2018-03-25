import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})

export class ContactPage {

  contactObject = {
    displayName: '',
    nickName: '',
    phoneNumber: '',
    phoneType: ''
  }

	constructor(private contacts: Contacts, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
  	console.log('ionViewDidLoad ContactPage');
	}

	ajouterContact() {
		var contact = this.contacts.create();
    contact.displayName = 'Ecole le Petit Prince';
    contact.nickname = 'Ecole le Petit Prince';
     
    var field = new ContactField();
    field.type = 'mobile';
    field.value = '0412345678';
    field.pref = true;
    
    var numberSection = [];
    numberSection.push( field );
    contact.phoneNumbers = numberSection;
     
    contact.save().then((value) => {
      let alert = this.alertCtrl.create({
        title: 'Contact ajouté',
        subTitle: 'Le contact a bien été ajouté dans votre répertoire.',
        buttons: ['Fermer']
      });
      alert.present();
      this.navCtrl.pop();
    }, (error) => {
      console.log(error);
    })   
	}

}
