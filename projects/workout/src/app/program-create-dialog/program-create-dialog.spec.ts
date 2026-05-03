import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCreateDialog } from './program-create-dialog';

describe('ProgramCreateDialog', () => {
  let component: ProgramCreateDialog;
  let fixture: ComponentFixture<ProgramCreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramCreateDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramCreateDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
