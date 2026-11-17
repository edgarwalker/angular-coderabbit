import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  protected readonly products = PRODUCTS;
  private readonly cart = inject(CartService);

  protected addToCart(product: (typeof PRODUCTS)[number]): void {
    this.cart.addToCart(product);
  }
}