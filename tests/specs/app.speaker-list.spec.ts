import {
  clearIndexedDB,
  pause,
  restartApp,
  url,
  getUrl,
  IonicPage
} from '../helpers';

import SpeakerList from '../pageobjects/speaker-list.page';

describe('Speaker List', () => {
  beforeEach(async () => {
    await restartApp('/app/tabs/speakers');
    await clearIndexedDB('_ionicstorage');
    await url('/app/tabs/speakers');
    await pause(500);
  });
  //Prueba 1
  it('Debería estar en app/tabs/speakers/', async () => {
    await expect((await getUrl()).pathname).toBe('/app/tabs/speakers');
  });

  //Prueba 2
  it('Debería estar seleccionado Speakers', async () => {
    const myInput = await $('ion-item')
    const attr = await myInput.getAttribute('routerLinkActive')
    //await expect(myInput).toHaveAttribute('contentId', 'main-content')
    await expect(attr).toBe('selected');
  })

  //Prueba 3
  it('Deberia tener titulo Speakers', async () => {
    const title = await SpeakerList.speakersTitle;
    await expect(await title.getText()).toBe('Speakers');
  });

  //Prueba 4
  it('Deberian ser 13', async () => {
    const speakers = await SpeakerList.speakers;
    expect(speakers.length).toBe(13);
  });

  //Prueba 5
  it('Deberia ir a Donald Duck', async () => {
    const name = await $('h2*=Donald Duck');
    name.scrollIntoView();
    await pause(1500);
    name.click({ button: 0, x: 0, y: 0 })
    await pause(1500);
    await expect((await getUrl()).pathname).toBe('/app/tabs/speakers/speaker-details/3');

  })

  //Prueba 6
  it('Deberia estar en session 15', async () => {
    const elemento = await $('h3*=Package')
    elemento.scrollIntoView()
    elemento.click({ button: 0, x: 0, y: 0 })
    await pause(1500);
    await expect((await getUrl()).pathname).toBe('/app/tabs/speakers/session/15');
  })

  //Prueba 7
  it('Deberia scrollear al fondo y al inicio de la pagina', async () => {
    const last = await $('h2*=Ted')
    last.scrollIntoView();
    await pause(2000)
    const first = await $('h2*=Burt')
    first.scrollIntoView();
  })


});
