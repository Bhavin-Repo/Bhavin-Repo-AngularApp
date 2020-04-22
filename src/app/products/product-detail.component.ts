import { Component, OnInit } from '@angular/core';
import { iproduct } from './product';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Detailrrr';
  product : iproduct;
  constructor(private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
  }

  onBack() : void{
    this.router.navigate(['/products']);
  }

}
