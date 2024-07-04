import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  total: number = 0;
  skip: number = 0;
  limit: number = 30;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        this.total = data.total;
        this.skip = data.skip;
        this.limit = data.limit;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
