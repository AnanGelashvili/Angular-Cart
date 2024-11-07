import { Injectable } from '@angular/core';
import { Product } from '../Services/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCartItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    console.log(`${product.name} added to cart`);
  }

  sumCart(): number {
    // Sum up the prices of all products in the cart
    return this.cart.reduce((sum, product) => sum + product.price,0);
  }
  
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(item => item.id !== productId);
    console.log(`Product with ID ${productId} removed from cart`);
  }

  
}
