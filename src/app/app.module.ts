import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastShowComponent } from './podcast-show/podcast-show.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { PodcastService } from './podcast.service';
import { PodcastNewComponent } from './podcast-new/podcast-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    PodcastComponent,
    PodcastShowComponent,
    EpisodeDetailComponent,
    DashboardComponent,
    SignInComponent,
    SignupComponent,
    PodcastNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PodcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
