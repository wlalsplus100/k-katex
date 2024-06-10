import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  title = 'K-KaTeX';
  search = '';
  labels: string[] = [
    'K-KaTeX에서의 모든 KaTeX 문법에 대한 정리는 다음과 같이 이루어집니다',
  ];
  tableItem = 'main';

  constructor(private router: Router) {}

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.router.navigate([`/search`], {
        queryParams: { s: this.search },
      });
    }
    const inputEl = event.target as HTMLInputElement;
    this.search = inputEl.value;
  }
}
