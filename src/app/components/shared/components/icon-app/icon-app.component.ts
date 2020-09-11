import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iconapp',
  templateUrl: './icon-app.component.html'
})
export class IconAppComponent {
  @Input() icon: string;
  @Input() iconLib = 'fas';
}
