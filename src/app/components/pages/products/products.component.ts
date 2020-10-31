import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  description:string = "This is Products page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
