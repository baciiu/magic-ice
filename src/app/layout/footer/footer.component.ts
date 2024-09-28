import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [TranslateModule, Button, RouterLink],
})
export class FooterComponent {}
