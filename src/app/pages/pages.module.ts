import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {PanelBottomComponent} from './home/panel-bottom/panel-bottom.component';
import {PostComponent} from './home/post/post.component';
import {HeaderComponent} from './home/header/header.component';





@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    PostComponent,
    HeaderComponent,
    PanelBottomComponent,
    
  ],
  exports: [
    HomeComponent,
    ProfileComponent,
    PostComponent,
    HeaderComponent,
    PanelBottomComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PagesModule { }
