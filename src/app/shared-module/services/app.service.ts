import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class AppService {
  constructor() { }
  showLoader() {
    document.getElementById('loader').style.display = 'block';
  }
  hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
}
