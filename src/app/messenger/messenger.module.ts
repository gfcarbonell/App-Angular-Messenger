import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerRoutingModule } from './messenger-routing.module';

import { MessengerComponent } from './messenger.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    MessengerComponent,
    ConversationComponent,    
    ProfileComponent 
  ],
  imports: [
    CommonModule, 
    MessengerRoutingModule
  ]
})

export class MessengerModule { }
