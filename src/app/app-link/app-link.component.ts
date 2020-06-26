import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.css']
})
export class AppLinkComponent {
  @Input() to: string;
  @Input() simple: boolean = false;
}
