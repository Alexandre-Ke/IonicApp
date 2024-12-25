
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MusicListRoutingModule } from './music-list-routing.module';
import { MusicListComponent } from './music-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicListRoutingModule
  ],
  declarations: [MusicListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MusicListPageModule {}
