import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousWinnerComponent } from './previous-winner.component';

describe('PreviousWinnerComponent', () => {
  let component: PreviousWinnerComponent;
  let fixture: ComponentFixture<PreviousWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreviousWinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
