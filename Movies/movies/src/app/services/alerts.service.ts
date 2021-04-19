import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }
  successMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success'
    });
  }
  errorMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error'
    });
  }
  warningMessage(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      showCancelButton:true,
      icon: 'question'
    });
    
  }
  

}
