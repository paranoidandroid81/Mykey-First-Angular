import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/spotify.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  resp: any;

  constructor(private spotifyService: SpotifyService) {}

  spotifyLogin() {
    this.spotifyService.initAuth();
  }

  ngOnInit() {
  }

}
