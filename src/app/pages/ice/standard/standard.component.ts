import { Component } from '@angular/core';
import {Button, ButtonModule} from "primeng/button";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {CommonModule} from "@angular/common";
import {CardComponent} from "../../../layout/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-standard',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Button,
    DataViewModule,
    DropdownModule,
    FormsModule,
    DataViewModule, ButtonModule, TagModule, CommonModule, DropdownModule, CardComponent, InputTextModule
  ],
  templateUrl: './standard.component.html',
  styleUrl: './standard.component.scss'
})
export class StandardComponent {
  productNames: string[] = [
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
    "Heading",
  ];
  sortOrder: unknown;
  sortField: string | undefined;

}
