import { Routes } from '@angular/router';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
  { path: '', component: ProductList, title: 'Products' },
  { path: 'cart', component: ShoppingCart, title: 'Cart' },
  { path: '**', redirectTo: '' },
];