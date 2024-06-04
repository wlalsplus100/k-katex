import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

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
  onKeyUp(event: any) {
    this.search = event.target.value;
  }
}
