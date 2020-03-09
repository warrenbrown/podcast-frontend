import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
podcasts: any;
  constructor(private podcastService: PodcastService) { }

  ngOnInit(): void {
    this.podcastService.getPodcasts().subscribe(podcasts => {
      console.log(podcasts);
      this.podcasts = podcasts
    })
  }

}
