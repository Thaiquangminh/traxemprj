import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGetPassWordComponent } from './for-get-pass-word.component';

describe('ForGetPassWordComponent', () => {
  let component: ForGetPassWordComponent;
  let fixture: ComponentFixture<ForGetPassWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForGetPassWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForGetPassWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
