import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private actionSheetController: ActionSheetController
  ) {}

  // Select action
  async selectAction() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Mi perfil',
          icon: 'accessibility-outline',
          handler: () => {
            // Put in logic ...
          }
        },
        {
          text: 'Menu',
          icon: 'fast-food-outline',
          handler: () => {
            // Put in logic ...
          }
        },
        {
          text: 'Mi carrito',
          icon: 'cart-outline',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
    });
    await actionSheet.present();
  }
}
