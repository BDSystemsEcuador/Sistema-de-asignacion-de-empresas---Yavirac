import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopdfComponent } from './listadopdf.component';

describe('ListadopdfComponent', () => {
  let component: ListadopdfComponent;
  let fixture: ComponentFixture<ListadopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
