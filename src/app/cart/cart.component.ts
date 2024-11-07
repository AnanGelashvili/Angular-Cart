import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../Services/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalPrice();
  }

  // Method to update the total price
  private updateTotalPrice(): void {
    this.totalPrice = this.cartService.sumCart();
  }


  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems(); // Refresh cart items
    this.updateTotalPrice(); // Recalculate total price after adding an item
  }
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Refresh the cart items
    this.updateTotalPrice(); // Recalculate total price after removal
  }

  

  
}
