import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panelprincipal } from './panelprincipal';

describe('Panelprincipal', () => {
  let component: Panelprincipal;
  let fixture: ComponentFixture<Panelprincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panelprincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(Panelprincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
