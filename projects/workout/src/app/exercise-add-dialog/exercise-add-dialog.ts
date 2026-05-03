import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExerciseDetailsStore } from '../exercise-details-store/exercise-details-store';
import { MatListModule } from '@angular/material/list';
import { Exercise, ExerciseDetail, ExerciseType } from '../program.model';
import { MatRadioModule } from '@angular/material/radio';
import { FieldTree, form, FormField } from "@angular/forms/signals";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exercise-add-dialog',
  imports: [
    MatDialogModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, FormsModule, MatListModule, MatRadioModule,
    FormField, MatIconModule
],
  templateUrl: './exercise-add-dialog.html',
  styleUrl: './exercise-add-dialog.scss',
})
export class ExerciseAddDialog {

  readonly #exerciseDetailsStore = inject(ExerciseDetailsStore);
  readonly #dialogRef = inject(MatDialogRef<ExerciseAddDialog>);

  exerciseDetails = this.#exerciseDetailsStore.exerciseDetails;

  search = signal('');
  filteredExerciseDetails = computed(() => {
    const exerciseDetails = this.exerciseDetails();
    const search = this.search();

    if (search === '')
      return exerciseDetails;

    return exerciseDetails.filter(exerciseDetail => exerciseDetail.name.toLowerCase().includes(search));
  });

  selectedExerciseDetail = signal<ExerciseDetail | null>(null);

  select(exerciseDetail: ExerciseDetail) {
    this.selectedExerciseDetail.set(exerciseDetail);
  }

  exerciseModel = signal<Omit<Exercise, 'details' | 'id'>>({
    type: 'reps',
    reps: 12,
    duration: 30,
    rest: 30,
    sets: 1
  });

  exerciseForm = form(this.exerciseModel);

  add(field: FieldTree<number, string>) {
    field().value.set(field().value() + 1);
  }

  remove(field: FieldTree<number, string>) {
    field().value.set(field().value() - 1);
  }

  addToProgram() {
    const exercise: Exercise = {
      ...this.exerciseModel(),
      details: this.selectedExerciseDetail()!,
      id: crypto.randomUUID()
    };

    this.#dialogRef.close(exercise);
  }
}
