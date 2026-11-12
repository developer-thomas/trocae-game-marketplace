import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  {
    path: 'feed',
    loadComponent: () => import('./pages/feed/feed.page').then((m) => m.FeedPage),
    title: 'Trocaê · Feed',
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/auth/cadastro/cadastro.page').then((m) => m.CadastroPage),
    title: 'Trocaê · Criar conta',
  },
  { path: '**', redirectTo: 'feed' },
];
