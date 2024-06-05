import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { getcategoriesActions } from '@org/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

 
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent,CommonModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'santosh-workspace';

 

  constructor(private readonly store: Store){}

  ngOnInit(){
    this.store.dispatch(getcategoriesActions());
  }

}
