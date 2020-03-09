import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  podcastUrl = 'http://localhost:3000/podcasts/'
  constructor(private http: HttpClient) { }

  getPodcasts() {
    return this.http.get(this.podcastUrl);
  }
  newPodcast(podcast) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(podcast)
    return this.http.post(this.podcastUrl, JSON.stringify(podcast), { headers: headers});
  }
  getPodcastById(id) {
    return this.http.get(this.podcastUrl + id);
  }

  getPodcastEpisodes(podcast_id) {
    return this.http.get(this.podcastUrl + podcast_id + '/episodes');
  }


  // Episodes
  getEpisodeById(podcast_id, id) {
    return this.http.get(this.podcastUrl + podcast_id + '/episodes/' + id);
  }
}
