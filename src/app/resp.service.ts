import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { SpotifyPlayerResp } from './spotify.service';

@Injectable()
export class RespService {
  private respSubject = new BehaviorSubject<SpotifyPlayerResp>(null);

  sendResp(resp: SpotifyPlayerResp) {
    this.respSubject.next(resp);
  }

  getMessage(): Observable<SpotifyPlayerResp> {
    return this.respSubject.asObservable();
  }
}
