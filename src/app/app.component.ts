import { Component,EventEmitter } from '@angular/core';
import { Product } from './models/product.models'

@Component({
  selector: 'inventario-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product!:Product[];
  
  productWasSelected(product:Product):void{
    console.log('Product Clicked: ', product);
  }

  constructor(){
    this.product=[
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.jpg",
        ["Men","Shoes","Running Shoes"],
        109.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/images/products/blue-jacket.jpg",
        ["Women","Apparel","Jackets & Vests"],
        238.99
      ),
      new Product(
        "NICEHAT",
        "A NICE BLACK HAT",
        "/assets/images/products/black-hat.jpg",
        ["Men","Accessories","Hats"],
        29.99
      )
    ];
    
  }

}
