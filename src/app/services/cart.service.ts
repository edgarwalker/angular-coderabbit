import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();
  readonly itemCount = computed(() =>
    this.items().reduce((sum, line) => sum + line.quantity, 0),
  );
  readonly totalPrice = computed(() =>
    this.items().reduce((sum, line) => sum + line.product.price * line.quantity, 0),
  );

  addToCart(product: Product): void {
    this.items.update((lines) => {
      const index = lines.findIndex((line) => line.product.id === product.id);
      if (index === -1) {
        return [...lines, { product, quantity: 1 }];
      }
      return lines.map((line, i) =>
        i === index ? { ...line, quantity: line.quantity + 1 } : line,
      );
    });
  }

  removeItem(productId: number): void {
    this.items.update((lines) => lines.filter((line) => line.product.id !== productId));
  }
}