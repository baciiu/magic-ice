import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { StandardComponent } from './pages/standard/standard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './pages/home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { Button } from 'primeng/button';
import { PrimeTemplate } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { CardComponent } from './layout/card/card.component';

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
    AvatarModule,
    Button,
    PrimeTemplate,
    SidebarModule,
    CardComponent,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {}

  title = 'Magic Ice';
  visibleSidebar1: boolean = false;
}
