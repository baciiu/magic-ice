import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { StandardComponent } from './pages/ice/standard/standard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TranslateModule,
    NavComponent,
    HeaderComponent,
    StandardComponent,
    FooterComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {}

  title = 'magic-ice';
  cards = [1, 1, 1, 1, 1, 1, 1, 1];
}
