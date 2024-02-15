import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrl: './nodejs.component.css',
})
export class NodejsComponent implements OnInit {
  dataService = inject(DataService);
  users$;
  ngOnInit(): void {
    this.users$ = this.dataService.getUsers();
  }


  searchByName:string;


}
