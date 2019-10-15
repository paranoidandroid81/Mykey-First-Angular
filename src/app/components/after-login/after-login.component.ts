import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService, SpotifyPlayerResp, Artist } from 'src/app/spotify.service';
import { BehaviorSubject } from 'rxjs';
import { RespService } from 'src/app/resp.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {
  private token: string;
  resp: SpotifyPlayerResp;
  observableResp: BehaviorSubject<SpotifyPlayerResp>;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService,
              private respService: RespService) {
    this.observableResp = new BehaviorSubject<SpotifyPlayerResp>(this.resp);
   }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) =>
    this.token = this.parseAccessToken(fragment));
  }

  spotifyGetCurr() {
    this.spotify.getCurrPlaying(this.token).subscribe(
      data => {this.resp = this.mapToRespObject(data.body);
               console.log(this.resp);
               this.respChange(); }
    );
  }

  respChange() {
    this.respService.sendResp(this.resp);
  }

  parseAccessToken(token: string) {
    return token.split('&')[0].split('=')[1];
  }

  mapToRespObject(resp: any) {
    const transform: SpotifyPlayerResp = {
      progress_ms: resp.progress_ms,
      item: {
        duration_ms: resp.item.duration_ms,
        name: resp.item.name,
        artists: resp.item.artists.map((x: any) =>
          this.mapToArtistObject(x))
      }
    };
    return transform;
  }

  mapToArtistObject(curr: any) {
    const transform: Artist = {
      name: curr.name
    };
    return transform;
  }

}
