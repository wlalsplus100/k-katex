import { GrammarContextService } from './../grammar-context.service';
import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-category-section',
  standalone: true,
  imports: [TableComponent, NgFor],
  templateUrl: './category-section.component.html',
  styleUrl: './category-section.component.css',
})
export class CategorySectionComponent {
  categorys: string[];
  constructor(grammarService: GrammarContextService) {
    this.categorys = grammarService.getAllCategory();
  }
}
