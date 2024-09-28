import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpComponent } from '../../layout/count-up/count-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CountUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
