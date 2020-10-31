import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  description:string = "This is Contact page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
