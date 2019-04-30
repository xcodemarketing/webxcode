import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailerService {

  constructor() {
  }
   enviarEmail() {
    return (alert('Gracias por tu solicitud, Te estaremos contactando!'));
  }
}
