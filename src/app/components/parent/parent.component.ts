import { Component, destroyPlatform, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userName = 'Bob'
  nameList:string[] = ['George', 'James'];
  //isChildDestroyed: boolean;

  constructor() { }

  //life cycle hook
  //after the constructor
  ngOnInit(): void {
    console.log('Parent component fired ngOnInit');
  }

  updateUser() : void{
    this.userName = 'Chris';
  }

  addNameToList(name:string) : void {
    this.nameList.push(name);
  }
}
//destroy() {
//this.isChildDestroyed = true;

