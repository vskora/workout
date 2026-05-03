import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-program-create-dialog',
  imports: [
    MatDialogModule, MatFormFieldModule, MatInputModule,
    FormField, MatButtonModule
],
  templateUrl: './program-create-dialog.html',
  styleUrl: './program-create-dialog.scss',
})
export class ProgramCreateDialog {

  nameModel = signal('');
  form = form(this.nameModel);
}
