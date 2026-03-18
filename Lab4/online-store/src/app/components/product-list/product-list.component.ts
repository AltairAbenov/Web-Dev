import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {


  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 310000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },

    {
      id: 2,
      name: 'iPhone 14',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 350000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=353220100'
    },

    {
      id: 3,
      name: 'iPhone 15',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 390000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=353220100'

    },

    {
      id: 4,
      name: 'iPhone 16',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 450000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h2b/87310975959070.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=353220100'

    },

    {
      id: 5,
      name: 'iPhone 17',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 560000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=353220100'

    },

    {
      id: 6,
      name: 'iPhone 13 Pro',
      description: 'Pro version of Apple smartphone with great camera and performance.',
      price: 520000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hdd/64197462163486.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/hc9/64197465014302.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h62/h4a/64197468553246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/h03/64197470289950.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-seryi-102298772/?c=353220100'

    },

    {
      id: 7,
      name: 'iPhone 14 Pro',
      description: 'Pro version of Apple smartphone with great camera and performance.',
      price: 540000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hfd/64403477659678.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/hf2/64403480936478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h54/64403483525150.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h32/64403486212126.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-chernyi-106363265/?c=353220100'

    },

    {
      id: 8,
      name: 'iPhone 15 Pro',
      description: 'Pro version of Apple smartphone with great camera and performance.',
      price: 690000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/hf0/86319889678366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/ha6/86319889711134.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/h49/86319889743902.jpg?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-sinii-113138331/?c=353220100'

    },

    {
      id: 9,
      name: 'iPhone 16 Pro',
      description: 'Pro version of Apple smartphone with great camera and performance.',
      price: 590000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h86/87295486230558.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h84/87295486263326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/hb8/87295486296094.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-zolotistyi-123888919/?c=353220100'

    },

    {
      id: 10,
      name: 'iPhone 17 Pro',
      description: 'Pro version of Apple smartphone with great camera and performance.',
      price: 780000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=353220100'

    }


    ]

  get productWithHighestPrice(): Product  {
  
    return this.products.reduce((maxProduct, currentProduct) => {
      return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    }
    , this.products[0] || null);
  }


}