import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.route.snapshot.params['page'];
  }

}
