import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as BotUI from 'botui'; // Importa BotUI como un módulo

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.initializeChatbot();
  }

  private initializeChatbot(): void {

  const  botui = BotUI['default']({
    container: '#botui-app'
  }) // id of container


  botui.message.add({
    content: '¡Hola! Soy el chatbot de tu empresa. ¿En qué puedo ayudarte hoy?'
  });

  return botui.action.set(
    {
      options:[
        { label: 'Información de la empresa', value: 'info' },
        { label: 'Productos y servicios', value: 'productos' },
        { label: 'Contacto', value: 'contacto' }
      ],
    },
    { actionType: 'select'}
  ).then((res: { value: string; }) => {
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


    /* const botui = BotUI.createBot(); */


    /* botui.action.buttons({
      action: [
        { text: 'Información de la empresa', value: 'info' },
        { text: 'Productos y servicios', value: 'productos' },
        { text: 'Contacto', value: 'contacto' }
      ]
    }).then((res: { value: string; }) => {
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
  */
}
