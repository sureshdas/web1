import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Directive({
  selector: '[appMenuClick]'
})
export class MenuClickDirective {
  ele: any;
  constructor(private _elRef: ElementRef) {
    debugger;
    _elRef.nativeElement.addEventListener('click', (event) => {
      debugger;
      let _clickedEle = document.querySelector('.menu > a.menu-active')
      if (_clickedEle) {
        _clickedEle.classList.remove('menu-active');
      }
      let _currClickedEle = event.target;
      _currClickedEle.classList.add('menu-active');
    });
  }

}
