import { Routes } from '@angular/router';

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
        loadComponent: () => import('./program-player/program-player').then(c => c.ProgramPlayer)
    },
    {
        path: '',
        redirectTo: 'programs',
        pathMatch: 'full'
    }
];
