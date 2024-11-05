import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrl: './feature-one.component.scss'
})
export class FeatureOneComponent implements OnInit {
  data: string = '';

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    this.communicationService.data$.subscribe((data) => (this.data = data));
  }
}
