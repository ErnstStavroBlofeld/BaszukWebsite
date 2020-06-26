import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './app-showcase.component.html',
  styleUrls: ['./app-showcase.component.css']
})
export class AppShowcaseComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;

}
