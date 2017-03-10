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
    <div id="images">
        <ul  style="list-style:none;">
      		<li *ngFor="let bild of displayImages">
      		  <img src="{{bild?.path}}">
      		</li>
      	</ul>
        <button (click)="onClickMe('links')" style="margin-left:45px;">Links</button>
        <button (click)="onClickMe('rechts')">Rechts</button>
      </div>
  `
})

export class ClickMeComponent {

  clickMessage = '';
  imagePath = 'src/img/';
  existingImages = [
    new HandImage(1,'Bild1', 'left',  this.imagePath+'img7.png'),
  	new HandImage(2,'Bild2', 'right', this.imagePath+'img2.png'),
  	new HandImage(3,'Bild3', 'right', this.imagePath+'img3.png'),
    new HandImage(4,'Bild4', 'left',  this.imagePath+'img8.png'),
    new HandImage(5,'Bild5', 'right', this.imagePath+'img15.png'),
    new HandImage(6,'Bild6', 'left',  this.imagePath+'img17.png'),
    new HandImage(7,'Bild7', 'right', this.imagePath+'img4.png'),
    new HandImage(8,'Bild8', 'right', this.imagePath+'img6.png'),
    new HandImage(9,'Bild9', 'right', this.imagePath+'img16.png'),
    new HandImage(10,'Bild10', 'left', this.imagePath+'img19.png'),
    new HandImage(11,'Bild11', 'left', this.imagePath+'img18.png'),
    new HandImage(12,'Bild12', 'left', this.imagePath+'img20.png'),
    new HandImage(13,'Bild13', 'left', this.imagePath+'img13.png'),
    new HandImage(14,'Bild14', 'left', this.imagePath+'img14.png'),
    new HandImage(15,'Bild15', 'right', this.imagePath+'img5.png'),
    new HandImage(16,'Bild16', 'right', this.imagePath+'img9.png'),
    new HandImage(17,'Bild17', 'right', this.imagePath+'img10.png'),
    new HandImage(18,'Bild18', 'right', this.imagePath+'img11.png'),
    new HandImage(19,'Bild19', 'right', this.imagePath+'img12.png'),
    new HandImage(20,'Bild20', 'left', this.imagePath+'img21.png'),
	];

  displayImages = [this.existingImages[0]];
  onClickMe( side: string ) {
    if(side) {
      this.clickMessage  = 'You clicked '+side;
      console.log('displayImages'+this.displayImages.length);
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

        // this.displayImages.shift(this.existingImages[0]);
      }
    }
  }
}
