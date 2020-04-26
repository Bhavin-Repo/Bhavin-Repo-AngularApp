import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponenet } from './start.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StartComponenet],
  imports: [
    CommonModule
  ],
  exports:[
    StartComponenet,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
