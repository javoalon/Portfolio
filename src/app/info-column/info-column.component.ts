import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-info-column',
  templateUrl: './info-column.component.html',
  styleUrls: ['./info-column.component.scss']
})
export class InfoColumnComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
