import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { IndivdualCardComponent } from './components/indivdual-card/indivdual-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';

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
    IndivdualCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
