import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicListComponent } from './music-list/music-list.component';
import { AddMusicComponent } from './add-music/add-music.component';
import {HttpClientModule} from "@angular/common/http";
import {EditMusicComponent} from "./edit-music/edit-music.component";
import {PhotosPage} from "./photos/photos.page";

@NgModule({
  declarations: [AppComponent, MusicListComponent, AddMusicComponent, EditMusicComponent, PhotosPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule], // Import requis pour HttpClient ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
