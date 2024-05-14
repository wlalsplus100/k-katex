import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  title = 'K-KaTeX';
  search = '';
  onKey(event: any) {
    this.search = event.target.value;
  }
}
