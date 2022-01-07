import { Component, OnInit, Type, Input } from '@angular/core';

export interface IMenu{
  path:string;
  name:string;
}


@Component({
  selector: 'lib-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  _menus: IMenu[] = [];

  @Input()
  set menus(menu:IMenu[]){
    this._menus=menu;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
