
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditMusicRoutingModule } from './edit-music-routing.module';
import { EditMusicComponent } from './edit-music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMusicRoutingModule
  ],
  declarations: [EditMusicComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditMusicPageModule {}
