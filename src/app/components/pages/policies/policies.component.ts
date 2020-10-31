import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  description:string = "This is Lisenses and Policies page and Give good introduction";

  constructor() { }

  ngOnInit(): void {
  }

}
