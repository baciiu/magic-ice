import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranitaComponent } from './granita.component';

describe('GranitaComponent', () => {
  let component: GranitaComponent;
  let fixture: ComponentFixture<GranitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GranitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GranitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
