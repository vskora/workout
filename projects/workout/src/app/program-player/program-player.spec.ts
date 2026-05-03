import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramPlayer } from './program-player';

describe('ProgramPlayer', () => {
  let component: ProgramPlayer;
  let fixture: ComponentFixture<ProgramPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramPlayer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
