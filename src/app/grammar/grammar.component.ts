import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import katex from 'katex';
import { GrammarContextService } from '../grammar-context.service';
import { Grammar } from '../../constant/grammars';

@Component({
  selector: 'app-search-keyword',
  standalone: true,
  imports: [NgFor, NgClass, NgStyle],
  template: `
    <ng-container *ngFor="let keyword of keywords">
      <div
        [ngStyle]="{
          'background-color': '#d7d7d7',
          padding: '0 10px',
          'border-radius': '12px',
          'font-size': '14px'
        }"
      >
        {{ keyword }}
      </div>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class KeywordComponent {
  @Input() keywords = [''];
}

@Component({
  selector: 'app-attr',
  standalone: true,
  imports: [NgIf],
  template: `
    <span #content *ngIf="!katexRender">{{ label }}</span>
    <span #content *ngIf="katexRender" class="text-label3"></span>
  `,
})
export class AttrComponent implements AfterViewInit {
  @ViewChild('content') contentRef!: ElementRef;
  @Input() label: string | Array<string> | undefined = '';
  @Input() katexRender: boolean = false;

  ngAfterViewInit(): void {
    if (this.katexRender) {
      katex.render(this.label as string, this.contentRef.nativeElement, {
        output: 'mathml',
      });
    }
  }
}

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [NgFor, NgIf, AttrComponent, KeywordComponent],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.css',
})
export class GrammarComponent implements OnChanges {
  bookmarkSrc = '';
  bookmark: Array<number> | null = localStorage.getItem('bookmark')
    ? JSON.parse(localStorage.getItem('bookmark') as string)
    : null;
  private _data: Grammar = {
    index: -1,
    searchKeyword: ['한글 검색어'],
    sign: '기호 / 기능',
    usage: '사용법',
    category: '카테고리',
    isBookmark: false,
  };
  @Input() set data(value: Grammar) {
    this._data = value;
    this.bookmarkSrc = `/assets/images/${
      this.data.isBookmark ? 'fillstar' : 'star'
    }.svg`;
  }
  get data(): Grammar {
    return this._data;
  }

  @Input() isHead: boolean = false;

  constructor(private grammarService: GrammarContextService) {
    this.data.isBookmark = grammarService.getByIsBookmark(this.data.index)
      ? true
      : false;
  }

  bookmarkHandler() {
    this.updateBookmark();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      // this.updateBookmark();
    }
  }

  updateBookmark() {
    this.grammarService.updateBookmarkLocalStorage(this.data.index);
    this.bookmarkSrc = `/assets/images/${
      this.data.isBookmark ? 'fillstar' : 'star'
    }.svg`;
  }
}
