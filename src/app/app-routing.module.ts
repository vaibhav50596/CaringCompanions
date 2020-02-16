import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualComponent } from './individual-component/individual-component.component';
import { FindOpportunitiesComponent } from './find-opportunities/find-opportunities.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', 
    component: HomePageComponent,
  },
  {
    path: 'person',
    component: IndividualComponent
  },
  { path: 'findOpportunitites', 
    component: FindOpportunitiesComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
