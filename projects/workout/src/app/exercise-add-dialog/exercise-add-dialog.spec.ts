import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAddDialog } from './exercise-add-dialog';

describe('ExerciseAddDialog', () => {
  let component: ExerciseAddDialog;
  let fixture: ComponentFixture<ExerciseAddDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseAddDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseAddDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
