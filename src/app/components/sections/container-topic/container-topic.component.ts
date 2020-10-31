import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-topic',
  templateUrl: './container-topic.component.html',
  styleUrls: ['./container-topic.component.scss']
})
export class ContainerTopicComponent implements OnInit {


  @Input() title = 'No Title';
  @Input() desc = 'No Description';

  constructor() { }

  ngOnInit(): void {
  }

}
