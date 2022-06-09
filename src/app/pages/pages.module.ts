import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    NotfoundComponent
  ],
  exports: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeComponent,
    ProfileComponent

  ]
})
export class PagesModule { }
