import { Component, Input } from '@angular/core';

import { EXISTINGIMAGES } from './images/mock-handimages';


@Component({
  selector: 'click-me',
  template: `
    <div id="images">
        <ul  style="list-style:none;">
      		<li *ngFor="let bild of displayImages">
      		  <img src="{{bild?.path}}">
      		</li>
      	</ul>
        <button (click)="onClickMe('links')" style="margin-left:45px;">Links</button>
        <button (click)="onClickMe('rechts')">Rechts</button>
        <input #box
			(keyup.a)="onClickMe('links'); box.value = null"
			(keyup.d)="onClickMe('rechts'); box.value = null"
			value="Tastatureingabe"
			>
      </div>
      <br/>
      <div id="hinweis">
		    Das Feld "Tastatureingabe" anklicken um mittels Tasten zu Arbeiten. A = links, D = rechts<br/>
        Anzahl ende der Zahlen{{ numberleft }}
      </div>
  `
})

export class ClickMeComponent {

  clickMessage = '';

  numberleft = 0;

  existingImages = EXISTINGIMAGES;
  displayImages = this.existingImages;

  onClickMe( side: string ) {
    if(side) {
      this.clickMessage  = 'You clicked '+side;
      if(this.displayImages) {

        if(this.displayImages.length >= 1) {
           this.displayImages.pop();
        }
        var lengthArray = this.existingImages.length;

        var x = this.numberleft;
        /* var x = Math.floor((Math.random() * lengthArray) + 1);
        if(x >= lengthArray) {
          var x = lengthArray-1;
        }
        */

        this.displayImages.push(this.existingImages[x]);
        this.existingImages.splice(1, 1);
        this.numberleft = this.existingImages.length;
        // this.displayImages.shift(this.existingImages[0]);
      }
    }
  }
}

export class HandImagesComponent{}
