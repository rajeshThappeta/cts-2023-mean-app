import { Component, inject, OnDestroy, OnInit, effect } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  //inject DataService
  dataService = inject(DataService);
  users?: User[];
  user?: User;
  usersUnsubscribe?: Subscription;

  y;

  constructor() {
   
  }

  hi= effect(() => {
    console.log('signal changed');
    this.y = this.dataService.x();
  });
  
  ngOnInit(): void {
    this.y = this.dataService.x();

    this.usersUnsubscribe = this.dataService.getAllUsers().subscribe(
      (users) => {
        this.users = users.data;
        // console.log(this.users)
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  printUserById(id: number) {
    this.user = this.users?.find((userObj) => userObj.id === id);
    // console.log(this.user)
  }

  ngOnDestroy(): void {
    this.usersUnsubscribe?.unsubscribe();
  }

  changeSignal() {
    this.dataService.x.set(123);
  }
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
