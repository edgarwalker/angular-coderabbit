import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-canceling over-ear headphones with 30h battery.',
    price: 149.99,
    imageUrl: 'https://placehold.co/320x200/1e293b/e2e8f0?text=Headphones',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'Compact layout, hot-swappable switches, RGB backlight.',
    price: 89.5,
    imageUrl: 'https://placehold.co/320x200/334155/f8fafc?text=Keyboard',
  },
  {
    id: 3,
    name: 'USB-C Hub',
    description: '7-in-1 adapter with HDMI, SD, and 100W passthrough.',
    price: 45.0,
    imageUrl: 'https://placehold.co/320x200/0f766e/f0fdfa?text=USB-C+Hub',
  },
  {
    id: 4,
    name: 'Monitor Stand',
    description: 'Aluminum riser with storage drawer.',
    price: 34.99,
    imageUrl: 'https://placehold.co/320x200/7c3aed/f5f3ff?text=Stand',
  },
];