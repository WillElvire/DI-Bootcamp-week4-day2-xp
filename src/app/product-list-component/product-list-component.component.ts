import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})


export class ProductListComponentComponent {
  Products = [
    {nom:'Poire',price:100},
    {nom:'Pasteque',price:300},
    {nom:'Banane',price:4000},
  ]

  productColor(price:number){
    return price > 300 ?  'highlightDirective' :'color';
  }
}
