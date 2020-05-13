import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    // component: LoginLayoutComponent,
    loadChildren: () => import('@algo-mint/algo-login').then(m => m.AlgoLoginModule)
  },
  {
    path: '',
    // component: DefaultLayoutComponent,
    // canActivate: [HomeGuard],
    children: []
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
