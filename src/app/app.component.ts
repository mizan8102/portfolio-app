import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';
  isNight:boolean=false;
  menues:any=[
    { name: 'Home', icon:'fas fa-home', link:'/' },
    { name: 'About', icon:'fas fa-user', link:'/about' },
    { name: 'Portfolio', icon:'fas fa-briefcase', link:'/portfolio' },
    { name: 'Achieve', icon:'fas fa-newspaper', link:'/acheive' },
    { name: 'Contact', icon:'fas fa-envelope-open', link:'/contact' },
  ];

  constructor(private router:Router){
    console.log(router.url);

  }
}
