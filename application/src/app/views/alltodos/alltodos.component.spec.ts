import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltodosComponent } from './alltodos.component';

describe('AlltodosComponent', () => {
  let component: AlltodosComponent;
  let fixture: ComponentFixture<AlltodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
