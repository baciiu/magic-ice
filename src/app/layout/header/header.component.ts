import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TranslateModule } from '@ngx-translate/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ImageModule, TranslateModule, DividerModule],
})
export class HeaderComponent {}
