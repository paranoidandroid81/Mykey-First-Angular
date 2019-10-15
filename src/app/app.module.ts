import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MykeyComponent } from './components/mykey/mykey.component';
import { SpotifyService } from './spotify.service';
import { HeaderComponent } from './components/header/header.component';
import { MainAreaComponent } from './components/main-area/main-area.component';
import { AfterLoginComponent } from './components/after-login/after-login.component';
import { CurrPlayingComponent } from './components/curr-playing/curr-playing.component';
import { RespService } from './resp.service';

@NgModule({
  declarations: [
    AppComponent,
    MykeyComponent,
    HeaderComponent,
    MainAreaComponent,
    AfterLoginComponent,
    CurrPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SpotifyService, RespService],
  bootstrap: [AppComponent]
})
export class AppModule { }
