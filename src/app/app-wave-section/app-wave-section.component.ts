import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-section',
  templateUrl: './app-wave-section.component.html',
  styleUrls: ['./app-wave-section.component.css']
})
export class AppWaveSectionComponent {
  @Input() color: string = 'var(--background20)';
  @Input() topOnly: boolean = false;

}
