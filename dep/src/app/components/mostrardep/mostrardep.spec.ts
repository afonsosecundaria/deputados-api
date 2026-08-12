import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mostrardep } from './mostrardep';

describe('Mostrardep', () => {
  let component: Mostrardep;
  let fixture: ComponentFixture<Mostrardep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mostrardep],
    }).compileComponents();

    fixture = TestBed.createComponent(Mostrardep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
