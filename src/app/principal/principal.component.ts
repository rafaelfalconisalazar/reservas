import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  static URL="home";
  
  images=["https://t1.uc.ltmcdn.com/images/9/6/9/img_cuanto_mide_un_campo_de_futbol_34969_600.jpg","https://t1.uc.ltmcdn.com/images/9/6/9/img_cuanto_mide_un_campo_de_futbol_34969_600.jpg","https://t1.uc.ltmcdn.com/images/9/6/9/img_cuanto_mide_un_campo_de_futbol_34969_600.jpg"];

  constructor() { }

  ngOnInit() {
  }

}
