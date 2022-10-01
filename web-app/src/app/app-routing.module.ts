import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'agency',
    loadChildren: () => import('./agency/agency.module').then(m => m.AgencyModule)
  },
  {
    path:'guide',
    loadChildren: () => import('./guide/guide.module').then(m => m.GuideModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
