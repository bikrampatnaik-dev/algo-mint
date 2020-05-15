import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@algo-mint/algo-container';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    // component: LoginLayoutComponent,
    loadChildren: () =>
      import('@algo-mint/algo-login').then(m => m.AlgoLoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [HomeGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@algo-mint/algo-dashboard').then(m => m.AlgoDashboardModule)
      }
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
