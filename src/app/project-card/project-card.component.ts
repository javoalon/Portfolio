import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() portada: string = '';
  @Input() tecnologia1: string = '';
  @Input() tecnologia2: string = '';

  isMobile: boolean = false;

  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => this.checkIfMobile());
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 769;
  }
}
