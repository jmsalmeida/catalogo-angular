import { Component, OnInit } from '@angular/core';
import { Catalog } from '../catalog';
import { CATALOGS } from '../mock-catalog';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  catalogs = CATALOGS;

  constructor() { }

  ngOnInit() {
  }

}
