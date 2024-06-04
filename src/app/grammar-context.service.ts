import { Injectable } from '@angular/core';
import { Grammar } from '../constant/grammars';
import syncGrammarData, { categorys } from '../constant/grammars';

@Injectable({
  providedIn: 'root',
})
export class GrammarContextService {
  private grammars: Grammar[];
  private categorys: Array<(typeof categorys)[number]>;
  constructor() {
    this.grammars = syncGrammarData();
    this.categorys = [...categorys];
  }

  get getGrammars() {
    return this.grammars;
  }

  getBySearchKeyword(searchKeyword: string) {
    return this.grammars.filter((grammar) =>
      grammar.searchKeyword.includes(searchKeyword)
    );
  }

  getAllCategory() {
    return this.categorys;
  }

  getByCategory(category: string) {
    return this.grammars.filter((grammar) => {
      console.log(grammar.category === category);
      return grammar.category === category;
    });
  }

  getByIsBookmarkAll(): Grammar[] {
    return this.grammars.filter((grammar) => grammar.isBookmark);
  }

  getByIsBookmark(index: number): boolean | undefined {
    return this.grammars.find((grammar) => grammar.index === index)?.isBookmark;
  }

  getByIndex(index: number | number[]) {
    if (typeof index === 'number') {
      return this.grammars.filter((grammar) => grammar.index === index);
    }
    return index.map((idx) => {
      return this.grammars.find((grammar) => grammar.index === idx);
    });
  }

  updateBookmarkLocalStorage(grammarIndex: number) {
    if (grammarIndex === -1) return;
    this.grammars.map((grammar) => {
      if (grammar.index === grammarIndex) {
        grammar.isBookmark = !grammar.isBookmark;
      }
    });
    localStorage.setItem(
      'bookmark',
      JSON.stringify(
        this.grammars
          .filter((grammar) => grammar.isBookmark)
          .map((grammar) => grammar.index)
      )
    );
  }
}
