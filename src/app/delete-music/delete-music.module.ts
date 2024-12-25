
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DeleteMusicRoutingModule } from './delete-music-routing.module';
import { DeleteMusicComponent } from './delete-music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteMusicRoutingModule
  ],
  declarations: [DeleteMusicComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeleteMusicPageModule {}
