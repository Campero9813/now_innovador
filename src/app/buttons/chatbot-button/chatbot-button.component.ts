import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-button',
  templateUrl: './chatbot-button.component.html',
  styleUrls: ['./chatbot-button.component.css']
})
export class ChatbotButtonComponent {

  showChatbot: boolean = false;

  toggleChatbot() {
    this.showChatbot = !this.showChatbot;
  }
}
