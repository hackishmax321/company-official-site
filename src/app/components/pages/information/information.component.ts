import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  description:string = "This is Information page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
