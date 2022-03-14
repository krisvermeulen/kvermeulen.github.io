import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScanComponent} from './scan.component';
import {GeoComponent} from './geo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'geo',
    pathMatch: 'full'
  },
  {
    path: 'geo',
    component: GeoComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
