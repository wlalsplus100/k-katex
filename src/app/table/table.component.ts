import { Component, Input, SimpleChanges } from '@angular/core';
import { GrammarContextService } from '../grammar-context.service';
import { GrammarComponent } from '../grammar/grammar.component';
import { NgFor, NgIf } from '@angular/common';
import { categorys, Grammar } from '../../constant/grammars';

type Category = (typeof categorys)[number];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [GrammarComponent, NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() sortBy = '';
  @Input() label = '';

  data: Grammar[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortBy']) {
      this.fetchBySearchKeyword(this.sortBy);
      this.fetchByCategory(this.sortBy);
      this.fetchByMain(this.sortBy);
      this.fetchByBookmark(this.sortBy);
      this.fetchByAll(this.sortBy);
    }
  }

  constructor(private grammarService: GrammarContextService) {}

  fetchBySearchKeyword(keyword: string) {
    try {
      this.data = this.grammarService.getBySearchKeyword(keyword);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  fetchByCategory(category: string) {
    if (categorys.includes(category as Category)) {
      this.data = this.grammarService.getByCategory(category);
    }
  }

  fetchByMain(sortBy: string) {
    if (sortBy === 'main') {
      this.data = this.grammarService.getByIndex([0, 1, 2]) as Grammar[];
    }
  }

  fetchByBookmark(sortBy: string) {
    if (sortBy === 'bookmark') {
      this.data = this.grammarService.getByIsBookmarkAll();
    }
  }

  fetchByAll(sortBy: string) {
    if (sortBy === 'all') {
      this.data = this.grammarService.getGrammars;
    }
  }
}
