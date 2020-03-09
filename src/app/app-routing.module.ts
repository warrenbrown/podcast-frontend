import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastShowComponent } from './podcast-show/podcast-show.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { PodcastNewComponent } from './podcast-new/podcast-new.component';


const routes: Routes = [
  { path: 'home', component: HompageComponent },
  { path: 'podcasts', component: PodcastComponent },
  { path: 'podcasts/:id', component: PodcastShowComponent },
  { path: 'podcasts/:id/episode/:id', component: EpisodeDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'podcasts/new', component: PodcastNewComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
