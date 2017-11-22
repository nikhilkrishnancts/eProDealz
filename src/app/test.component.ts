import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  quote: string = "The world will notice you when you are different and not when you are a follower";
  constructor() { }

  ngOnInit() {
  }

}
