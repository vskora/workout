import { Directive, HostListener, inject, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Directive({
  selector: '[appConfirm]',
})
export class Confirm {

  readonly #dialog = inject(MatDialog);

  cancel = output();
  confirm = output();

  @HostListener('click')
  open() {
    const dialogRef = this.#dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe(res => res ? this.confirm.emit() : this.cancel.emit());
  }
}
