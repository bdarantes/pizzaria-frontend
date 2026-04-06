import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  senha: string = '';

  fazerLogin() {
    console.log('Tentativa de login iniciada!');
    console.log('E-mail capturado', this.email);
    console.log('Senha capturada', this.senha);
  }
}
