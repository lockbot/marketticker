import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['instrument', 'bid', 'ask', 'spread'];

  @Input() dataSource!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
