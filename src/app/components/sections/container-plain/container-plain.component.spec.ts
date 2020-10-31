import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPlainComponent } from './container-plain.component';

describe('ContainerPlainComponent', () => {
  let component: ContainerPlainComponent;
  let fixture: ComponentFixture<ContainerPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
