import { Component, inject } from '@angular/core';
import { ProgramStore } from '../program-store/program-store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseAddDialog } from '../exercise-add-dialog/exercise-add-dialog';
import { Exercise } from '../program.model';
import { MatListModule } from '@angular/material/list';
import { Confirm } from '../confirm/confirm';
import { Navigate } from '../navigate/navigate';

@Component({
  selector: 'app-program',
  imports: [
    MatIconModule, MatButtonModule, MatListModule,
    Confirm, Navigate
  ],
  templateUrl: './program.html',
  styleUrl: './program.scss',
  providers: [ProgramStore]
})
export class Program {

  readonly #programStore = inject(ProgramStore);
  readonly #dialog = inject(MatDialog);

  program = this.#programStore.program;

  add() {
    const dialogRef = this.#dialog.open(ExerciseAddDialog);

    dialogRef.afterClosed().subscribe((res: Exercise) => {
      if (!res)
        return;

      this.#programStore.addExercise(res);
    });
  }

  delete(id: string) {
    this.#programStore.deleteExercise(id);
  }
}
