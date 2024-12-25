
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteMusicComponent } from './delete-music.component';

const routes: Routes = [
  { path: '', component: DeleteMusicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteMusicRoutingModule {}
