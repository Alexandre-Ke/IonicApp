import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, Observable, of, switchMap, tap, throwError} from 'rxjs';

export interface Music {
  id: number;
  title: string;
  artist: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private clientId = '0a9d014a21934118a06981b585c68180'; // Remplacez par votre Client ID Spotify
  private clientSecret = 'b49b91e7797c4912a907f8fd21c9b859'; // Remplacez par votre Client Secret Spotify
  private accessToken: string | null = null;
  private tokenEndpoint = 'https://accounts.spotify.com/api/token';
  private baseUrl = 'https://api.spotify.com/v1';

  private musicList: Music[] = []; // Liste locale des musiques ajoutées
  private currentId = 1; // ID auto-incrément pour les nouvelles musiques

  constructor(private http: HttpClient) {}

  // Ajouter une musique
  addMusic(music: { title: string; artist: string; url: string }): Music {
    const newMusic: Music = {
      id: this.currentId++,
      ...music,
    };
    this.musicList.push(newMusic);
    return newMusic;
  }

  // Récupérer la liste des musiques
  getMusicList(): Music[] {
    return this.musicList;
  }

  // Supprimer une musique
  deleteMusic(id: number): boolean {
    const musicIndex = this.musicList.findIndex((music) => music.id === id);
    if (musicIndex === -1) {
      console.error(`Music with ID ${id} not found.`);
      return false;
    }
    this.musicList.splice(musicIndex, 1);
    return true;
  }

  // Mettre à jour une musique
  updateMusic(id: number, updatedMusic: Partial<Music>): Music | undefined {
    const index = this.musicList.findIndex((music) => music.id === id);
    if (index === -1) {
      console.error(`Music with ID ${id} not found.`);
      return undefined;
    }
    this.musicList[index] = { ...this.musicList[index], ...updatedMusic };
    return this.musicList[index];
  }

  // Récupérer un nouveau token Spotify
  private fetchAccessToken(): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`), // Encodage en Base64
    });

    const body = 'grant_type=client_credentials';

    return this.http.post<any>(this.tokenEndpoint, body, { headers }).pipe(
      tap((response) => {
        console.log('Fetched new access token:', response.access_token);
        this.accessToken = response.access_token;
      }),
      map((response) => response.access_token),
      catchError((error) => {
        console.error('Error fetching access token:', error);
        return throwError(() => new Error('Failed to fetch access token.'));
      })
    );
  }

  // Vérifie si un token est disponible ou en récupère un nouveau
  private ensureAccessToken(): Observable<string> {
    if (this.accessToken) {
      return of(this.accessToken);
    }
    return this.fetchAccessToken();
  }

  // Recherche de musique sur Spotify
  searchMusicOnSpotify(query: string): Observable<any> {
    return this.ensureAccessToken().pipe(
      switchMap((token) => {
        const url = `${this.baseUrl}/search?q=${encodeURIComponent(query)}&type=track&limit=10`;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });

        return this.http.get(url, { headers });
      }),
      tap((response) => console.log('Spotify API Response:', response)),
      catchError((error) => {
        console.error('Error fetching data from Spotify API:', error);
        return throwError(() => new Error('Failed to fetch data from Spotify API'));
      })
    );
  }
}
