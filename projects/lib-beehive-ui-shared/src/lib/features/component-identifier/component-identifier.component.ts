import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-identifier',
  templateUrl: './component-identifier.component.html',
  styleUrls: ['./component-identifier.component.css']
})
export class ComponentIdentifierComponent implements OnInit {

  _componentName!: string;
  _path!: string;
  _module!:string;
  _project!:string;
  _bg!:'blue' | 'red' | 'green' ;
  @Input()
  set componentName(name:string){
    this._componentName=name;
  }


  @Input()
  set path(path:string){
    this._path=path;
  }

  @Input()
  set module(module:string){
    this._module=module;
  }

  @Input()
  set project(name:string){
    this._project=name;
  }

  @Input()
  set bg(bg:'blue'|'red'|'green'){
    this._bg=bg;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
