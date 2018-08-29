import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent{
  catalogos;
  constructor(public http: HttpClient) { 
    this.http.get('http://localhost:5000/get_records')
      .subscribe((dados) => {
        this.catalogos = dados;
        console.log(dados);
      })
  }

  ngOnInit() {
  }

}
