import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rocket-banner',
  templateUrl: './rocket-banner.component.html',
  styleUrls: ['./rocket-banner.component.scss'],
})
export class RocketBannerComponent {
  @Input() title: string = '';
}
