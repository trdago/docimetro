import { Component  } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser  } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{

 	constructor( 
 		public platform : Platform, 
 		public navCtrl: NavController,
 		public inAppBrowser: InAppBrowser
 		) 
 	{
 		this.openUrl();
  	}


	openUrl(){
		this.platform.ready().then(() => {
  			const br = this.inAppBrowser.create('http://sis.seguridadradiologica.cl', '_self', 'fullscreen=yes');
			br.show();

		});
		
	}

}