import { Component } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrl: './java.component.css'
})
export class JavaComponent {
  data:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, eius ducimus';
  fee:number=20000;
  rateOfInterest:number=0.12;
  person={
    pid:100,
    name:'ravi'
  }

  currentDate=new Date()

  sampleData:number=12.345678;
}
