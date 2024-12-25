import { Component, OnInit } from '@angular/core';
import { MusicService, Music } from '../services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {
  musicList: Music[] = [];

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicList = this.musicService.getMusicList();
  }

  deleteMusic(id: number) {
    const confirmed = confirm('Are you sure you want to delete this music?');
    if (confirmed) {
      this.musicService.deleteMusic(id);
      this.musicList = this.musicService.getMusicList(); // Refresh the list
    }
  }
}
