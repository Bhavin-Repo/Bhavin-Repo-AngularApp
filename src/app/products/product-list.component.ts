// 1.Define class
// 2.Define Decorator
// 3.Import needed component
import { Component, OnInit } from '@angular/core';
import { iproduct } from './product';
import { ProductService } from './product.service';


@Component({
templateUrl:'./product-list.component.html',
styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

  pageTitle : string = 'Product List'
  imgwidth : number = 60
  imgMargin : number = 2
  showImage : boolean = false
  filteredProducts : iproduct[]
  products : iproduct[]
  errormsg : string;

constructor(private productService : ProductService){
}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next :product  => {
      this.products = product;
      this.filteredProducts = this.products;
    },
    error : err => this.errormsg = err
    
  });
  
}
 
//Properties

 _lisFilter : string

 get listFilter() : string{
   return this._lisFilter;
 }
 set listFilter(value : string){
   this._lisFilter = value
   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products; 
 }

 toggleImage() : void{
   this.showImage = !this.showImage;
  }

  performFilter(filterby : string): iproduct[]{
    filterby = filterby.toLocaleLowerCase();
      return this.products.filter( (product : iproduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterby) !==-1);
  }
  
  onRatingClicked(message : string) :void{

    this.pageTitle = 'Product List ' + message; 

  }
}