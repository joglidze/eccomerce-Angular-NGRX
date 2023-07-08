import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { productsState } from '../../home/store/home.select';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
   text: any;
 @Input() products: any;
  constructor() {}
  ngOnInit(): void {
  
  }
 

  
}
