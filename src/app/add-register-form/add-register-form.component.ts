import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-register-form',
  templateUrl: './add-register-form.component.html',
  styleUrls: ['./add-register-form.component.css']
})
export class AddRegisterFormComponent {
  dados;
  constructor() { }
  // send(){
  //   this.http.post('http://localhost:5000/insert_record', this.dados)
  //     .subscribe(() => {
  //       alert('Os dados foram salvos!');
  //     });
  // }

}
