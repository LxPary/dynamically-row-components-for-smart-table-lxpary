import { Component, Input, Output, EventEmitter } from '@angular/core';
import {InjiService} from './inji.service';
import { Subscription ,Subject} from 'rxjs';

//http://plnkr.co/edit/SVbMLQJSrZMkiwf5NKc8?p=preview

@Component({
  selector: 'td[sarmad]',
  template: `
  <div style="background:red;">
    <h5>Hello {{name}}!</h5>
    <button (click)="test()">bingo</button>
    <button (click)="close(ref)">Close</button>
  </div>
  `,
  host: {
      "[attr.colspan]": "3", 
      "(removeTheRow)": "ref"
   },
})

export class HelloComponent  {
  @Input() name: string;
   @Input() componentName: string;
  @Input() ref: any;
  @Output() onRemove = new EventEmitter<any>();
   

  test(){
    alert("HI: " + this.name);
  }

//@Output('removeTheRow') 
//closeRow = new EventEmitter<any>();
  close(ref:any){
    console.log("internal close");
    this.InjiService.removeComponent(ref);
    debugger;
    this.InjiService.componentSubjects[this.componentName].next("value emitted from "+ref.componentName)
    debugger;
    //this.closeRow.emit();
    //this.onRemove.emit(this.ref);
  }

  constructor(
    private InjiService: InjiService
  ) {}
}
