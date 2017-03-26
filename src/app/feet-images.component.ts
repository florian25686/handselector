import { Component, Input } from '@angular/core';

import { EXISTINGIMAGES_FEET } from './images/mock-feetimages';


@Component({
  selector: 'feet-images',
  template: `
    <div id="images" *ngIf="resultsLeft == 0">
        <ul  style="list-style:none;">
      		<li *ngFor="let bild of displayImages">
      		  <img src="{{bild?.path}}" max-width="500px">
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
       Gesamtzeit: {{ timeUsed }} Sekunden<br/>
       <br/>
      <button onClick="location.reload()">Neu Starten</button>

    </div>
  `,
  inputs: ['numberSelectedImages']
})

export class FeetImagesComponent {

  Message = '';
  resultsLeft = 0;
  resultsRight = 0;
  existingImages = EXISTINGIMAGES_FEET;
  displayImages = [];
  numberClicked = 1;
  numberCorrectImagesLeft = 0;
  numberCorrectImagesRight = 0;
  numberImagesLeft = 0;
  numberImagesRight = 0;
  startTimeTotal = 0;
  endTimeTotal = 0;
  timeUsed = 0;
  @Input('numberSelectedImages') numberImagesToView: number;

  constructor() {
    this.existingImages.sort(function(a,b){
      return b.id - a.id;
    });
    this.displayImages.push(this.existingImages.pop());
  }
  onClickMe( side: string ) {
    if(this.numberClicked == 1) {
      this.startTimeTotal = new Date().getTime();
    }
      // Still Images left to show ?
      if(this.existingImages.length >= 1 && this.numberClicked < this.numberImagesToView) {

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

        this.endTimeTotal = new Date().getTime();

        var timeDiff = this.endTimeTotal - this.startTimeTotal ;
        this.timeUsed = timeDiff  / 1000;
        var qouteCorrectClickedRight = (this.numberCorrectImagesRight / this.numberImagesRight)*100;
        var quoteCorrectClickedLeft =  (this.numberCorrectImagesLeft / this.numberImagesLeft)*100;

        this.resultsLeft = Math.round(quoteCorrectClickedLeft);
        this.resultsRight = Math.round(qouteCorrectClickedRight);

        this.displayImages.pop();
      }
  }

}
