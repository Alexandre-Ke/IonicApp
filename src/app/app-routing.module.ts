import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMusicComponent } from './add-music/add-music.component';
import { MusicListComponent } from './music-list/music-list.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import {PhotosPage} from "./photos/photos.page";

const routes: Routes = [
  { path: 'add-music', component: AddMusicComponent }, // Page pour ajouter une musique
  { path: 'music-list', component: MusicListComponent }, // Page avec la liste des musiques
  { path: 'edit-music/:id', component: EditMusicComponent }, // Page pour éditer une musique
  { path: 'photos', component: PhotosPage }, // Route pour PhotosPage
  { path: '', redirectTo: 'music-list', pathMatch: 'full' }, // Redirection par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importez les routes principales
  exports: [RouterModule], // Exportez le module de routage
})
export class AppRoutingModule {}
