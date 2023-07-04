import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAdmin]',
})
export class AdminDirective implements OnInit {
  user: any;
  constructor(private elemenRef: ElementRef) {}

  ngOnInit(): void {
    this.deleteElement();
  }

  deleteElement() {
    this.getUser();
    const element = this.elemenRef.nativeElement;
    if (this.user.email !== 'lukajoglidze12@gmail.com') {
      element.remove();
    }
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
