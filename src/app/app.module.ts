import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastShowComponent } from './podcast-show/podcast-show.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    PodcastComponent,
    PodcastShowComponent,
    EpisodeDetailComponent,
    DashboardComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
