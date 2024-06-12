import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { productActions } from '../store/product.action';
import { selectProducts, selectProductsByCategory } from '../store/product.selector';

@Component({
  selector: 'org-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() set categoryName(name: string){
    if(name){
      this.store.dispatch(productActions.loadProductByCategory({category:name}));
    }
    else{
       this.store.dispatch(productActions.loadProduct());
    }
  }

  products$ = this.store.select(selectProducts);
  constructor(private readonly store: Store){}
   
  // ngOnInit(): void {
  //     this.store.dispatch(productActions.loadProduct());
  // }
}
