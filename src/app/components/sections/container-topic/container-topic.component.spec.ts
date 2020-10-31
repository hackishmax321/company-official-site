import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTopicComponent } from './container-topic.component';

describe('ContainerTopicComponent', () => {
  let component: ContainerTopicComponent;
  let fixture: ComponentFixture<ContainerTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
