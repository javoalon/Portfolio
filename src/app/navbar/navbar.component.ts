import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  toggleLanguage() {
    if (this.translate.currentLang === "en") {
      this.translate.use('es');
    } else {
      this.translate.use('en')
    }
  }

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  ngOnInit() {
    this.checkIfMobile();
    window.addEventListener('resize', () => this.checkIfMobile());
  }

  isMobile: boolean = false;

  checkIfMobile() {
    this.isMobile = window.innerWidth < 769;
  }

  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  closeMenu() {
    if (this.menuVisible == true) {
      this.menuVisible = false;
    } else{
      this.menuVisible = false;
    }
  }
}
