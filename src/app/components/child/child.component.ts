import { Component,EventEmitter,Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userName:string = '';
  @Output() childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log('child component fired ngOnInit');
  }

  clickButton() : any {
    this.childEvent.emit('James');
  }

  ngOnChanges(changes:SimpleChanges){
        console.log(changes['userName'].isFirstChange())

  }
}
