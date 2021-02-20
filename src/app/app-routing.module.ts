import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionComponent } from './pages/region/region.component';

const routes: Routes = [
  { path: 'region', component: RegionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
