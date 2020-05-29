import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserInterface } from 'src/app/shared/interfaces/UserInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: UserInterface;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getInfo().subscribe(res=>{
      this.user = res;
    })
  }

}
