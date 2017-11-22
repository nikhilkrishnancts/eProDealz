import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'eProDealz';
  motivationImg: string = 'assets/images/1.png';
  achievers = ['assets/images/APJ.jpg','assets/images/sachin.jpg','assets/images/NelsonMandela.jpg'];
  getColor(){
    return this.title === 'eProDealz' ? 'yellow' : 'red';
  }
}
