import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../../types/interfaces';
import { AuthService } from '../../services/auth.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor(
    public authService: AuthService,
    private requestService: RequestService
  ) {}

  text: string = ""

  @Input() messages: Message[] = []
  @Input() id_appeal: number = 0

  @Output() onMessage = new EventEmitter<Message>();
   
  sendMessage() {
    if (!this.text || !this.id_appeal)
    this.requestService.send_message(
      this.authService.id,
      this.authService.role,
      this.id_appeal,
      this.text
    ).subscribe(
      response => {
        this.text = ""
        this.onMessage.emit(response)
      }
    )
  }
}
