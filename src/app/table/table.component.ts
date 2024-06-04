import { Component, Input, SimpleChanges } from '@angular/core';
import { GrammarContextService } from '../grammar-context.service';
import { GrammarComponent } from '../grammar/grammar.component';
import { NgFor } from '@angular/common';
import { categorys, Grammar } from '../../constant/grammars';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [GrammarComponent, NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() sortBy = '';
  @Input() label = '';

  data: Grammar[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortBy']) {
      this.fetchByCategory(this.sortBy);
      this.fetchByMain(this.sortBy);
      this.fetchByBookmark(this.sortBy);
    }
  }

  constructor(private grammarService: GrammarContextService) {}

  fetchByCategory(category: string) {
    this.data = this.grammarService.getByCategory(category);
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
}