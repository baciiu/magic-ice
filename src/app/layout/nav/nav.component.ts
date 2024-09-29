import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { NgClass, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { MegaMenuModule } from 'primeng/megamenu';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    AvatarModule,
    ToolbarModule,
    NgStyle,
    Button,
    InputTextModule,
    NgClass,
    MegaMenuModule,
    NgIf,
    NgOptimizedImage,
    TabViewModule,
    TranslateModule,
    MultiSelectModule,
    ListboxModule,
    FormsModule,
    SplitButtonModule,
    SelectButtonModule,
    SidebarModule,
    DividerModule,
  ],
  standalone: true,
})
export class NavComponent {
  language = 'ro';
  languages: any[] = [
    { label: 'EN', value: 'en' },
    { label: 'RO', value: 'ro' },
  ];
  value!: string;
  visibleSidebar = false;

  constructor(
    private translate: TranslateService,
    private router: Router,
  ) {
    translate.addLangs(this.languages.map((option) => option.value));
    translate.setDefaultLang(this.language);
  }

  ngOnInit() {
    this.value = this.language!;
  }

  changeLanguage(lang: string) {
    if (lang == 'en' || lang == 'ro') {
      this.language = lang;
      this.translate.use(lang);
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
