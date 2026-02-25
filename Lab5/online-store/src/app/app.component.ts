import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  categories: Category[] = [];

  // null означает что категория ещё не выбрана — показываем приветствие
  selectedCategoryId: number | null = null;

  // Продукты выбранной категории — передаём в ProductListComponent
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    // Каждый раз при смене категории загружаем свежий массив из сервиса
    this.filteredProducts = this.productService.getProductsByCategory(categoryId);
  }
}
