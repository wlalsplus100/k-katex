import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-bookmark-section',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './bookmark-section.component.html',
  styleUrl: './bookmark-section.component.css'
})
export class BookmarkSectionComponent {

}
