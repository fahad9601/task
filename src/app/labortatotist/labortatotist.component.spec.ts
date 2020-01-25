import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabortatotistComponent } from './labortatotist.component';

describe('LabortatotistComponent', () => {
  let component: LabortatotistComponent;
  let fixture: ComponentFixture<LabortatotistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabortatotistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabortatotistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
