import { Component, OnInit } from '@angular/core';
import { Catalog } from '../catalog';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  register: Catalog = {
    id: 1,
    name: "James",
    email: "james.almeida.ti@gmail.com",
    telefone: "11 97223-7267"
  }

  constructor() { }

  ngOnInit() {
  }

}
