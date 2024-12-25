
import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-delete-music',
  templateUrl: './delete-music.component.html',
  styleUrls: ['./delete-music.component.scss'],
})
export class DeleteMusicComponent {
  musicId = 0;

  constructor(private musicService: MusicService) {}

  deleteMusic() {
    this.musicService.deleteMusic(this.musicId);
    alert('Music deleted successfully!');
  }
}
