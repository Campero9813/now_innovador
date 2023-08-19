import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent {
  redirectToWhats() {
    const whats = 'https://wa.me/525625813142'; // Enlace a chat whatsapp
    window.open(whats, '_blank');
  }
}
