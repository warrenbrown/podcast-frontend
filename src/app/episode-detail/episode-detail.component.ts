import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {
podcast: any;
episode: any;
episodes: any
  constructor(private podcastService: PodcastService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.podcastService.getEpisodeById(1, this.route.snapshot.params['id']).subscribe(episode => {
      console.log(episode)
      this.episode = episode;
      let podcast_id = this.episode.podcast_id

      this.podcastService.getPodcastById(podcast_id).subscribe(podcast => {
        this.podcast = podcast;
        console.log(podcast);
      })
    })
  }
}


// podcasts/{{ podcast.id }}/episode/{{ episode.id }}