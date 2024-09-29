import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpComponent } from '../../layout/count-up/count-up.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CountUpComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
