import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  description:string = "This is Error page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
