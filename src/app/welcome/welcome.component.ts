import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title: string = 'eProDealz';
  motivationImg: string = 'assets/images/1.png';
  achievers = ['assets/images/APJ.jpg','assets/images/sachin.jpg','assets/images/NelsonMandela.jpg'];
  getColor(){
    return this.title === 'eProDealz' ? 'yellow' : 'red';
  }
  constructor() { }

  ngOnInit() {
  }

}
