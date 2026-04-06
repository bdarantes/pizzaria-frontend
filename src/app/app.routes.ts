import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeCliente } from './pages/home-cliente/home-cliente';
import { PainelAdmin } from './pages/painel-admin/painel-admin';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: Login },
    { path: 'cliente', component: HomeCliente },
    { path: 'admin', component: PainelAdmin }
];
