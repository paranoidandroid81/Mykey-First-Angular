import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class SpotifyService {

  // private readonly spotifyPlayerUrl = 'https://api.spotify.com/v1/me/player/currently-playing';
  private readonly spotifyPlayerUrl = '/api/getcurr';
  private readonly authUrl = 'https://accounts.spotify.com/authorize';

  private readonly clientId = 'f88bd2f6ff7c4cc3866178b276da9423';
  private readonly redirect = 'http://localhost:4200/auth_success';
  private readonly scopes = 'user-read-currently-playing';
  private state: string;

  constructor( private http: HttpClient) {}

  getCurrPlaying(token: string) {
    console.log(token);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(this.spotifyPlayerUrl, {headers, observe: 'response'});
  }

  initAuth() {
    const authParams = {
      client_id: this.clientId,
      response_type: 'token',
      redirect_uri: this.urlRemoveSlashes(this.redirect),
      scope: this.scopes
    };

    const qString = this.paramsToString(authParams);
    window.location.href = `${this.authUrl}${qString}`;
  }

  paramsToString(rawParams: object) {
    const qString = ['?'];
    for (const key of Object.keys(rawParams)) {
      qString.push(`${key}=${rawParams[key]}`);
      qString.push(`&`);
    }
    qString.pop();       // remove the last &
    return qString.join('');
  }

  urlRemoveSlashes(rawUrl: string) {
    return rawUrl.replace(/\//g, '%2F');
  }
}

export interface SpotifyPlayerResp {
  'progress_ms': number;
  'item': {
    'duration_ms': number,
    'name': string,
    'artists': Artist[]
  };
}

export interface Artist {
  'name': string;
}
