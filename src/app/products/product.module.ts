import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StartComponenet } from '../shared/start.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space-pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProductListComponent,ProductDetailComponent
 ,ConvertToSpacePipe],
  imports: [
    RouterModule.forChild([
      {path:'products' , component:ProductListComponent},
      {path:'products/:id' , component: ProductDetailComponent},
    ]),
    SharedModule
  ]
})
export class ProductModule { }
