import { CanDeactivateFn } from '@angular/router';
import { ProgramPlayer } from '../program-player/program-player';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export const programPlayerLeaveGuard: CanDeactivateFn<ProgramPlayer> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (!component.running())
    return true;

  const dialog = inject(MatDialog);
  const dialogRef = dialog.open(ConfirmDialog);
  
  return dialogRef.afterClosed();
};
