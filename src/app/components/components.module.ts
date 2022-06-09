import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { PanelBottomComponent } from './panel-bottom/panel-bottom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostComponent,
    HeaderComponent,
    PanelBottomComponent
  ],
  exports: [
    PostComponent,
    HeaderComponent,
    PanelBottomComponent
  ],
  imports: [
    CommonModule,
    PostComponent,
    HeaderComponent,
    PanelBottomComponent,
    FormsModule
  ]
})

export class ComponentsModule { }
