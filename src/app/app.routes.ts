import { Routes } from '@angular/router';
import { LayoutMain } from './common/layout/components/layout-main/layout-main';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'login',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login/login').then(m => m.Login)
    },
    {
        path: '',
        component: LayoutMain,
        children: [
            { path: '', component: Dashboard }]
    },
    { path: '**', redirectTo: '' }
];
