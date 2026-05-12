import { Routes } from '@angular/router';
import { programPlayerLeaveGuard } from './program-player-leave/program-player-leave-guard';

export const routes: Routes = [
    {
        path: 'programs',
        loadComponent: () => import('./programs/programs').then(c => c.Programs)
    },
    {
        path: 'programs/:id',
        loadComponent: () => import('./program/program').then(c => c.Program)
    },
    {
        path: 'programs/:id/player',
        canDeactivate: [programPlayerLeaveGuard],
        loadComponent: () => import('./program-player/program-player').then(c => c.ProgramPlayer)
    },
    {
        path: '',
        redirectTo: 'programs',
        pathMatch: 'full'
    }
];
