import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  description:string = "This is About Us page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
