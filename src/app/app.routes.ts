import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BookmarkSectionComponent } from './bookmark-section/bookmark-section.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { AllSectionComponent } from './all-section/all-section.component';
import { SearchSectionComponent } from './search-section/search-section.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'main', title: 'K-KaTeX / 메인', component: MainComponent },
  {
    path: 'bookmark',
    title: 'K-KaTeX / 북마크',
    component: BookmarkSectionComponent,
  },
  {
    path: 'category',
    title: 'K-KaTeX / 카테고리',
    component: CategorySectionComponent,
  },
  {
    path: 'all',
    title: 'K-KaTeX / 모든 문법',
    component: AllSectionComponent,
  },
  {
    path: 'search',
    title: 'K-KaTeX / 검색 결과',
    component: SearchSectionComponent,
    data: { s: '' },
  },
];
