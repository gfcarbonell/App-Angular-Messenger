import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule, 
  MatSidenavModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatMenuModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatGridListModule, 
  MatListModule, 
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,     
    MatCheckboxModule, 
    MatSidenavModule,
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatGridListModule, 
    MatListModule, 
  ], 
  exports: [
    MatButtonModule,
    MatCheckboxModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatMenuModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatGridListModule, 
    MatListModule
  ]
})
export class MaterialModule { }
