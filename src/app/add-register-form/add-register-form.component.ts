import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-register-form',
  templateUrl: './add-register-form.component.html',
  styleUrls: ['./add-register-form.component.css']
})
export class AddRegisterFormComponent {
  dados = {};
  constructor(public http: HttpClient) { }
  refresh(): void {
    window.location.reload();
  }

  send() {
    const req =
      this.http.post('http://localhost:5000/insert_record', {
        nome: "DadoTeste",
        email: "dado@gmail.com",
        telefone: "11 9087-8976"
      }).subscribe(
        res => {
          this.refresh();
        },
        err => {
          console.log("Error ocurred");
        }
      )
  }
}
