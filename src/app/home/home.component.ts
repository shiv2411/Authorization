import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundColor = environment.homeBackgroundColor;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
