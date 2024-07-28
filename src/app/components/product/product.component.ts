import { Component, OnInit, input, output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  public product = input.required<Product>();
  public productOutput = output<Product>();

  ngOnInit(): void {
    this.productOutput.emit(this.product());
  }
}
