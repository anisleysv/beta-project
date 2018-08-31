import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product [] = [
    {
      name:"Cuban coffee",
      type: productType.c,
      description:"Coffee strong and sweet, mixing the sugar with the coffee beans before brewing. A popular variation is with a splash of milk - cortadito.",
      rate: 5
    },
    {
      name:"Espresso",
      type: productType.c,
      description:"It is coffee brewed by forcing a small amount of nearly boiling water under pressure through finely ground coffee beans.",
      rate: 4
    },
    {
      name:"Cappuccino",
      type: productType.c,
      description:"It is is an espresso-based coffee drink that originated in Italy, and is prepared with double espresso, and steamed milk foam.",
      rate: 5
    },
    {
      name:"Americano",
      type: productType.c,
      description:"It is a style of coffee prepared by adding hot water to espresso, giving a similar strength to but different flavor from brewed coffee.",
      rate: 3
    },
    {
      name:"Green tea",
      type: productType.t,
      description:"Made from the same tea plant, it is mixed with peppermint or dried fruits. This is the most popular tea among our Asian clients.",
      rate: 3
    },
    {
      name:"Chai tea",
      type: productType.t,
      description:"It is black tea paired with warm spices and ingredients like cardamom, vanilla, and chocolate. It is popular among our Indian clients.",
      rate: 4
    },
    {
      name:"Mate tea",
      type: productType.t,
      description:"Mate tea comes from the South American yerba plant. The leaves are blanched, dried, aged, and cut into loose leaf tea. It has a bold flavor.",
      rate: 3
    },
    {
      name:"Hot chocolate",
      type: productType.ch,
      description:"Heated beverage consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk, and a sweetener. Hot chocolate is topped with whipped cream.",
      rate: 4
    },
    {
      name:"Tascalate",
      type: productType.ch,
      description:"Made from a mixture of roasted maize, chocolate, ground pine nuts, achiote, vanilla and sugar, very common among our Mexican clients (from Chiapas).",
      rate: 4
    },
    {
      name:"Mocaccino",
      type: productType.ch,
      description:"Also called caffè mocha, it is a chocolate-flavored variant of a caffè latte. It is based on espresso and hot milk but with added chocolate flavoring and sweetener.",
      rate: 4
    }];

  constructor() {
    console.log("Service ready!");
  }

  getProductos():Product[]{
    return this.products;
  }

  getProducts(type:productType):Product[]{
    let myList: Product[]=[];
    let count = 0;
    for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].type == type){
          myList[count]=this.products[i];
          count++;
        }
    }
    return myList;
  }

  getProduct(idx:number):Product{
    if(idx>=0 && idx<this.products.length)
    return this.products[idx];
    else return this.products[0];
  }

}
export interface Product {
  name: string;
  type: productType;
  description: string;
  rate: number;
}
export enum productType{
  c = "Coffee",
  t = "Tea",
  ch = "Chocolate"
}
