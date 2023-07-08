import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit {
  user:any =localStorage.getItem("user") ;
  existence:any
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
    this.checkUsere()
   console.log(this.existence); 
   if(!this.existence){
    this.renderer.addClass(this.elRef.nativeElement, "auth");
    this.renderer.removeAttribute(this.elRef.nativeElement, 'click');
   }
  }

  checkUsere(){
    this.existence = localStorage.getItem('user') !== null;
    
  }
  

}
