import { Component, Input, HostBinding } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'product-image',
  template:`
  
    <img class="product-image"[src]="product.imageURL">
  
  `
  /*templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']*/
})
export class ProductImageComponent {

  @Input() product!:Product;
  @HostBinding('attr.class') cssclass="ui small image";

  

}
