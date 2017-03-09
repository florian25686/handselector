import { Component } from '@angular/core';

export class HandImage {
constructor(
        public id: number,
        public name: string,
        public side: string,
        public path: string) {}
}

@Component({
  selector: 'click-me',
  template: `
    <ul>
    		<li *ngFor="let bild of displayImages">
    		  name: {{bild.name}} <img src="{{bild.path}}">
    		</li>
    	</ul>
      <button (click)="onClickMe('links')">Links</button>
      <button (click)="onClickMe('rechts')">Rechts</button>
      {{clickMessage}}
  `
})

export class ClickMeComponent {
  clickMessage = '';

  existingImages = [
  	new HandImage(2,'Bild3', 'right', 'src/img/img2.jpg'),
  	new HandImage(3,'Bild4', 'left', '')
	];

  displayImages = [this.existingImages[0]];

  onClickMe(side: string) {
    if(side) {
      this.clickMessage  = 'You clicked '+side;
      this.displayImages.pop(this.displayImages[0]);
      this.displayImages.push(this.existingImages[1]);
    }
  }
}
