import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MykeyComponent } from './mykey.component';

describe('MykeyComponent', () => {
  let component: MykeyComponent;
  let fixture: ComponentFixture<MykeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MykeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MykeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
