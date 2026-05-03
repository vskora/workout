import { Component, inject } from '@angular/core';
import { ProgramsStore } from '../programs-store/programs-store';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProgramCreateDialog } from '../program-create-dialog/program-create-dialog';
import { MatDialog } from '@angular/material/dialog';
import { Navigate } from "../navigate/navigate";
import { Confirm } from '../confirm/confirm';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-programs',
  imports: [
    MatIconModule, MatButtonModule,
    Navigate, Confirm, MatListModule
],
  templateUrl: './programs.html',
  styleUrl: './programs.scss',
})
export class Programs {

  readonly #programsStore = inject(ProgramsStore);
  readonly #dialog = inject(MatDialog);

  programs = this.#programsStore.programs;

  create() {
    const dialogRef = this.#dialog.open(ProgramCreateDialog);

    dialogRef.afterClosed().subscribe(res => {
      if (!res)
        return;
      
      this.#programsStore.create(res);
    });
  }

  delete(id: string) {
    this.#programsStore.delete(id);
  }
}
