import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

rootPage = 'TabsPage';
@ViewChild(Nav) nav : Nav;  // get the view child nav ( here it's the tabs nav)

  pages : PageInterface[] = [
    { Title : 'CV', pageComponent : 'TabsPage', pageName : 'CvPage', icon : 'paper', index : 0},
    { Title : 'Projects', pageComponent : 'TabsPage', pageName : 'ProjectPage', icon : 'folder', index : 1},
    { Title : 'Activities', pageComponent : 'TabsPage', pageName : 'ExtraPage', icon : 'planet', index : 2},
    { Title : 'About', pageComponent : 'AboutPage', icon : 'information-circle'},
    { Title : 'Contact', pageComponent : 'ContactPage', icon : 'contacts'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  // open the page clicked
  openPage(page : PageInterface){
    let params = {};
       if (page.index) {
         params = { tabIndex: page.index };
       }
    
       if (this.nav.getActiveChildNav() && page.index != undefined) {
         this.nav.getActiveChildNav().select(page.index);
       } else {
         // Tabs are not active, so reset the root page 
         // In this case: moving to or from SpecialPage
         this.nav.setRoot(page.pageComponent, params);
       }
  }

  // return the primary color if the page is active
  isActive(page : PageInterface){
    let childNav = this.nav.getActiveChildNav();
    
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.pageName) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageComponent) {
      return 'primary';
    }
    return;
  }

}

// interface for the pages
interface PageInterface {
  Title : string;
  pageComponent : string;
  pageName ? : string;
  icon : string;
  index ? : number;
}


//Developed by Valentin Buisson (1106329)