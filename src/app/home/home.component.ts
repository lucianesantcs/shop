import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductComponent } from '../components/product/product.component';
import { Product } from '../../types';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private productsService = inject(ProductsService);
  protected products: Product[] = [];
  protected totalRecords: number = 0;
  protected rows: number = 5;

  ngOnInit(): void {
    this.fetchProducts(0, 5);
  }

  protected fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', {
        page,
        perPage,
      })
      .subscribe((products) => {
        this.products = products.items;
        this.totalRecords = products.total;
      });
  }

  protected onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  protected onProductOutput(product: Product) {
    console.log('product', product);
  }
}
