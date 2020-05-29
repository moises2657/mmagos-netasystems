import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('usuario') usuario: UserInterface
  constructor() { }

  ngOnInit(): void {
  }

}
