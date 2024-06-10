import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-search-section',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.css',
})
export class SearchSectionComponent {
  search: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const searchParams = params.get('s');
      if (searchParams) this.search = searchParams;
    });
  }
}
