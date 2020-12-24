import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[basicDirective]'
})
export class BasicDirective implements OnInit {

  constructor(private el: ElementRef) {
     console.log('hi');
  }

// console.log('directive');
//     this.el.nativeElement.style.backGroundColor = 'red';
//   }



ngOnInit() {
  console.log('hi');
    // Not a good idea to access the DOM directly using nativeElement
    this.el.nativeElement.style.backgroundColor = "red";

    // can use renderer2 to access the dom
  //  this.rd.setStyle(this.el.nativeElement, "color", "gray");

    // logging the defaultColor property value getting from the host element
   // console.log(this.defaultColor);
  }

}