import { NgModule } from '@angular/core';
// Materialize
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// Routing
import { AppRoutingModule } from './app-routing.module';
import { MessengerModule } from './messenger/messenger.module';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { IndexComponent } from './index/index.component';
// Core Angular
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NotFoundPageComponent,
    IndexComponent
  ],
  imports: [
    MaterialModule, 
    BrowserModule,
    BrowserAnimationsModule, 
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireStorageModule, 
    AngularFireAuthModule, 
    
    AppRoutingModule,
    MessengerModule, 

    FlexLayoutModule, 
    FormsModule, 
    ReactiveFormsModule, 

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
