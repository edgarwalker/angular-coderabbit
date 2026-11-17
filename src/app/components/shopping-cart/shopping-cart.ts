import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  protected readonly cart = inject(CartService);

  protected removeItem(productId: number): void {
    this.cart.removeItem(productId);
  }
}