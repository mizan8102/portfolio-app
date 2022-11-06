import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  selectBtn:string='web';
  resultQuery:any=[];

  works:any=[
    { name:'Inventory Management',subtitle:'multiple user role based' ,catagory:'web' ,image:'../../../assets/img/project/work1.png', language:['Laravel 9', 'VueJs 3','Vuex', 'Html' , 'Css', 'TailwindCss', ] , git: "https://github.com/mizan8102/ever-build-corporation", live:'https://everbuild.vercel.app/'},
    { name:'School Management',subtitle:'multiple user role based ' ,catagory:'web' ,image:'../../../assets/img/project/work2.png', language:['Laravel 8', 'VueJs 2','Vuetify','Vuex', 'Html' , 'Css' ] , git: "https://github.com/mizan8102/al_madani", live:'https://almadanimadrasha.com/'},
    { name:'Erp Management',subtitle:'multiple user role based ' ,catagory:'web' ,image:'../../../assets/img/project/web4.png', language:['Laravel8', 'Jquery','Bootstrap', 'Html' , 'Css' ] , git: "https://github.com/mizan8102/InventoryJQueryLaravel"},
    { name:'News App',subtitle:`It's only frontend project` ,catagory:'web' ,image:'../../../assets/img/project/work3.png', language:['Angular Js','Material Ui','Html','Css' ] , git: "https://github.com/mizan8102/angular-news-app"},
    { name:'Book Store',subtitle:`It's only frontend project` ,catagory:'web' ,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png', language:['VueJs','Firebase','Html','Css' ] , git: "https://github.com/mizan8102/bookstore"},

    // android project

    { name:'Learning App',subtitle:'C language learning app' ,catagory:'android' ,image:'../../../assets/img/project/work5.png', language:['Android','Java','Firebase','Sqlite' ] , git: "https://github.com/mizan8102/Cprograming"},
    { name:'Virtual Talk Ai',subtitle:'Command based ai project' ,catagory:'android' ,image:'../../../assets/img/project/work4.jpg', language:['Android', 'Java'] , git: "https://github.com/mizan8102/apir_virtual_talk"},
    { name:'E-commerce',subtitle:'e-commerce android apps' ,catagory:'android' ,image:'https://www.gstatic.com/devrel-devsite/prod/v0427f8a5788f798e3d6bd6e8789f9c1353ea9d7c80868d11a32bd9516fe63280/android/images/touchicon-180.png', language:['Android', 'Java','API'] , git: "https://github.com/mizan8102/onlineshop"},
    { name:'Audio Player',subtitle:'audio player android apps' ,catagory:'android' ,image:'https://www.gstatic.com/devrel-devsite/prod/v0427f8a5788f798e3d6bd6e8789f9c1353ea9d7c80868d11a32bd9516fe63280/android/images/touchicon-180.png', language:['Android', 'Java'] , git: "https://github.com/mizan8102/audio_player"},
    { name:'Covid Info',subtitle:'covid tracker android apps' ,catagory:'android' ,image:'https://www.gstatic.com/devrel-devsite/prod/v0427f8a5788f798e3d6bd6e8789f9c1353ea9d7c80868d11a32bd9516fe63280/android/images/touchicon-180.png', language:['Android', 'Java','Api'] , git: "https://github.com/mizan8102/covid19"},
    { name:'NewsPaper',subtitle:'android apps' ,catagory:'android' ,image:'https://www.gstatic.com/devrel-devsite/prod/v0427f8a5788f798e3d6bd6e8789f9c1353ea9d7c80868d11a32bd9516fe63280/android/images/touchicon-180.png', language:['Android', 'Java','Firebase'] , git: "https://github.com/mizan8102/Newspaper"},
    { name:'flying games',subtitle:'Flying fish games android ' ,catagory:'android' ,image:'https://www.gstatic.com/devrel-devsite/prod/v0427f8a5788f798e3d6bd6e8789f9c1353ea9d7c80868d11a32bd9516fe63280/android/images/touchicon-180.png', language:['Android', 'Java','Sqlite'] , git: "https://github.com/mizan8102/flyingFish"},
    { name:'Image to Text Coverter',subtitle:'this app image covert to text' ,catagory:'android' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVns0nK-M_3nU-FDr1F0N-_HqsUupY2CV5nQ&usqp=CAU', language:['Flutter', 'Dart','FirebaseML'] , git: "https://github.com/mizan8102/image_to_text_converter"},
    { name:'World Time App',subtitle:'help know any location time' ,catagory:'android' ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVns0nK-M_3nU-FDr1F0N-_HqsUupY2CV5nQ&usqp=CAU', language:['Flutter', 'Dart','Api'] , git: "https://github.com/mizan8102/worldtime"},



    // { name:'School Management', catagory:'web' ,image:'../../../assets/img/project/work2.png', language:'Laravel & VueJs' , git: "https://github.com/mizan8102/ever-build-corporation"},
    // { name:'Learning App', catagory:'android' ,image:'../../../assets/img/project/work3.png', language:'Anroid Studio (Java)' , git: "https://github.com/mizan8102/ever-build-corporation"},
    // { name:'Apir Virtual AI ' ,image:'../../../assets/img/project/work4.jpg', language:'Anroid Studio (Java)' , git: "https://github.com/mizan8102/ever-build-corporation"},
    // { name:'Hospital Management' ,image:'../../../assets/img/project/work5.png', language:'Java Swing' , git: "https://github.com/mizan8102/ever-build-corporation"},
    // { name:'News ' ,image:'../../../assets/img/project/work1.png', language:'Angular' , git: "https://github.com/mizan8102/ever-build-corporation"},
  ]
  constructor() { }

  ngOnInit(): void {

    this.catagory('web');
  }

  catagory(id:string){
    this.selectBtn=id;
    this.resultQuery= this.works.filter((item:any)=>{
      return id.toLowerCase().split(' ').every(v => item.catagory.toLowerCase().includes(v))
    })
  }

}
