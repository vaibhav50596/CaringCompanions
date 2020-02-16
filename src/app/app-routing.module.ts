import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualComponent } from './individual-component/individual-component.component';
import { FindOpportunitiesComponent } from './find-opportunities/find-opportunities.component';


const routes: Routes = [
  {
    path: 'person',
    component: IndividualComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '', component: FindOpportunitiesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
