import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket-banner',
  templateUrl: './rocket-banner.component.html',
  styleUrls: ['./rocket-banner.component.scss'],
})
export class RocketBannerComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
