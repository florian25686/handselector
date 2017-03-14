import { Component, Input } from '@angular/core';

import { EXISTINGIMAGES } from './images/mock-handimages';


@Component({
  selector: 'click-me',
  template: `
    <div id="images" *ngIf="resultsLeft == 0">
        <ul  style="list-style:none;">
      		<li *ngFor="let bild of displayImages">
      		  <img src="{{bild?.path}}" max-width="300px" max-height="500">
      		</li>
      	</ul>
        <button (click)="onClickMe('left')" style="margin-left:45px;">Links</button>
        <button (click)="onClickMe('right')">Rechts</button>
        <input #box
			(keyup.a)="onClickMe('left'); box.value = null"
			(keyup.d)="onClickMe('right'); box.value = null"
			value="Tastatureingabe">

      <br/>
		    Das Feld "Tastatureingabe" anklicken um mittels Tasten zu Arbeiten. A = links, D = rechts<br/>
    </div>
    <div id="result" *ngIf="resultsLeft != 0">
      <h2>Ergebnis</h2>
       Links: {{ resultsLeft }} % richtig.<br/>
       Rechts: {{ resultsRight }} % richtig.<br/>
      <button onClick="location.reload()">Neu Starten</button>
    </div>
  `
})

export class ClickMeComponent {

  Message = '';
  resultsLeft = 0;
  resultsRight = 0;
  existingImages = EXISTINGIMAGES;
  displayImages = [];
  numberClicked = 0;
  numberImagesToView = 24;
  numberCorrectImagesLeft = 0;
  numberCorrectImagesRight = 0;
  numberImagesLeft = 0;
  numberImagesRight = 0;

  constructor() {
    this.displayImages.push(this.existingImages.pop());
  }
  onClickMe( side: string ) {
      // Still Images left to show ?
      if(this.existingImages.length >= 1 && this.numberClicked <= this.numberImagesToView) {

        if( this.displayImages[0].side == 'left' ) {
          this.numberImagesLeft += 1;
          if( this.displayImages[0].side == side ) {
            this.numberCorrectImagesLeft += 1;
          }
        }

        if( this.displayImages[0].side == 'right' ) {
          this.numberImagesRight += 1;
          if( this.displayImages[0].side == side ) {
            this.numberCorrectImagesRight += 1;
          }
        }

        this.numberClicked += 1;
        this.displayImages.pop();
        this.displayImages.push(this.existingImages.pop());
      } else {

        var qouteCorrectClickedRight = (this.numberCorrectImagesRight / this.numberImagesRight)*100;
        var quoteCorrectClickedLeft =  (this.numberCorrectImagesLeft / this.numberImagesLeft)*100;

        this.resultsLeft = Math.round(quoteCorrectClickedLeft);
        this.resultsRight = Math.round(qouteCorrectClickedRight);

        this.displayImages.pop();
      }
  }

}
