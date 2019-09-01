import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversationComponent } from './conversation/conversation.component';
import { ProfileComponent } from './profile/profile.component';
import { MessengerComponent } from './messenger.component';


const routes: Routes = [
  { path: '', component: MessengerComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'conversation/:id', component: ConversationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
