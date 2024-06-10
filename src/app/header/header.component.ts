import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  search: string = '';
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
