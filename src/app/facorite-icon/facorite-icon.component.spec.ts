import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacoriteIcon as FacoriteIcon } from './facorite-icon.component';

describe('FacoriteIcon', () => {
  let component: FacoriteIcon;
  let fixture: ComponentFixture<FacoriteIcon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacoriteIcon ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacoriteIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
