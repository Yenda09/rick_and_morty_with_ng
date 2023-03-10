import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { IndividualItemComponent } from './pages/individual-item/individual-item.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/1',
    pathMatch: 'full'
  },{
    path: 'home/:page',
    component: HomeComponent
  },{
    path: 'episodes/:page',
    component: EpisodesComponent
  },{
    path: 'locations/:page',
    component: LocationsComponent
  },{
    path: 'item/:section/:id',
    component: IndividualItemComponent
  },{
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
