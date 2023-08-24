import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMysqlService } from 'src/app/services/prueba-mysql.service';


@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent {
  constructor(
    private router:Router,
    public prodsNow: PruebaMysqlService){
      document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.has-animation');

        elements.forEach(function(element) {
          const delay = parseInt(element.getAttribute('data-delay') || '0', 10);

          setTimeout(function() {
            element.classList.add('animate-in');
          }, delay);
        });
      });
    }

    goBack() {
      window.history.back();
    }

}
