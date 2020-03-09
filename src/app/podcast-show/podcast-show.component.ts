import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PodcastService } from '../podcast.service';
import { Podcast } from '../podcast';

@Component({
  selector: 'app-podcast-show',
  templateUrl: './podcast-show.component.html',
  styleUrls: ['./podcast-show.component.scss']
})
export class PodcastShowComponent implements OnInit {
  podcast: any;
  episodes: any;
  constructor(private route: ActivatedRoute, private router: Router, private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.podcastService.getPodcastById(this.route.snapshot.params['id']).subscribe(podcast => {
      this.podcast = podcast;
      let podcast_id = this.podcast.id


      this.podcastService.getPodcastEpisodes(podcast_id).subscribe(episodes => {
        this.episodes = episodes
        console.log(podcast_id)
        console.log(this.episodes)
        console.log("-------------------")
        console.log(episodes)
      })
    });
  }
}
