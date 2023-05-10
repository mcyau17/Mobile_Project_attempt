import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Browser } from '@capacitor/browser';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor() {}
  
}

async function openBrowser() {
  await Browser.open({ url: 'http://capacitorjs.com/' });
}


