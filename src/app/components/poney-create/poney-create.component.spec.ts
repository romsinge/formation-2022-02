import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoneyCreateComponent } from './poney-create.component';

describe('PoneyCreateComponent', () => {
  let component: PoneyCreateComponent;
  let fixture: ComponentFixture<PoneyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoneyCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoneyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
