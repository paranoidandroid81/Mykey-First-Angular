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

@NgModule({
  declarations: [
    AppComponent,
    MykeyComponent,
    HeaderComponent,
    MainAreaComponent,
    AfterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
