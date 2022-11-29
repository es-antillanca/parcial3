import { IonicMenu, Ionic$, IonicItem } from '../helpers';
import Page from './page';

class SpeakerList extends Page {

  get speakersTitle() {
    return Ionic$.$('ion-title');
  }

  get speakers() {
    return Ionic$.$$('ion-col');
  }

  get ionicLabel() {
    return Ionic$.$('h3');
  }

  get item() {
    return Ionic$.$('ion-item')
  }

  get menu() {
    return new IonicMenu();
  }

  async openMenu() {
    return this.menu.open();
  }


}

export default new SpeakerList();
