import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PodcastShowComponent } from './podcast-show/podcast-show.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home', component: HompageComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'podcast/show', component: PodcastShowComponent },
  { path: 'episode/detail', component: EpisodeDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
