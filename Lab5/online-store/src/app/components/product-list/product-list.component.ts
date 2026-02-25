import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  // Получаем продукты от AppComponent через @Input
  @Input() products: Product[] = [];

  // Обрабатываем лайк: находим продукт по id и увеличиваем счётчик
  onLike(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }

  // Обрабатываем удаление: фильтруем массив, убирая продукт с нужным id
  onDelete(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
