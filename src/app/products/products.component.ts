import { Component, OnInit } from '@angular/core';
import {ProductsService, Product, productType} from '../services/products.service';
//import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  show: boolean = true;
  frase: any = {
    autor: 'Annie SV',
    mensaje: 'Be strong is the only thing that metters.'
  };
  products: Product[] = [];
  beverages: Beverage[] = [
        {
          img:"./assets/img/coffee.png",
          type: productType.c,
          active: false,
          content: {}
        },
        {
          img:"./assets/img/chocolate.png",
          type: productType.ch,
          active: false,
          content: {}
        },
        {
          img:"./assets/img/tea.png",
          type: productType.t,
          active: false,
          content: {}
        }];
  theBeverage: Beverage;

  constructor( private _productsService: ProductsService) {
    for (let i = 0; i < this.beverages.length; i++) {
        this.beverages[i].content = _productsService.getProducts(this.beverages[i].type);
    }
    this.theBeverage = this.beverages[0];
  }

  ngOnInit() {
    this.products = this._productsService.getProductos();
    //console.log(this.products);
  }

  toggle(idx) {
    for (let i = 0; i < this.beverages.length; i++) {
      console.log(idx);
      if (i!=idx) this.beverages[i].active = false;
      else {
        this.beverages[i].active = !this.beverages[i].active;
        this.theBeverage = this.beverages[i];
      }
    }
  }
}

interface Beverage {
  img: string;
  type: productType;
  active: boolean;
  content: any;
};
