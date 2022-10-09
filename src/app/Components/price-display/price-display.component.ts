import { Component, Input } from '@angular/core';


@Component({
  selector: 'price-display',
  template:`
    <div class="price-display">\${{ price }}</div>
  `
  /*templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']*/
})
export class PriceDisplayComponent {

  @Input()price!:number;
  

  

}
