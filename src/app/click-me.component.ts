import { Component, Input } from '@angular/core';

import { HandImage } from './handimages';

const IMAGEPATH = 'src/img/small/';

const EXISTINGIMAGES: HandImage[] = [
  { id: 1, name: 'Bild1', side: 'left', path: IMAGEPATH+'img7.png'},
  { id: 2, name: 'Bild2', side: 'right', path: IMAGEPATH+'img2.png'},
  { id: 3, name: 'Bild3', side: 'right', path: IMAGEPATH+'img3.png'},
  { id: 4, name: 'Bild4', side: 'left', path:  IMAGEPATH+'img8.png'},
  { id: 5, name: 'Bild5', side: 'right', path: IMAGEPATH+'img15.png'},
  { id: 6, name: 'Bild6', side: 'left', path: IMAGEPATH+'img17.png'},
  { id: 7, name: 'Bild7', side: 'right', path: IMAGEPATH+'img4.png'},
  { id: 8, name: 'Bild8', side: 'right', path: IMAGEPATH+'img6.png'},
  { id: 9, name: 'Bild9', side: 'right', path: IMAGEPATH+'img16.png'},
  { id: 10, name: 'Bild10', side: 'left', path: IMAGEPATH+'img19.png'},
  { id: 11, name: 'Bild11', side: 'left', path: IMAGEPATH+'img18.png'},
  { id: 12, name: 'Bild12', side: 'left', path: IMAGEPATH+'img20.png'},
  { id: 13, name: 'Bild13', side: 'left', path: IMAGEPATH+'img13.png'},
  { id: 14, name: 'Bild14', side: 'left', path: IMAGEPATH+'img14.png'},
  { id: 15, name: 'Bild15', side: 'right', path: IMAGEPATH+'img5.png'},
  { id: 16, name: 'Bild16', side: 'right', path: IMAGEPATH+'img9.png'},
  { id: 17, name: 'Bild17', side: 'right', path: IMAGEPATH+'img10.png'},
  { id: 18, name: 'Bild18', side: 'right', path: IMAGEPATH+'img11.png'},
  { id: 19, name: 'Bild19', side: 'right', path: IMAGEPATH+'img12.png'},
  { id: 20, name: 'Bild20', side: 'left', path: IMAGEPATH+'img21.png'}
];

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
        {{ numberleft }}
      </div>
  `
})

export class ClickMeComponent {

  clickMessage = '';

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

        var x = Math.floor((Math.random() * lengthArray) + 1);
        if(x >= lengthArray) {
          var x = lengthArray-1;
        }

        this.displayImages.push(this.existingImages[x]);
        delete this.existingImages[x];
        // this.numberleft = this.existingImages.length;
        // this.displayImages.shift(this.existingImages[0]);
      }
    }
  }
}
