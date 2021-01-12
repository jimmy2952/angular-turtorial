import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public name:string;
  public code:string;
  public price:number;
  public previousPrice:number;

  constructor() {
    this.name = ""
    this.code = ""
    this.price = 0
    this.previousPrice = 0
  }

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'Test Stock Company';
    this.price = 85;
    this.previousPrice = 80;
  }

}
