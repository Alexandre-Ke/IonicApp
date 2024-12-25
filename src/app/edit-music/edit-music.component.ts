import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService, Music } from '../services/music.service';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.scss'],
})
export class EditMusicComponent implements OnInit {
  musicId: number | null = null;
  updatedMusic: Music = { id: 0, title: '', artist: '', url: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    // Récupérez l'ID depuis l'URL
    this.musicId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.musicId) {
      const music = this.musicService.getMusicList().find((m) => m.id === this.musicId);
      if (music) {
        this.updatedMusic = { ...music };
      } else {
        alert('Music not found');
        this.router.navigate(['/music-list']);
      }
    }
  }

  saveChanges() {
    if (this.musicId) {
      this.musicService.updateMusic(this.musicId, {
        title: this.updatedMusic.title,
        artist: this.updatedMusic.artist,
        url: this.updatedMusic.url,
      });
      alert('Music updated successfully!');
      this.router.navigate(['/music-list']);
    }
  }
}
