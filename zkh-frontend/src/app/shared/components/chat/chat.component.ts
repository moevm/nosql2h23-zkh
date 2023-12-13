import { Component, Input } from '@angular/core';
import { Message } from '../../types/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(
    public authService: AuthService
  ) {}

  text: string = ""

  @Input() messages: Message[] = []
  
  sendMessage() {
    console.log(this.text)
    this.text = ""
  }
}
