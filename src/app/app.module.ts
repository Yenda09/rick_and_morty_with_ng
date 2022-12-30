import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations/locations.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { IndivdualCardComponent } from './components/indivdual-card/indivdual-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodesComponent,
    LocationsComponent,
    NotFoundComponent,
    NavbarComponent,
    HeroComponent,
    GenericCardComponent,
    IndivdualCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
