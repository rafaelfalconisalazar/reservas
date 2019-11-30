import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Info } from './infor.model';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  static URL = "information";

  displayColumns=["fecha","número de cancha","usuario"];

  public infos: Info[];

  public info: Info;  

  

  constructor() { 
    this.info={fecha:"11/11/19",cancha:"5",usuario:"pepe"};
    this.infos=[this.info];
  }

  ngOnInit() {
  }

}
