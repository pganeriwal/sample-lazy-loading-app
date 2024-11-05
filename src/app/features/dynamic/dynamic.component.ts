import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent implements OnInit {
  data: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.data$.subscribe((data) => (this.data = data));
  }
}
