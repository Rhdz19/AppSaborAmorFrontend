import {  OnInit } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('modal') modal: ElementRef;
    // Variables to store the item details
    selectedItemName: string;
    selectedItemPrice: string;
  content_loaded: boolean = false;

  constructor(private modalController: ModalController) { }
  tabsMenu = 'Todo';
  ngOnInit() {

    // Fake timeout
    setTimeout(() => {
      this.content_loaded = true;
    }, 2000);
  }
  async openModal() {
    // Set the item details before opening the modal
    console.log("aaaa")
    

  }
}
