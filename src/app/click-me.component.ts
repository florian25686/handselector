import { Component, Input } from '@angular/core';

import { EXISTINGIMAGES } from './images/mock-handimages';


@Component({
  selector: 'click-me',
  template: `
    <div id="images" *ngIf="results == 0">
        <ul  style="list-style:none;">
      		<li *ngFor="let bild of displayImages">
      		  <img src="{{bild?.path}}">
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
    <div id="result" *ngIf="results != 0">
      <h2>Ergebnis</h2>
      Sie haben {{ results }} % richtig.<br/>
      <button onClick="location.reload()">Neu Starten</button>
    </div>
  `
})

export class ClickMeComponent {

  Message = '';
  results = 0;
  existingImages = EXISTINGIMAGES;
  displayImages = [];
  numberClicked = 0;
  numberImagesToView = 4;
  numberCorrectImages = 0;

  constructor() {
    this.displayImages.push(this.existingImages.pop());
  }
  onClickMe( side: string ) {
      // Still Images left to show ?
      if(this.existingImages.length >= 1 && this.numberClicked <= this.numberImagesToView) {
        if( this.displayImages[0].side == side ) {
          this.numberCorrectImages +=1;
        }
        this.numberClicked += 1;
        this.displayImages.pop();
        this.displayImages.push(this.existingImages.pop());
      } else {
        var qouteCorrectClicked = (this.numberCorrectImages/this.numberClicked)*100;

        this.results = Math.round(qouteCorrectClicked);
        this.displayImages.pop();
      }
  }

}
