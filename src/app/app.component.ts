import { Component } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sample-lazy-loading-app';
  constructor(private communicationService: CommunicationService) {
    this.communicationService.setData('Hello from AppComponent');
  }
}
