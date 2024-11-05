import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';

@Component({
  selector: 'app-extra',
  // template: `<h2>Extra Module Loaded!</h2>`,
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.scss'
})
export class ExtraComponent implements OnInit {
  data: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.data$.subscribe((data) => (this.data = data));
  }
}
