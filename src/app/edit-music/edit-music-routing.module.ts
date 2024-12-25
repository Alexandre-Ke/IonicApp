
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMusicComponent } from './edit-music.component';

const routes: Routes = [
  { path: '', component: EditMusicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMusicRoutingModule {}
