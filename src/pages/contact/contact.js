var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, ContactField, ContactName } from '@ionic-native/contacts';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(contacts, navCtrl, navParams) {
        this.contacts = contacts;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.ajouterContact = function () {
        var contact = this.contacts.create();
        contact.name = new ContactName(null, 'Ecole', 'le Petit Prince');
        contact.phoneNumbers = [new ContactField('fixe', '+33412345678')];
        contact.save().then(function () { return console.log('Contact saved!', contact); }, function (error) { return console.error('Error saving contact.', error); });
    };
    ContactPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html',
        }),
        __metadata("design:paramtypes", [Contacts, NavController, NavParams])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map