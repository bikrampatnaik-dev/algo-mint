import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    RouterModule.forChild([
      { path: 'dashboard', pathMatch: 'full', component: DashboardComponent }
    ])
  ],
  declarations: [DashboardComponent]
})
export class AlgoDashboardModule {}
