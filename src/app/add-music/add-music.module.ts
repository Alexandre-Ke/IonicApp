
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddMusicRoutingModule } from './add-music-routing.module';
import { AddMusicComponent } from './add-music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMusicRoutingModule
  ],
  declarations: [AddMusicComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddMusicPageModule {}
