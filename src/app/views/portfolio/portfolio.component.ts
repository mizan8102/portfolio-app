import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  works:any=[
    { name:'Inventory Management' ,image:'../../../assets/img/project/work1.png', language:'Laravel & VueJs' , git: "https://github.com/mizan8102/ever-build-corporation"},
    { name:'School Management' ,image:'../../../assets/img/project/work2.png', language:'Laravel & VueJs' , git: "https://github.com/mizan8102/ever-build-corporation"},
    { name:'Learning App' ,image:'../../../assets/img/project/work3.png', language:'Anroid Studio (Java)' , git: "https://github.com/mizan8102/ever-build-corporation"},
    { name:'Apir Virtual AI ' ,image:'../../../assets/img/project/work4.jpg', language:'Anroid Studio (Java)' , git: "https://github.com/mizan8102/ever-build-corporation"},
    { name:'Hospital Management' ,image:'../../../assets/img/project/work5.png', language:'Java Swing' , git: "https://github.com/mizan8102/ever-build-corporation"},
    { name:'News ' ,image:'../../../assets/img/project/work1.png', language:'Angular' , git: "https://github.com/mizan8102/ever-build-corporation"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
