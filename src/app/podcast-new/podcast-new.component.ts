import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Podcast } from '../podcast'
import { PodcastService } from '../podcast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcast-new',
  templateUrl: './podcast-new.component.html',
  styleUrls: ['./podcast-new.component.scss']
})
export class PodcastNewComponent implements OnInit {
podcast: any;
podcastForm: FormGroup;

  constructor(private podcastService: PodcastService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.podcastForm  =  this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }
  get formControls() { return this.podcastForm.controls; }

  createPodcast() {
    console.log(this.podcastForm.value)
    this.podcastService.newPodcast(this.podcastForm.value).subscribe(podcast => {
      this.podcast = podcast
      this.router.navigateByUrl('/podcasts');
    });
  }

}
