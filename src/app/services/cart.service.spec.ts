import { TestBed } from '@angular/core/testing';
import { PRODUCTS } from '../data/products';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('adds and removes items using signals', () => {
    const product = PRODUCTS[0];

    service.addToCart(product);
    service.addToCart(product);

    expect(service.itemCount()).toBe(2);
    expect(service.cartItems().length).toBe(1);
    expect(service.cartItems()[0].quantity).toBe(2);

    service.removeItem(product.id);

    expect(service.itemCount()).toBe(0);
    expect(service.cartItems()).toEqual([]);
  });
});