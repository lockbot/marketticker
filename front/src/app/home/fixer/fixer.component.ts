import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  bid: number;
  ask: number;
  spread: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {bid: 1, name: 'Hydrogen', ask: 1.0079, spread:2},
  {bid: 2, name: 'Helium', ask: 4.0026, spread: 2},
  {bid: 3, name: 'Lithium', ask: 6.941, spread: 2},
  {bid: 4, name: 'Beryllium', ask: 9.0122, spread: 2},
  {bid: 5, name: 'Boron', ask: 10.811, spread: 2},
  {bid: 6, name: 'Carbon', ask: 12.0107, spread: 2},
  {bid: 7, name: 'Nitrogen', ask: 14.0067, spread:2},
  {bid: 8, name: 'Oxygen', ask: 15.9994, spread: 2},
  {bid: 9, name: 'Fluorine', ask: 18.9984, spread: 2},
  {bid: 10, name: 'Neon', ask: 20.1797, spread: 2},
];

@Component({
  selector: 'app-fixer',
  templateUrl: './fixer.component.html',
  styleUrls: ['./fixer.component.scss']
})
export class FixerComponent implements OnInit {
  displayedColumns: string[] = ['bid', 'name', 'ask', 'spread'];
  dataSource = ELEMENT_DATA;

  constructor() {
    
  }

  ngOnInit(): void {
  }
}
