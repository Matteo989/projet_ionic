import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

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

  	constructor(private contacts: Contacts, public navCtrl: NavController, public navParams: NavParams) {
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad ContactPage');
  	}

  	ajouterContact() {
  		let contact: Contact = this.contacts.create();

		contact.name = new ContactName(null, 'Ecole', 'le Petit Prince');
		contact.phoneNumbers = [new ContactField('fixe', '+33412345678')];
		contact.save().then(
  			() => console.log('Contact saved!', contact),
  			(error: any) => console.error('Error saving contact.', error)
		);
  	}
}
