import { Component } from '@angular/core';
import * as BotUI from 'botui'; // Importa BotUI como un módulo

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  constructor() { }

  ngOnInit(): void {
    this.initializeChatbot();
  }

  initializeChatbot() {
    const botui = BotUI.create('my-botui-app'); // Utiliza BotUI.create() para crear una instancia

    botui.message.add({
      content: '¡Hola! Soy el chatbot de tu empresa. ¿En qué puedo ayudarte hoy?'
    });

    botui.action.button({
      action: [
        { text: 'Información de la empresa', value: 'info' },
        { text: 'Productos y servicios', value: 'productos' },
        { text: 'Contacto', value: 'contacto' }
      ]
    }).then((res) => {
      if (res.value === 'info') {
        botui.message.add({
          content: 'Somos una empresa dedicada a...'
        });
      } else if (res.value === 'productos') {
        botui.message.add({
          content: 'Ofrecemos una variedad de productos y servicios...'
        });
      } else if (res.value === 'contacto') {
        botui.message.add({
          content: 'Puedes contactarnos en...'
        });
      }
    });
  }
}
