import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  status: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Chocolate',
      status: 'High',
      price: 5
    },
    {
      id: 2,
      name: 'Muffin',
      status: 'Medium',
      price: 7,
    },
    {
      id: 3,
      name: 'Cheesecake',
      status: 'Low',
      price: 10
    },
  ];

  getCount() {
    return this.products.length;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(Product => Product.id === id);
  }
}
