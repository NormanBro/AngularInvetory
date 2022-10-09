import { Component,
  HostBinding, 
  Input
} from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  constructor() { }

  @Input() product!:Product;
  @HostBinding('attr.class') cssClass='item';
}
