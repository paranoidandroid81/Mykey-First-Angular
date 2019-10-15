import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { RespService } from 'src/app/resp.service';
import { SpotifyPlayerResp } from 'src/app/spotify.service';

@Component({
  selector: 'app-curr-playing',
  templateUrl: './curr-playing.component.html',
  styleUrls: ['./curr-playing.component.css']
})
export class CurrPlayingComponent implements OnInit {
  private currPlaying: SpotifyPlayerResp;
  private _songObs: Observable<SpotifyPlayerResp>;
  public get songObs(): Observable<SpotifyPlayerResp> {
    return this._songObs;
  }

  constructor(private respService: RespService) {
   }

  ngOnInit() {
    this._songObs = this.respService.getMessage();
  }


}
