import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss'],
})
export class AddMusicComponent {
  music = { title: '', artist: '' };
  searchResults: any[] = [];
  audioPlayer: HTMLAudioElement | null = null;

  constructor(private musicService: MusicService, private navCtrl: NavController) {}

  // Méthode pour rechercher de la musique sur Spotify
  searchMusic() {
    const query = `${this.music.title} ${this.music.artist}`;
    if (!query.trim()) {
      alert('Please enter a title and/or artist to search.');
      return;
    }

    this.musicService.searchMusicOnSpotify(query).subscribe(
      (response) => {
        console.log('Spotify API response:', response); // Log de la réponse brute
        if (response.tracks && response.tracks.items) {
          this.searchResults = response.tracks.items.map((item: any) => ({
            name: item.name,
            artists: item.artists.map((artist: any) => artist.name).join(', '),
            preview_url: item.preview_url,
          }));
        } else {
          this.searchResults = [];
          alert('No results found.');
        }
      },
      (error) => {
        console.error('An error occurred while fetching data from Spotify API:', error);
        alert('An error occurred while fetching data from Spotify.');
      }
    );
  }

  addMusicFromResult(result: any) {
    const newMusic = this.musicService.addMusic({
      title: result.name,
      artist: result.artists,
      url: result.preview_url,
    });

    alert(`Music "${newMusic.title}" by "${newMusic.artist}" added to the list!`);

    // Navigation vers la page music-list avec NavController
    this.navCtrl.navigateForward('/music-list');
  }

  // Méthode pour jouer la musique
  playMusic(url: string) {
    if (!url) {
      alert('No preview available for this track.');
      return;
    }

    // Arrêter toute lecture précédente
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
    }

    // Initialiser un nouvel objet Audio
    this.audioPlayer = new Audio(url);

    // Jouer la musique et gérer les erreurs éventuelles
    this.audioPlayer.play().catch((error) => {
      console.error('Error playing audio:', error);
      alert('Unable to play audio. Please check the URL or try again.');
    });
  }

  // Méthode pour arrêter la musique
  stopMusic() {
    if (this.audioPlayer) {
      this.audioPlayer.pause(); // Mettre en pause
      this.audioPlayer.currentTime = 0; // Réinitialiser le temps de lecture
      this.audioPlayer = null; // Réinitialiser le lecteur audio
    }
  }

}
